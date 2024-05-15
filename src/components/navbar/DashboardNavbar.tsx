import { ListItem, Stack } from "@mui/material";

const dashboardItem = [
  { id: "0", title: "Overview" },
  { id: "1", title: "Statistics" },
  { id: "3", title: "Covid Test" },
];

const DashboardNavbar = () => {
  return (
    <Stack>
      <Stack spacing={2}>
        {dashboardItem.map((item) => (
          <ListItem>{item.title}</ListItem>
        ))}
      </Stack>
    </Stack>
  );
};

export default DashboardNavbar;
