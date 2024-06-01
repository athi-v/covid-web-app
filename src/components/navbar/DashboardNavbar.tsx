import { Avatar, Box, Button } from '@mui/material';
import { MdAnalytics, MdLogout } from 'react-icons/md';
import { RiDashboardHorizontalFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

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
];

const DashboardNavbar = () => {
    const navigate = useNavigate();
    const { logOut, user } = UserAuth() ?? {};

    const handleLogout = async () => {
        if (logOut) {
            await logOut();
            navigate('/');
        } else {
            console.error('Logout function is undefined');
        }
    };

    return (
        <Box
            sx={{
                display: { xs: 'none', lg: 'flex' },
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: '20px',
                height: '100%',
                background: '#042f2e',
                position: 'fixed',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}
            >
                {dashboardItem.map((item) => (
                    <Box>
                        <Button
                            fullWidth
                            variant='text'
                            disableElevation
                            key={item.id}
                            onClick={() => navigate(item.link)}
                            sx={{
                                textTransform: 'capitalize',
                                color: '#FFF',
                                fontSize: '15px',
                            }}
                            startIcon={item.icon}
                        >
                            {item.title}
                        </Button>
                    </Box>
                ))}
            </Box>
                    <Button
                        sx={{
                            textTransform: 'capitalize',
                        }}
                    >
                        <Box
                            sx={{
                                color: '#FFF',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '20px',
                            }}
                        >
                            <Box>
                                <Avatar src={user?.photoURL || ''}/>
                            </Box>
                            <Box>{user?.displayName}</Box>{' '}
                            <Button
                                sx={{
                                    display: 'flex',
                                }}
                                onClick={handleLogout}
                            >
                                <MdLogout color='#FFF' />
                            </Button>
                        </Box>
                    </Button>
        </Box>
    );
};

export default DashboardNavbar;
