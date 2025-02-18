import React from 'react';

import '@/styles/globals.css';
import { Container } from '@mui/material';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Container
            component="main"
            maxWidth="xl"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
            }}
        >
            {children}
        </Container>
    );
}
