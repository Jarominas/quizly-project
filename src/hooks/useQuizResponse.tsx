import React from 'react';

import { RoomQuizResponse } from '@/models';

import { useWebSocket } from './useWebSocket';

const useQuizResponse = (roomUuid: string) => {
    const { socket } = useWebSocket();
    const [responses, setResponses] = React.useState<RoomQuizResponse[]>([]);

    React.useEffect(() => {
        if (!socket) return;

        socket.emit('getQuizResponses', roomUuid);
        socket.on('quizResponses', (data: RoomQuizResponse[]) => {
            setResponses(data);
        });

        socket.on('answerSubmitted', (response: RoomQuizResponse) => {
            setResponses((prevResponses: RoomQuizResponse[]) => {
                const exists = prevResponses.some(r => r.userId === response.userId && r.quizId === response.quizId);

                if (exists) return prevResponses;

                return [...prevResponses, response];
            });
        });

        // eslint-disable-next-line consistent-return
        return () => {
            socket.off('quizResponses');
            socket.off('answerSubmitted');
        };
    }, [socket, roomUuid]);

    return { responses };
};

export default useQuizResponse;
