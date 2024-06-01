import { Box, Button, Typography } from '@mui/material';
import PageLayout from '../../layout/PageLayout';
import { useNavigate } from 'react-router-dom';
import { KeyboardArrowRight } from '@mui/icons-material';
import { FcGoogle } from 'react-icons/fc';
import { UserAuth } from '../../context/AuthContext';
import { useEffect } from 'react';

const HomePage = () => {
    const navigate = useNavigate();
    const { logIn, user} = UserAuth() ?? {};

    useEffect(() => {
        if (user)  {
            navigate('/dashboard');
        }
    }, [user, navigate]); 
    
    return (
        <PageLayout>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    bgcolor: '#171717',
                    color: '#FFF',
                }}
            >
                <Box
                    sx={{
                        width: { xs: '90%', lg: '80%' },
                    }}
                >
                    <Typography variant='h1' mb={5} textAlign={'center'}>
                        We put science to work to build a healthier, safer world
                    </Typography>
                    <Typography
                        fontWeight={400}
                        mb={{ xs: 0, lg: 4 }}
                        textAlign={'center'}
                    >
                        ByteData leads and champions global efforts to achieve
                        better health for all. By connecting countries, people
                        and partners, we strive to give everyone, everywhere an
                        equal chance at a safe and healthy life.
                    </Typography>
                    <Typography
                        fontWeight={400}
                        textAlign={'center'}
                        sx={{
                            display: { xs: 'none', lg: 'flex' },
                        }}
                    >
                        From emerging epidemics such as COVID-19 to the
                        persistent threat of communicable diseases including
                        HIV, malaria and tuberculosis and chronic diseases such
                        as diabetes, heart disease and cancer, we bring together
                        194 countries and work on the frontlines in 150+
                        locations to confront the biggest health challenges of
                        our time and measurably advance the well-being of the
                        world’s people.
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: { xs: '10px', lg: '20px' },
                            mt: { xs: 5, lg: 10 },
                        }}
                    >
                        <Button
                            size='small'
                            variant='contained'
                            sx={{
                                textTransform: 'none',
                                color: '#FFF',
                                bgcolor: 'rgb(34 197 94)',
                                width: { xs: '100%', lg: 'auto' },
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            disableElevation
                            onClick={() => navigate('/dashboard')}
                            endIcon={<KeyboardArrowRight />}
                        >
                            Continue as Guest
                        </Button>
                        <Button
                            size='small'
                            variant='outlined'
                            sx={{
                                textTransform: 'none',
                                color: '#FFF',
                                border: '1px solid #FFF',

                                ':hover': {
                                    border: '1px solid #FFF',
                                },
                                width: { xs: '100%', lg: 'auto' },
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            disableElevation
                            onClick={logIn}
                            startIcon={<FcGoogle />}
                        >
                            Continue with Google
                        </Button>
                    </Box>
                </Box>
            </Box>
        </PageLayout>
    );
};

export default HomePage;
