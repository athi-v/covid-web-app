import { useQuery } from '@tanstack/react-query';
import { apiCountries } from '../../api/covidAPI';
import EnhancedTable from '../../components/table/EnhancedTable'
import DashboardLayout from '../../layout/DashboardLayout'
import Loading from '../../components/loader/Loading';
import Error from '../../components/error/Error';

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
  } = useQuery({ queryKey: ["covidCountryData"], queryFn: apiCountries });

  console.log('list: ', covidCountriesData?.[0]?.country)
  console.log('list: ', covidCountriesData?.[0]?.recovered)
  console.log('list: ', covidCountriesData?.[0]?.cases)
  console.log('list: ', covidCountriesData?.[0]?.deaths)

  console.log('loading: ', isLoading)
  console.log('error: ', isError)
  console.log('isSuccess: ', isSuccess)


  const createData = (id: number, country: string, recovered: number, cases: number, deaths: number) => ({
    id,
    country,
    recovered,
    cases,
    deaths,
  });

  // Map the API data to the format expected by EnhancedTable
  const formattedData = covidCountriesData?.map((item: CovidCountryData, index: number) => 
    createData(index, item.country, item.recovered, item.cases, item.deaths)
  );

  return (
    <DashboardLayout>
      {isLoading && <Loading />}

      {isError && <Error />}
      {isSuccess && 

      <EnhancedTable data={formattedData} />
}

    </DashboardLayout>
  )
}

export default Statistics