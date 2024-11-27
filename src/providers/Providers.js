'use client';

import React from 'react';

import { AuthProvider } from '@/context/AuthContext';
import { ColorModeProvider } from '@/context/ColorModeContext';
import { QuizProvider } from '@/context/QuizContext';

import MUIThemeProvider from './MUIThemeProvider';

export default function Providers({ children }) {
    return (
        <AuthProvider>
            <ColorModeProvider>
                <QuizProvider>
                    <MUIThemeProvider>{children}</MUIThemeProvider>
                </QuizProvider>
            </ColorModeProvider>
        </AuthProvider>
    );
}
