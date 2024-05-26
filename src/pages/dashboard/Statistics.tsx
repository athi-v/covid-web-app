import { useQuery } from '@tanstack/react-query';
import { apiCountries } from '../../api/covidAPI';
import EnhancedTable from '../../components/table/EnhancedTable';
import DashboardLayout from '../../layout/DashboardLayout';
import Loading from '../../components/loader/Loading';
import Error from '../../components/error/Error';
import { Typography } from '@mui/material';

interface CovidCountryData {
    country: string;
    recovered: number;
    cases: number;
    deaths: number;
}

const Statistics = () => {
    const {
        data: covidCountriesData,
        isSuccess,
        isLoading,
        isError,
    } = useQuery({ queryKey: ['covidCountryData'], queryFn: apiCountries });

    const createData = (
        id: number,
        country: string,
        recovered: number,
        cases: number,
        deaths: number
    ) => ({
        id,
        country,
        recovered,
        cases,
        deaths,
    });

    const formattedData = covidCountriesData?.map(
        (item: CovidCountryData, index: number) =>
            createData(
                index,
                item.country,
                item.recovered,
                item.cases,
                item.deaths
            )
    );

    return (
        <DashboardLayout>
            {isLoading && <Loading />}

            {isError && <Error />}
            {isSuccess && 
            <>
            <Typography variant='h1' mb={10}>
                Statistics
            </Typography>
            
            <EnhancedTable data={formattedData} />
            </>

            }
        </DashboardLayout>
    );
};

export default Statistics;
