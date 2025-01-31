'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import PrivateRoomPage from '@/app-pages/game-room/PrivateRoomPage';

const PrivateRoom = () => {
    const { room } = useParams() as { room: string };

    return <PrivateRoomPage room={room} />;
};

export default PrivateRoom;
