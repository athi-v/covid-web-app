import { Grid, Typography } from "@mui/material";
import DashboardCard from "../../components/card/DashboardCard";
import DashboardLayout from "../../layout/DashboardLayout";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaHeart, FaPrayingHands } from "react-icons/fa";
import { TbTestPipe } from "react-icons/tb";
import SimpleLineChart from "../../components/graphs/SimpleLineChart";
import { useQuery } from "@tanstack/react-query";
import { apiHistory, apiWorldwide } from "../../api/covidAPI";
import Loading from "../../components/loader/Loading";
import Error from "../../components/error/Error";
import { formatNumber } from "../../components/utils/formatNumber";

const Dashboard = () => {

  const {
    data: covidData,
    isSuccess: isWorldwideSucces,
    isLoading: isWorldwideLoading,
    isError: isWorldwideError,
  } = useQuery({ queryKey: ["covidData"], queryFn: apiWorldwide });


  const {
    data: covidHstoryData,
    isSuccess: isHistorySuccess,
    isLoading: isHistoryLoading,
    isError: isHistoryError,
  } = useQuery({ queryKey: ["covidHistoryData"], queryFn: apiHistory });


  console.log(covidHstoryData)
  console.log(isHistorySuccess)
  console.log(isHistoryLoading)
  console.log(isHistoryError)


  const overallData = [
    {
      id: "0",
      title: "Test Conducted",
      total: Number(covidData?.updated),
      icon: <TbTestPipe size={"25"} />,
    },
    {
      id: "0",
      title: "Recovered",
      total: Number(covidData?.recovered),
      icon: <FaHeart size={"25"} />,
    },
    {
      id: "1",
      title: "Positive Case",
      total: Number(covidData?.cases),
      icon: <AiOutlineUsergroupAdd size={"25"} />,
    },
    {
      id: "2",
      title: "Deaths",
      total: Number(covidData?.deaths),
      icon: <FaPrayingHands size={"25"} />,
    },
  ];
  return (
    <DashboardLayout>
      {(isWorldwideLoading || isHistoryLoading) && <Loading />}
      {(isWorldwideError || isHistoryError )&& <Error />}

      {(isWorldwideSucces || isHistorySuccess) && (
        <>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h1">Welcome Guest,</Typography>
            </Grid>
            {overallData.map((item) => (
              <Grid item xs={12} lg={6}>
                <DashboardCard
                  title={item.title}
                  value={formatNumber(item?.total)?.toString() || "0"}
                  icon={item.icon}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item lg={12} mt={5} >
            <SimpleLineChart data={covidHstoryData}/>
          </Grid>
        </>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
