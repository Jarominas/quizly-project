'use client'

import React from 'react'

import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'

import getMainTheme from '@/theme/getMainTheme'
import { useColorMode } from '@/context/ColorModeContext'

export default function MUIThemeProvider({ children }) {
	const { mode } = useColorMode()

	const mainTheme = React.useMemo(() => createTheme(getMainTheme(mode)), [mode])

	return (
		<ThemeProvider theme={mainTheme}>
			<CssBaseline enableColorScheme />
			{children}
		</ThemeProvider>
	)
}
