import React from 'react';

import { User } from '@/models';
import { axiosInstance } from '@/configs/axiosInstance';

import { useAuth } from './useAuth';
import { useWebSocket } from './useWebSocket';

export const useRoomState = (roomUuid: string) => {
    const { socket, isConnected } = useWebSocket();
    const { user } = useAuth();

    const [participants, setParticipants] = React.useState<User[]>([]);
    const [roomManager, setRoomManager] = React.useState<User | null>(null);
    const [currentQuiz, setCurrentQuiz] = React.useState<any>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string | null>(null);

    const isUserManager = React.useMemo(() => {
        if (!user || !roomManager) return false;

        return user.id === roomManager.id;
    }, [user, roomManager]);

    const handlePlayerJoined = React.useCallback((data: any) => {
        if (data.isManager)
            setRoomManager({
                id: data.id,
                name: data.name,
                email: data.email,
            });
        setParticipants(prev => {
            const filtered = prev.filter(p => p.id !== data.id);

            return [
                ...filtered,
                {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    isManager: data.isManager,
                },
            ];
        });
    }, []);

    const handlePlayerLeft = React.useCallback((data: any) => {
        setParticipants(prev => prev.filter(p => p.id !== data.id));
    }, []);

    const fetchInitialParticipants = React.useCallback(async () => {
        if (!roomUuid) return;
        try {
            setIsLoading(true);

            const response = await axiosInstance.get(`/game-room/${roomUuid}/participants`);

            setParticipants(response.data);

            const manager = response.data.find((p: any) => p.isManager);

            if (manager) setRoomManager(manager);

            setIsLoading(false);
        } catch (er) {
            setError('Error while fetching room participants');
            setIsLoading(false);
        }
    }, [roomUuid]);

    React.useEffect(() => {
        setIsLoading(true);
        if (!socket || !user || !roomUuid) {
            setError('Socket or user or roomUuid is not available');
            setIsLoading(false);

            return;
        }

        fetchInitialParticipants();

        try {
            socket.emit('joinRoom', { roomUuid, userId: user.id });

            socket.on('playerJoined', handlePlayerJoined);
            socket.on('playerLeft', handlePlayerLeft);

            socket.on('quizCreated', quiz => {
                setCurrentQuiz(quiz);
            });

            socket.on('quizStarted', data => {
                console.log('Quiz started:', data);
            });

            socket.on('answerSubmitted', response => {
                console.log('Answer submitted:', response);
            });
            setIsLoading(false);
            setError(null);
        } catch (er) {
            setError('Error while joining room');
            setIsLoading(false);
        }

        // eslint-disable-next-line consistent-return
        return () => {
            if (!socket) return;
            socket.off('playerJoined');
            socket.off('quizCreated');
            socket.off('quizStarted');
            socket.off('answerSubmitted');

            socket.emit('leaveRoom', { roomUuid, userId: user.id });
        };
    }, [socket, user, roomUuid, handlePlayerJoined, handlePlayerLeft, fetchInitialParticipants]);

    return { participants, roomManager, currentQuiz, isLoading, error, isConnected, isUserManager };
};
