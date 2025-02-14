import React from 'react';

import { Button, Card, Stack, Typography } from '@mui/material';

import useRoomQuizzes from '@/hooks/useRoomQuizzes';

interface QuestionPreviewProps {
    roomUuid: string;
}

const QuestionPreview = ({ roomUuid }: QuestionPreviewProps) => {
    const { quizzes } = useRoomQuizzes(roomUuid);

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
                            {' '}
                            <Stack direction="row" justifyContent="space-between">
                                <Stack>
                                    <Typography variant="h5">{quiz.question}</Typography>
                                    <Typography variant="h6">Correct Answer: {quiz.correctAnswer}</Typography>
                                    <Typography variant="h6">
                                        Incorrect Answers: {quiz.incorrectAnswers.join(', ')}
                                    </Typography>
                                </Stack>
                                <Stack spacing={1}>
                                    <Button variant="contained" color="primary">
                                        Edit
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
