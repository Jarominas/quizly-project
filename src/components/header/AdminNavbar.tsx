'use client';

import { Divider, Stack, Typography } from '@mui/material';

import AdminMenuContent from './AdminMenuContent';

const navbarWidth = 240;

const styles = {
    navBar: {
        display: { xs: 'none', md: 'flex' },
        width: navbarWidth,
        flexShrink: 0,
        height: '100vh',
    },
};

const AdminNavbar = () => (
    <Stack sx={styles.navBar}>
        <Stack direction="row" justifyContent="center" padding={2}>
            <Typography>Quizly App</Typography>
        </Stack>
        <Divider />
        <AdminMenuContent />
    </Stack>
);

export default AdminNavbar;
