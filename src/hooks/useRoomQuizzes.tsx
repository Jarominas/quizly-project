import React from 'react';

import { RoomQuiz } from '@/models';

import { useWebSocket } from './useWebSocket';

const useRoomQuizzes = (roomUuid: string) => {
    const { socket } = useWebSocket();

    const [quizzes, setQuizzes] = React.useState<RoomQuiz[]>([]);

    React.useEffect(() => {
        if (!socket || !roomUuid) return;

        socket.emit('getQuizzes', { roomUuid });
        socket.on('quizzes', (data: RoomQuiz[]) => {
            setQuizzes(data);
        });
        socket.on('quizCreated', (quiz: RoomQuiz) => {
            setQuizzes(prev => [...prev, quiz]);
            // socket.emit('getQuizResponses', quiz.id);
        });

        // eslint-disable-next-line consistent-return
        return () => {
            socket.off('quizzes');
            socket.off('quizCreated');
        };
    }, [roomUuid, socket]);

    return { quizzes };
};

export default useRoomQuizzes;
