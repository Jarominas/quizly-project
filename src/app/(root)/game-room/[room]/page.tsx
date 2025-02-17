'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import PrivateRoomPage from '@/app-pages/game-room/room/PrivateRoomPage';

interface ParamsProps {
    [key: string]: string;
    room: string;
}

const PrivateRoom = () => {
    const { room } = useParams<ParamsProps>();

    if (!room) return null;

    return <PrivateRoomPage roomUuid={room} />;
};

export default PrivateRoom;
