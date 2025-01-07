import React from 'react';

import '@/styles/globals.css';
import { Container } from '@mui/material';

import Header from '@/components/header/Header';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Header />
            <Container
                component="main"
                maxWidth="lg"
                sx={{
                    mt: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 5,
                }}
            >
                {children}
            </Container>
        </>
    );
}
