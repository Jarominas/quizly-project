import React from 'react';

import { Button, Card, CircularProgress, Stack, Typography } from '@mui/material';
import { toast } from 'react-toastify';

import { useWebSocket } from '@/hooks/useWebSocket';
import { TOAST_MESSAGES } from '@/constants/toastMessages';
import { RoomQuiz } from '@/models';

interface QuestionPreviewProps {
    roomUuid: string;
    quizzes: RoomQuiz[];
}

const QuestionPreview = ({ roomUuid, quizzes }: QuestionPreviewProps) => {
    const { socket } = useWebSocket();
    const [loading, setLoading] = React.useState(false);

    const handlePublishQuestion = (quiz: RoomQuiz) => {
        setLoading(true);
        if (socket) {
            socket.emit('publishQuestion', { roomUuid, quiz });
            toast.success(TOAST_MESSAGES.SUCCESS.QUESTION_PUBLISHED);
            setLoading(false);
        }
    };

    if (!quizzes.length)
        return (
            <Card>
                <Stack>
                    <Typography variant="h6">Question Preview</Typography>
                    <Typography>No questions added yet. Click "Add New Question" to create your quiz.</Typography>
                </Stack>
            </Card>
        );

    return (
        <Card>
            <Stack spacing={2}>
                <Typography variant="h6">Question Preview</Typography>
                <Stack spacing={2}>
                    {quizzes.map((quiz, index) => (
                        <Card
                            key={index}
                            sx={{
                                ':hover': {
                                    cursor: 'pointer',
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                },
                            }}
                        >
                            <Stack direction="row" justifyContent="space-between">
                                <Stack>
                                    <Typography variant="h5">{quiz.question}</Typography>
                                    <Typography variant="h6">Correct Answer: {quiz.correctAnswer}</Typography>
                                    <Typography variant="h6">
                                        Incorrect Answers: {quiz.incorrectAnswers.join(', ')}
                                    </Typography>
                                </Stack>
                                <Stack spacing={1}>
                                    <Button
                                        startIcon={loading ? <CircularProgress size={24} /> : null}
                                        variant="contained"
                                        onClick={() => handlePublishQuestion(quiz)}
                                    >
                                        Publish
                                    </Button>
                                    <Button variant="contained" color="error">
                                        Delete
                                    </Button>
                                </Stack>
                            </Stack>
                        </Card>
                    ))}
                </Stack>
            </Stack>
        </Card>
    );
};

export default QuestionPreview;
