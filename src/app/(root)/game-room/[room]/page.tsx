'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import PrivateRoomPage from '@/app-pages/game-room/room/PrivateRoomPage';

const PrivateRoom = () => {
    const { room } = useParams() as { room: string };

    return <PrivateRoomPage roomUuid={room} />;
};

export default PrivateRoom;
