import { Box, Grid, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { apiCountriesByDetails } from '../../api/covidAPI';
import DashboardLayout from '../../layout/DashboardLayout';
import Loading from '../../components/loader/Loading';
import Error from '../../components/error/Error';
import { FaHeart, FaPrayingHands } from 'react-icons/fa';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import DashboardCard from '../../components/card/DashboardCard';
import { formatNumber } from '../../components/utils/formatNumber';
import { PieChart } from '@mui/x-charts';

const CountryDetails = () => {
    const location = useLocation();
    const locationSplit = location.pathname.split('/');
    const countryName = locationSplit[locationSplit.length - 1];

    const {
        data: covidCountriesDetails,
        isSuccess,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['covidCountryDetails', countryName],
        queryFn: () => apiCountriesByDetails(countryName),
    });

    const total =
        covidCountriesDetails?.cases +
        covidCountriesDetails?.recovered +
        covidCountriesDetails?.deaths;
    console.log(total);

    const countryData = [
        {
            id: '0',
            title: 'Recovered',
            total: Number(covidCountriesDetails?.recovered),
            icon: <FaHeart size={'25'} />,
        },
        {
            id: '1',
            title: 'Positive Case',
            total: Number(covidCountriesDetails?.cases),
            icon: <AiOutlineUsergroupAdd size={'25'} />,
        },
        {
            id: '2',
            title: 'Deaths',
            total: Number(covidCountriesDetails?.deaths),
            icon: <FaPrayingHands size={'25'} />,
        },
    ];
    return (
        <DashboardLayout>
            {isLoading && <Loading />}
            {isError && <Error />}
            {isSuccess && (
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 5,
                        }}
                    >
                        <Typography variant='h1'>
                            {covidCountriesDetails.country}
                        </Typography>
                        <img
                            style={{
                                height: '50px',
                                width: '50px',
                                objectFit: 'contain',
                            }}
                            src={covidCountriesDetails.countryInfo.flag}
                            alt={covidCountriesDetails.country}
                        />
                    </Box>

                    <Grid container spacing={2}>
                        {countryData.map((item) => (
                            <Grid item xs={12} lg={4}>
                                <DashboardCard
                                    title={item.title}
                                    value={
                                        formatNumber(item?.total)?.toString() ||
                                        '0'
                                    }
                                    icon={item.icon}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Box
                        mt={10}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <PieChart
                            series={[
                                {
                                    data: [
                                        {
                                            id: 0,
                                            value: Number(
                                                (
                                                    (covidCountriesDetails?.cases /
                                                        total) *
                                                    100
                                                ).toFixed(0)
                                            ),
                                            label: 'Cases(%)',
                                        },
                                        {
                                            id: 1,
                                            value: Number(
                                                (
                                                    (covidCountriesDetails?.deaths /
                                                        total) *
                                                    100
                                                ).toFixed(0)
                                            ),
                                            label: 'Deaths(%)',
                                        },
                                        {
                                            id: 2,
                                            value: Number(
                                                (
                                                    (covidCountriesDetails?.recovered /
                                                        total) *
                                                    100
                                                ).toFixed(0)
                                            ),
                                            label: 'Recovered(%)',
                                        },
                                    ],
                                    innerRadius: 30,
                                    outerRadius: 100,
                                    paddingAngle: 5,
                                    cornerRadius: 5,
                                    startAngle: -90,
                                    endAngle: 180,
                                },
                            ]}
                            width={600}
                            height={200}
                        />
                    </Box>
                </Box>
            )}
        </DashboardLayout>
    );
};

export default CountryDetails;
