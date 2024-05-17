import { Box, Card, Typography } from "@mui/material"
import { ReactNode } from "react";

interface DashboardCardProps {
    title: string;
    value:  number;
    icon: ReactNode
}
const DashboardCard = ({title, value, icon}: DashboardCardProps) => {
  return (
    <Card elevation={0} sx={{
        p: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: "15px"
        }}>
<Box>
    {icon}
</Box>
    <Box sx={{
    }}>
        <Typography variant="h2">
            {title}
        </Typography>
    </Box>
        </Box>
    <Box>
        <Typography variant="h2" sx={{
            fontSize: '30px'
        }}>
            {value}
        </Typography>
    </Box>
    </Card>
  )
}

export default DashboardCard