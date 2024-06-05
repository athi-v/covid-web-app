import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../../layout/PageLayout'

const ErrorPage = () => {
    const navigate = useNavigate();
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
              404  
            </Typography>
            <Typography
                fontWeight={400}
                mb={{ xs: 0, lg: 4 }}
                textAlign={'center'}
            >
               We couldn’t find the page you were looking for.
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
                    onClick={() => navigate('/')}
                >
                    Go back home
                </Button>
            </Box>
        </Box>
    </Box>
</PageLayout>
)
}

export default ErrorPage