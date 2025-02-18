import React from 'react';

import { RoomRole, User } from '@/models';

import { useWebSocket } from './useWebSocket';
import { useAuth } from './useAuth';

const useRoomParticipants = (roomUuid: string) => {
    const { socket } = useWebSocket();
    const { user } = useAuth();
    const [participants, setParticipants] = React.useState<User[]>([]);
    const [userRoomRole, setUserRoomRole] = React.useState<RoomRole>('participant');

    const roomManager = participants?.find(p => p.isRoomManager);
    const regularParticipants = participants?.filter(p => !p.isRoomManager);
    const onlineCount = participants?.length;

    React.useEffect(() => {
        if (!socket || !user) return;

        socket.emit('joinRoom', { roomUuid, userId: user.id });
        socket.on('currentParticipants', (currentParticipants: User[]) => {
            setParticipants(currentParticipants);

            const userParticipant = currentParticipants.find(p => p.id === user?.id);

            setUserRoomRole(userParticipant?.isRoomManager ? 'roomManager' : 'participant');
        });

        socket.on('playerJoined', (newPlayer: User) => {
            setParticipants(prev => {
                if (prev.some(p => p.id === newPlayer.id)) return prev;

                return [...prev, newPlayer];
            });
        });

        socket.on('playerLeft', ({ userId }: { userId: string }) => {
            setParticipants(prev => prev.filter(p => p.id !== userId));
        });

        // eslint-disable-next-line consistent-return
        return () => {
            socket.off('currentParticipants');
            socket.off('playerJoined');
            socket.off('playerLeft');
        };
    }, [socket, user, roomUuid]);

    return {
        roomManager,
        regularParticipants,
        onlineCount,
        userRoomRole,
    };
};

export default useRoomParticipants;
