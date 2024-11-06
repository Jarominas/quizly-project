'use client'

import React from 'react'

import { AuthProvider } from '@/context/AuthContext'
import { ColorModeProvider } from '@/context/ColorModeContext'
import MUIThemeProvider from './MUIThemeProvider'

export default function Providers({ children }) {
	return (
		<AuthProvider>
			<ColorModeProvider>
				<MUIThemeProvider>{children}</MUIThemeProvider>
			</ColorModeProvider>
		</AuthProvider>
	)
}
