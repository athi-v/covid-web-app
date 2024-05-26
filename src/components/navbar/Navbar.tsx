import { Box, Button } from "@mui/material";

const Navbar = () => {
  return <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  }}>

  <Box>
    Covid
  </Box>
  <Box>
    <Button variant="contained" sx={{
      textTransform: 'capitalize'
    }}>
    Login
    </Button>
  </Box>
  </Box>;
};

export default Navbar;
