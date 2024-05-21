import { Avatar, Box, Button, Typography } from "@mui/material";
import {BiTestTube } from "react-icons/bi";
import { MdAnalytics, MdLogout } from "react-icons/md";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const dashboardItem = [
  {
    id: "0",
    title: "Dashboard",
    link: "/dashboard",
    icon: <RiDashboardHorizontalFill />,
  },
  { id: "1", title: "Statistics", link: "/statistics", icon: <MdAnalytics /> },
  { id: "3", title: "Covid Test", link: "/diagnostics", icon: <BiTestTube /> },
];

const DashboardNavbar = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        justifyContent: "space-between",
        p: "20px",
        height: "100%",
        background: "#042f2e",
        position: 'fixed'
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {dashboardItem.map((item) => (
          <Box>
            <Button
              fullWidth
              variant="text"
              disableElevation
              key={item.id}
              onClick={() => navigate(item.link)}
              sx={{
                textTransform: "capitalize",
              }}
              startIcon={item.icon}
            >
              <Typography variant="h4">{item.title}</Typography>
            </Button>
          </Box>
        ))}
      </Box>
      <Box>
        <Box
          sx={{
            color: '#FFF',
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box>
            <Avatar />
          </Box>
          <Box>
            <Typography>Guest</Typography>
          </Box>          <Button sx={{
                        display: 'flex',

          }}
          onClick={() => navigate('/')}
          >
<MdLogout />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardNavbar;
