import Link from 'next/link';

import Divider from '@mui/material/Divider';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import { useAuth } from '@/hooks/useAuth';
import { ADMIN_PANEL_NAVIGATION_LIST, NAVIGATION_PATHS } from '@/configs/pageNavigation';

interface AdminMenuMobileProps {
    open: boolean;
    toggleDrawer: (_open: boolean) => () => void;
}

const styles = {
    drawer: {
        [`& .${drawerClasses.paper}`]: {
            backgroundImage: 'none',
            backgroundColor: 'background.paper',
        },
    },
    container: {
        maxWidth: '70dvw',
        height: '100%',
    },
    listItem: { display: 'block' },
};

const AdminMenuMobile = ({ open, toggleDrawer }: AdminMenuMobileProps) => {
    const { logout } = useAuth();

    return (
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} sx={styles.drawer}>
            <Stack sx={styles.container}>
                <Stack direction="row" alignSelf="center" padding={2}>
                    <Typography>Logo</Typography>
                </Stack>
                <Divider />
                <Stack flexGrow={1} padding={1} justifyContent="space-between">
                    <List dense>
                        {ADMIN_PANEL_NAVIGATION_LIST.map((item, index) => (
                            <ListItem component={Link} href={item.link} key={index} disablePadding sx={styles.listItem}>
                                <ListItemButton onClick={toggleDrawer(false)}>
                                    <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <Stack padding={2} spacing={2}>
                        <Button component={Link} href={NAVIGATION_PATHS.APP.HOME} variant="outlined" fullWidth>
                            Bak to Web App
                        </Button>
                        <Button variant="outlined" fullWidth startIcon={<LogoutRoundedIcon />} onClick={logout}>
                            Logout
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Drawer>
    );
};

export default AdminMenuMobile;
