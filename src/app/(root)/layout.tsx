import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/header/Header'
import Providers from '@/providers/Providers'
import ToastifyContainer from '@/components/ui-kit/ToastifyContainer'
import { Container } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<Header />
					<Container
						component='main'
						maxWidth='lg'
						sx={{
							mt: 10,
							display: 'flex',
							flexDirection: 'column',
							gap: 5,
						}}
					>
						{children}
						<ToastifyContainer />
					</Container>
				</Providers>
			</body>
		</html>
	)
}
