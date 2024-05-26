import { Container, CssBaseline } from '@mui/material';
import { ReactNode } from 'react';
import Navbar from '../components/navbar/Navbar';

interface PageLayoutProps {
    children: ReactNode;
}
const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <Container maxWidth={false} sx={{
            // background: '#0B1215',
            // color: '#FFF',
            height: '100vh'
        }}>
            <CssBaseline />
            <Navbar />
            {children}
        </Container>
    );
};

export default PageLayout;
