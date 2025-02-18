'use client';

import React from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';

import { AuthProvider } from '@/context/AuthContext';
import { ColorModeProvider } from '@/context/ColorModeContext';
import { WebSocketProvider } from '@/context/WebSocketContext';
import { PermissionProvider } from '@/context/PermissionContext';

import MUIThemeProvider from './MUIThemeProvider';

export default function Providers({ children }) {
    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
            <AuthProvider>
                <WebSocketProvider>
                    <PermissionProvider>
                        <ColorModeProvider>
                            <MUIThemeProvider>{children}</MUIThemeProvider>
                        </ColorModeProvider>
                    </PermissionProvider>
                </WebSocketProvider>
            </AuthProvider>
        </GoogleOAuthProvider>
    );
}
