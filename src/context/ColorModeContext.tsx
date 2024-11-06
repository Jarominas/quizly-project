'use client'

import React from 'react'

interface ColorModeContextType {
	mode: 'light' | 'dark' | null
	toggleColorMode: () => void
}

interface ColorModeProviderProps {
	children: React.ReactNode
}

const ColorModeContext = React.createContext<ColorModeContextType | null>(null)

export const useColorMode = () => React.useContext(ColorModeContext)

export function ColorModeProvider({ children }: ColorModeProviderProps) {
	const [mode, setMode] = React.useState<'light' | 'dark' | null>(null)

	React.useEffect(() => {
		const savedMode = localStorage.getItem('themeMode') as 'light' | 'dark'

		if (savedMode) setMode(savedMode)
		else {
			const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

			setMode(systemPrefersDark ? 'dark' : 'light')
		}
	}, [])

	if (!mode) return null

	const toggleColorMode = () => {
		setMode((prevMode) => {
			const newMode = prevMode === 'light' ? 'dark' : 'light'

			localStorage.setItem('themeMode', newMode)

			return newMode
		})
	}

	return <ColorModeContext.Provider value={{ mode, toggleColorMode }}>{children}</ColorModeContext.Provider>
}
