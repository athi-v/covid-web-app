import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { MdAnalytics, MdLogout } from 'react-icons/md';
import { RiDashboardHorizontalFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const MobileBottomNavbar = () => {
    const navigate = useNavigate();
    const { logOut } = UserAuth() ?? {};

    const handleLogout = async () => {
        if (logOut) {
            await logOut();
            navigate('/');
        } else {
            console.error('Logout function is undefined');
        }
    };
    const dashboardItem = [
        {
            id: '0',
            title: 'Dashboard',
            link: '/dashboard',
            icon: <RiDashboardHorizontalFill />,
        },
        {
            id: '1',
            title: 'Statistics',
            link: '/statistics',
            icon: <MdAnalytics />,
        },
        {
            id: '1',
            title: 'Logout',
            link: '',
            icon: <MdLogout />,
        },
    ];
    return (
        <Paper
            sx={{
                display: { xs: 'blcok', lg: 'none' },
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
            }}
            elevation={3}
        >
            <BottomNavigation showLabels>
                {dashboardItem.map((item) => (
                    <BottomNavigationAction
                        sx={{
                            fontWeight: '700',
                        }}
                        key={item.id}
                        label={item.title}
                        icon={item.icon}
                        onClick={() => {
                            if (item.title === 'Logout') {
                                handleLogout();
                            } else {
                                navigate(item?.link);
                            }
                        }}
                    />
                ))}
            </BottomNavigation>
        </Paper>
    );
};

export default MobileBottomNavbar;
