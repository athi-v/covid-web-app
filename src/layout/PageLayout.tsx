import { Container, CssBaseline } from '@mui/material';
import { ReactNode } from 'react';
import Navbar from '../components/navbar/Navbar';

interface PageLayoutProps {
    children: ReactNode;
}
const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <Container maxWidth={false}  disableGutters>
            <CssBaseline />
            <Navbar />
            {children}
        </Container>
    );
};

export default PageLayout;
