import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const GameRoomPage = () => {
	return (
		<Stack spacing={2} alignSelf='center' textAlign='center'>
			<Typography variant='h4'>Game Room</Typography>
			<Typography variant='h6'>Here you can play Quiz Games with you friends</Typography>
			<Stack alignSelf='center'>
				<Button variant='contained'>Create Room</Button>
			</Stack>
		</Stack>
	)
}

export default GameRoomPage
