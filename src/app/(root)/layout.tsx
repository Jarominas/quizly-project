import '@/styles/globals.css'
import Header from '@/components/header/Header'

import { Container } from '@mui/material'

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
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
			</Container>
		</>
	)
}
