import { Grid } from "@mui/material";
import DashboardCard from "../../components/card/DashboardCard";
import DashboardLayout from "../../layout/DashboardLayout";

const overallData = [
  { id: "0", title: "Recovered", total: "50" },
  { id: "1", title: "Case", total: "50" },
  { id: "2", title: "Deaths", total: "60" },
];
const Dashboard = () => {
  return (
    <DashboardLayout>
      <Grid container spacing={4}>
        {overallData.map((item) => (
          <Grid item lg={4}>
            <DashboardCard title={item.title} value={Number(item.total)} />
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
