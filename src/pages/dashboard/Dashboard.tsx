import { Box, Button, Grid, Typography } from '@mui/material';
import DashboardCard from '../../components/card/DashboardCard';
import DashboardLayout from '../../layout/DashboardLayout';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FaHeart, FaPrayingHands } from 'react-icons/fa';
import { TbTestPipe } from 'react-icons/tb';
import { useQuery } from '@tanstack/react-query';
import { apiWorldwide } from '../../api/covidAPI';
import Loading from '../../components/loader/Loading';
import Error from '../../components/error/Error';
import { formatNumber } from '../../components/utils/formatNumber';
import { useNavigate } from 'react-router-dom';
import Poster from '../../assets/poster/covid_poster.jpg';

const Dashboard = () => {
    const navigate = useNavigate();
    const {
        data: covidData,
        isSuccess: isWorldwideSucces,
        isLoading: isWorldwideLoading,
        isError: isWorldwideError,
    } = useQuery({ queryKey: ['covidData'], queryFn: apiWorldwide });

    const overallData = [
        {
            id: '0',
            title: 'Test Conducted',
            total: Number(covidData?.updated),
            icon: <TbTestPipe size={'25'} />,
        },
        {
            id: '0',
            title: 'Recovered',
            total: Number(covidData?.recovered),
            icon: <FaHeart size={'25'} />,
        },
        {
            id: '1',
            title: 'Positive Case',
            total: Number(covidData?.cases),
            icon: <AiOutlineUsergroupAdd size={'25'} />,
        },
        {
            id: '2',
            title: 'Deaths',
            total: Number(covidData?.deaths),
            icon: <FaPrayingHands size={'25'} />,
        },
    ];
    return (
        <DashboardLayout>
            {isWorldwideLoading && <Loading />}
            {isWorldwideError && <Error />}

            {isWorldwideSucces && (
                <>
                    <Typography
                        variant='h1'
                        mb={{ xs: 2, lg: 10 }}
                        sx={{
                            display: { xs: 'block', lg: 'none' },
                        }}
                    >
                        Dashboard
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: { xs: 'none', lg: 'block' },
                            }}
                        >
                            <Box
                                sx={{
                                    height: '50vh',
                                    position: 'relative',
                                }}
                            >
                                <img
                                    src={Poster}
                                    alt='covid poster'
                                    style={{
                                        objectFit: 'cover',
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: '15px',
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: '0px',
                                        p: '14px',
                                    }}
                                >
                                    <Button
                                        disableElevation
                                        variant='contained'
                                        sx={{
                                            textTransform: 'capitalize',
                                        }}
                                        onClick={() => navigate('/statistics')}
                                    >
                                        View Statistics
                                    </Button>
                                </Box>
                            </Box>
                            <Box></Box>
                        </Grid>
                        {overallData.map((item) => (
                            <Grid item xs={12} lg={6}>
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
                    <Grid item lg={12} mt={5}></Grid>
                </>
            )}
        </DashboardLayout>
    );
};

export default Dashboard;
