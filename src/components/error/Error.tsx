import { Box, Typography } from '@mui/material'

const Error = () => {
  return (
<Box sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
      }}>
      <Typography sx={{
        fontWeight: '700'
      }}>Error! fetching data. Please try again later.</Typography>
      </Box>
)
}

export default Error