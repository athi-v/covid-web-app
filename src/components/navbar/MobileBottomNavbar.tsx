import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { BiTestTube } from "react-icons/bi";
import { MdAnalytics } from "react-icons/md";
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

const MobileBottomNavbar = () => {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        display: { xs: "blcok", lg: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        {dashboardItem.map((item) => (
          <BottomNavigationAction
            key={item.id}
            label={item.title}
            icon={item.icon}
            onClick={() => navigate(item.link)}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default MobileBottomNavbar;
