'use client'
import PrivateRoomPage from '@/app-pages/game-room/PrivateRoomPage'
import { useParams } from 'next/navigation'
import React from 'react'

const PrivateRoom = () => {
	const { room } = useParams() as { room: string }
	return <PrivateRoomPage room={room} />
}

export default PrivateRoom
