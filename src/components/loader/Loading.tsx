import { Box, CircularProgress } from '@mui/material'

const Loading = () => {
  return (
<Box 
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
      >
      <CircularProgress />
      </Box>
)
}

export default Loading