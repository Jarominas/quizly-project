'use client';

import React from 'react';

import { Box, Stack } from '@mui/material';

import AdminHeader from '@/components/header/AdminHeader';
import AdminNavbar from '@/components/header/AdminNavbar';

const styles = {
    wrapper: {
        display: 'flex',
    },
    main: {
        flexGrow: 1,
        overflow: 'auto',
    },
    stack: {
        mx: 3,
        pb: 10,
        mt: { xs: 8, md: 0 },
    },
};

const AdminPanelLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
    <Box sx={styles.wrapper}>
        <AdminNavbar />
        <AdminHeader />
        <Box component="main" sx={styles.main}>
            <Stack spacing={2} sx={styles.stack}>
                {children}
            </Stack>
        </Box>
    </Box>
);

export default AdminPanelLayout;
