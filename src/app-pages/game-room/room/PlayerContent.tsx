import React from 'react';

import { Button, Card, Stack, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import usePublishedQuestion from '@/hooks/usePublishedQuestion';
import { useAuth } from '@/hooks/useAuth';
import { useWebSocket } from '@/hooks/useWebSocket';

interface SubmitAnswerPayload {
    quizId: string;
    userId: string;
    answer: string;
    roomUuid: string;
}

const PlayerContent = () => {
    const { user } = useAuth();
    const { socket } = useWebSocket();
    const { publishedQuestion } = usePublishedQuestion();
    const [loading, setLoading] = React.useState(false);
    const [selectedAnswer, setSelectedAnswer] = React.useState('');
    const [hasSubmitted, setHasSubmitted] = React.useState(false);

    React.useEffect(() => {
        setSelectedAnswer('');
        setHasSubmitted(false);
        setLoading(false);
    }, [publishedQuestion]);

    const handleAnswerSelection = (answer: string) => {
        if (hasSubmitted) return;
        setSelectedAnswer(answer);
    };

    const handleSubmitAnswer = () => {
        if (!selectedAnswer || !publishedQuestion || !user || hasSubmitted) return;

        setLoading(true);

        const payload: SubmitAnswerPayload = {
            quizId: publishedQuestion.id,
            userId: user.id,
            answer: selectedAnswer,
            roomUuid: publishedQuestion.roomId,
        };

        socket?.emit('submitAnswer', payload);
        setHasSubmitted(true);

        setLoading(false);
    };

    if (!publishedQuestion)
        return (
            <Stack flex="1" spacing={1}>
                <Stack alignSelf="center">
                    <Typography variant="h6">Questions will appear here once the quiz starts</Typography>
                    <Typography variant="h6">You can play random quiz for warm-up</Typography>
                </Stack>
                <Stack alignSelf="center">
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        onClick={() => {
                            // playRandomQuiz();
                        }}
                    >
                        Play Random Quiz
                    </Button>
                </Stack>
            </Stack>
        );

    if (hasSubmitted)
        return (
            <Stack flex="1" spacing={1}>
                <Card>
                    <Stack>
                        <Stack spacing={2} p={2} alignSelf="center" textAlign="center">
                            <Typography variant="h6">Your answer {selectedAnswer} has been submitted</Typography>
                            <Typography variant="h6">Waiting for other players to submit their answers</Typography>
                            <Stack alignSelf="center">
                                <CheckCircle color="success" sx={{ fontSize: '5em' }} />
                            </Stack>
                        </Stack>
                    </Stack>
                </Card>
            </Stack>
        );

    return (
        <Stack flex="1" spacing={1}>
            <Card>
                <Stack>
                    <Stack spacing={2} p={2}>
                        <Typography variant="h6">{publishedQuestion.question}</Typography>
                        <Stack spacing={1}>
                            {[publishedQuestion.correctAnswer, ...publishedQuestion.incorrectAnswers].map(
                                (answer, index) => (
                                    <Stack spacing={1} key={index}>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            onClick={() => {
                                                handleAnswerSelection(answer);
                                            }}
                                            sx={{
                                                backgroundColor:
                                                    selectedAnswer === answer ? 'secondary.dark' : 'transparent',
                                                '&:hover': {
                                                    backgroundColor: 'primary.light',
                                                },
                                                padding: '2em',
                                            }}
                                        >
                                            <Typography>{answer}</Typography>
                                        </Button>
                                    </Stack>
                                )
                            )}
                        </Stack>
                    </Stack>
                    <Stack maxWidth="300px" width="300px" alignSelf="center">
                        <Button
                            size="large"
                            variant="contained"
                            disabled={!selectedAnswer || loading}
                            onClick={handleSubmitAnswer}
                        >
                            Give Answer
                        </Button>
                    </Stack>
                </Stack>
            </Card>
        </Stack>
    );
};

export default PlayerContent;
