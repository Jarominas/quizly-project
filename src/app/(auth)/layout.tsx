import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import ToastifyContainer from '@/ui-kit/ToastifyContainer'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AuthProvider>
					{children}
					<ToastifyContainer />
				</AuthProvider>
			</body>
		</html>
	)
}
