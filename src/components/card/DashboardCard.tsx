import { Box, Card, Typography } from "@mui/material"

interface DashboardCardProps {
    title: string;
    value:  number
}
const DashboardCard = ({title, value}: DashboardCardProps) => {
  return (
    <Card elevation={0}>
    <Box>
        <Typography>
            {title}
        </Typography>
    </Box>
    <Box>
        <Typography>
            {value}
        </Typography>
    </Box>
    </Card>
  )
}

export default DashboardCard