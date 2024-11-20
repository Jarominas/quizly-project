import { Stack } from '@mui/material'
import React from 'react'
import { PrivateRoomPageProps } from './types'

const PrivateRoomPage = ({ room }: PrivateRoomPageProps) => {
	return <Stack>This is room number {room}</Stack>
}

export default PrivateRoomPage
