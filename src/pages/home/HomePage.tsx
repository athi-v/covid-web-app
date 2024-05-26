import {Button, Grid, Typography } from '@mui/material';
import PageLayout from '../../layout/PageLayout';
import { useNavigate } from 'react-router-dom';
import CovidHome from '../../assets/poster/distance.svg'

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <PageLayout>
            <Grid container justifyContent="space-between"
  alignItems="center"
  spacing={5}
>
                <Grid item lg={6} >

            <Typography variant='h1'>
                We put science to work to build <br />a healthier, safer worldg
            </Typography>
            <Typography fontWeight={400}>
                ByteData leads and champions global efforts to achieve better
                health for all. By connecting countries, people and partners, we
                strive to give everyone, everywhere an equal chance at a safe
                and healthy life.
            </Typography>
            <Typography fontWeight={400}>
                From emerging epidemics such as COVID-19 to the persistent
                threat of communicable diseases including HIV, malaria and
                tuberculosis and chronic diseases such as diabetes, heart
                disease and cancer, we bring together 194 countries and work on
                the frontlines in 150+ locations to confront the biggest health
                challenges of our time and measurably advance the well-being of
                the world’s people.
            </Typography>
            <Button
                variant='contained'
                sx={{
                    textTransform: 'capitalize',
                }}
                disableElevation
                onClick={() => navigate('/dashboard')}
            >
                Dashboard
            </Button>
                </Grid>
                <Grid item lg={6}>
                    <img src={CovidHome} alt='/' style={{
                        objectFit: 'contain',
                        width: '100%'
                    }} />
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export default HomePage;
