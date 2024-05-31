import { GitHub } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import covidLogo from '../../assets/poster/covid-19.svg';

const Navbar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                position: 'fixed',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: '10px',
            }}
        >
            <Box
                sx={{
                    width: { xs: '10%', lg: '5%' },
                }}
            >
                <img src={covidLogo} alt='/' />
            </Box>
            <Box>
                <IconButton
                    onClick={() =>
                        window.open(
                            'https://github.com/athi-v/covid-web-app',
                            '_blank'
                        )
                    }
                >
                    <>
                        <GitHub htmlColor={'#FFF'} />
                    </>
                </IconButton>
            </Box>
        </Box>
    );
};

export default Navbar;
