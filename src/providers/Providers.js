'use client'

import React from 'react'

import { AuthProvider } from '@/context/AuthContext'
import { ColorModeProvider } from '@/context/ColorModeContext'
import MUIThemeProvider from './MUIThemeProvider'
import { QuizProvider } from '@/context/QuizContext'

export default function Providers({ children }) {
	return (
		<AuthProvider>
			<ColorModeProvider>
				<QuizProvider>
					<MUIThemeProvider>{children}</MUIThemeProvider>
				</QuizProvider>
			</ColorModeProvider>
		</AuthProvider>
	)
}
