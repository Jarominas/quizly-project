'use client';

import React from 'react';

import { AuthProvider } from '@/context/AuthContext';
import { ColorModeProvider } from '@/context/ColorModeContext';
import { WebSocketProvider } from '@/context/WebSocketContext';
import { PermissionProvider } from '@/context/PermissionContext';

import MUIThemeProvider from './MUIThemeProvider';

export default function Providers({ children }) {
    return (
        <AuthProvider>
            <WebSocketProvider>
                <PermissionProvider>
                    <ColorModeProvider>
                        <MUIThemeProvider>{children}</MUIThemeProvider>
                    </ColorModeProvider>
                </PermissionProvider>
            </WebSocketProvider>
        </AuthProvider>
    );
}
