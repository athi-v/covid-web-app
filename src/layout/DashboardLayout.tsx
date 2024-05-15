import { Container, Grid } from "@mui/material";
import { ReactNode } from "react";
import DashboardNavbar from "../components/navbar/DashboardNavbar";

interface DashboardLayoutProps {
  children: ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Container>
      <Grid container>
        <Grid item lg={2}>
          <DashboardNavbar />
        </Grid>
        <Grid item lg={10}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardLayout;
