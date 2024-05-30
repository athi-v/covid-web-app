import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                width: {xs: '100vw', lg: '100%'},
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            <Box>

            <CircularProgress />
            </Box>
        </Box>
    );
};

export default Loading;
