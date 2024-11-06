'use client'

import React from 'react'

import Link from 'next/link'

import { alpha } from '@mui/material/styles'
import { Box, Button, Container, Toolbar, AppBar, Stack } from '@mui/material'

import { useAuth } from '@/hooks/useAuth'

import NavBar from './NavBar'
import MobileNavbar from './MobileHeader'
import { NAVIGATION_PATHS } from '@/configs/pageNavigation'
import ToggleColorMode from '@components/buttons/ToogleColorMode'
import { useColorMode } from '@/context/ColorModeContext'

const styles = {
	container: { boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 1 },
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexShrink: 0,
		borderRadius: 'calc(8px + 8px)',
		backdropFilter: 'blur(24px)',
		border: '1px solid',
		borderColor: 'divider',
		backgroundColor: (theme: any) => alpha(theme.palette.background.default, 0.4),
		boxShadow: 1,
		padding: '8px 12px',
	},

	logOutBtn: { ml: '5px', mr: '5px' },
}

export default function Header() {
	// const { logOut } = useAuth()
	const { toggleColorMode, mode } = useColorMode()!
	const [open, setOpen] = React.useState(false)

	const toggleDrawer = (newOpen: any) => () => {
		setOpen(newOpen)
	}

	return (
		<AppBar position='fixed' sx={styles.container}>
			<Container maxWidth='lg'>
				<Toolbar variant='dense' disableGutters sx={styles.toolbar}>
					<NavBar />
					<Stack direction='row' spacing={1}>
						<ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
						<Button
							component={Link}
							href={NAVIGATION_PATHS.LOGIN}
							color='primary'
							variant='outlined'
							size='small'
						>
							Login
						</Button>

						<Button
							component={Link}
							href={NAVIGATION_PATHS.SIGN_UP}
							color='primary'
							variant='contained'
							size='small'
							sx={{ display: { xs: 'none', md: 'flex' } }}
						>
							Sign Up
						</Button>
					</Stack>
					<MobileNavbar toggleDrawer={toggleDrawer} open={open} />
				</Toolbar>
			</Container>
		</AppBar>
	)
}
