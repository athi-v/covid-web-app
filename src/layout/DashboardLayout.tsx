import { Container, CssBaseline, Grid } from "@mui/material";
import { ReactNode } from "react";
import DashboardNavbar from "../components/navbar/DashboardNavbar";

interface DashboardLayoutProps {
  children: ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Container maxWidth={false} disableGutters>
      <CssBaseline />
      <Grid container >
        <Grid item lg={2}>
          <DashboardNavbar />
        </Grid>
        <Grid item lg={10} p={"20px"}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardLayout;
