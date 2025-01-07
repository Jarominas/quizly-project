'use client';

import React from 'react';

import Link from 'next/link';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import { useAuth } from '@/hooks/useAuth';
import { ADMIN_PANEL_NAVIGATION_LIST, NAVIGATION_PATHS } from '@/configs/pageNavigation';

const styles = {
    navContainer: { flexGrow: 1, p: 1, justifyContent: 'space-between' },
    listItem: { display: 'block' },
};

const AdminMenuContent = () => {
    const { logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const handleListItemClick = (url: string) => {
        router.push(url);
    };

    return (
        <Stack sx={styles.navContainer}>
            <List dense>
                {ADMIN_PANEL_NAVIGATION_LIST.map((item, index) => (
                    <ListItem key={index} disablePadding sx={styles.listItem}>
                        <ListItemButton
                            selected={item.link === pathname}
                            onClick={() => handleListItemClick(item.link)}
                        >
                            <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Stack spacing={2}>
                <Button component={Link} href={NAVIGATION_PATHS.APP.HOME} variant="outlined" fullWidth>
                    Web App
                </Button>
                <Button variant="outlined" fullWidth startIcon={<LogoutRoundedIcon />} onClick={logout}>
                    Logout
                </Button>
            </Stack>
        </Stack>
    );
};

export default AdminMenuContent;
