'use client';

import React from 'react';

import { AuthProvider } from '@/context/AuthContext';
import { ColorModeProvider } from '@/context/ColorModeContext';
import { WebSocketProvider } from '@/context/WebSocketContext';

import MUIThemeProvider from './MUIThemeProvider';

export default function Providers({ children }) {
    return (
        <WebSocketProvider>
            <AuthProvider>
                <ColorModeProvider>
                    <MUIThemeProvider>{children}</MUIThemeProvider>
                </ColorModeProvider>
            </AuthProvider>
        </WebSocketProvider>
    );
}
