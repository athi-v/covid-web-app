import { Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { apiCountriesByDetails } from '../../api/covidAPI';
import DashboardLayout from '../../layout/DashboardLayout';
import Loading from '../../components/loader/Loading';
import Error from '../../components/error/Error';

const CountryDetails = () => {
    const location = useLocation();
    const locationSplit = location.pathname.split('/');
    const countryName = locationSplit[locationSplit.length - 1];
    console.log(countryName);

    const {
        data: covidCountriesDetails,
        isSuccess,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['covidCountryDetails', countryName],
        queryFn: () => apiCountriesByDetails(countryName),
    });

    return (
        <DashboardLayout>
            {isLoading && <Loading />}
            {isError && <Error />}
            {isSuccess && (
                <Box>
                    <img
                        src={covidCountriesDetails.countryInfo.flag}
                        alt={covidCountriesDetails.country}
                    />
                    <Typography>{covidCountriesDetails.country}</Typography>
                    <Typography>
                        Recovered: {covidCountriesDetails.recovered}
                    </Typography>
                    <Typography>
                        Cases: {covidCountriesDetails.cases}
                    </Typography>
                    <Typography>
                        Deaths: {covidCountriesDetails.deaths}
                    </Typography>
                </Box>
            )}
        </DashboardLayout>
    );
};

export default CountryDetails;
