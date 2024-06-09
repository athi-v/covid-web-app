import { Container, CssBaseline, Grid } from '@mui/material';
import { ReactNode } from 'react';
import DashboardNavbar from '../components/navbar/DashboardNavbar';
import MobileBottomNavbar from '../components/navbar/MobileBottomNavbar';

interface DashboardLayoutProps {
    children: ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <Container maxWidth={false} disableGutters>
            <CssBaseline />
            <Grid container>
                <Grid item lg={3} xl={2}>
                    <DashboardNavbar />
                </Grid>
                <Grid
                    item
                    lg={9} xl={10}
                    p={{ xs: '20px 20px 50px 20px', lg: '20px' }}
                >
                    {children}
                </Grid>
            </Grid>
            <Grid item lg={10}>
                <MobileBottomNavbar />
            </Grid>
        </Container>
    );
};

export default DashboardLayout;
