'use client';

import React from 'react';

import { Button, Toolbar, Typography, Stack, AppBar } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import AdminMenuMobile from './AdminMenuMobile';

const styles = {
    appBar: {
        display: { xs: 'auto', md: 'none' },
        boxShadow: 0,
        bgcolor: 'background.paper',
        backgroundImage: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    toolbar: {
        width: '100%',
        padding: (theme: any) => theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        flexShrink: 0,
    },
    text: { color: 'text.primary' },
};

const AdminHeader = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <AppBar position="fixed" sx={styles.appBar}>
            <Toolbar sx={styles.toolbar} variant="regular">
                <Stack direction="row" justifyContent="space-between" alignItems="center" flexGrow={1} width="100%">
                    <Typography variant="h4" component="h1" sx={styles.text}>
                        Admin Panel
                    </Typography>
                    <Button aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuRoundedIcon />
                    </Button>
                    <AdminMenuMobile open={open} toggleDrawer={toggleDrawer} />
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default AdminHeader;
