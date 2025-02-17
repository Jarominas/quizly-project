import React from 'react';

import { RoomQuiz } from '@/models';

import { useWebSocket } from './useWebSocket';

const usePublishedQuestion = () => {
    const { socket } = useWebSocket();
    const [publishedQuestion, setPublishedQuestion] = React.useState<RoomQuiz | null>(null);

    React.useEffect(() => {
        if (!socket) return;

        socket.on('questionPublished', (question: RoomQuiz) => {
            setPublishedQuestion(question);
        });

        // eslint-disable-next-line consistent-return
        return () => {
            socket.off('questionPublished');
        };
    }, [socket]);

    return { publishedQuestion };
};

export default usePublishedQuestion;
