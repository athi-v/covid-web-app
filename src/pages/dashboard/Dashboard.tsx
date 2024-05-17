import { Grid, Typography } from "@mui/material";
import DashboardCard from "../../components/card/DashboardCard";
import DashboardLayout from "../../layout/DashboardLayout";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaHeart, FaPrayingHands } from "react-icons/fa";
import { TbTestPipe } from "react-icons/tb";

const overallData = [
  { id: "0", title: "Test Conducted", total: "5011", icon: <TbTestPipe size={"25"} /> },
  { id: "0", title: "Recovered", total: "50", icon: <FaHeart  size={"25"}/> },
  { id: "1", title: "Positive Case", total: "50", icon: <AiOutlineUsergroupAdd size={"25"} /> },
  { id: "2", title: "Deaths", total: "60",  icon: <FaPrayingHands  size={"25"}/> },
];
const Dashboard = () => {
  return (
    <DashboardLayout>
      
      <Grid container spacing={4}>
        <Grid item lg={12}>
          <Typography variant="h1">
            Welcome Guest,
          </Typography>
        </Grid>
        {overallData.map((item) => (
          <Grid item lg={6}>
            <DashboardCard title={item.title} value={Number(item.total)} icon={item.icon} />
          </Grid>
        ))}
      </Grid>
      <Grid item lg={12} mt={20}>
          <Typography variant="h1">
            Graph here
          </Typography>
        </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
