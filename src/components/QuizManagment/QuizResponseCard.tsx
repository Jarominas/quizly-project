import React from 'react';

import { Card, Stack, Typography } from '@mui/material';

import { RoomQuiz, RoomQuizResponse } from '@/models';

interface QuizResponseCardProps {
    quiz: RoomQuiz;
    responses: RoomQuizResponse[];
}

const QuizResponseCard = ({ responses, quiz }: QuizResponseCardProps) => {
    const correctResponses = responses?.filter(r => r.quizId === quiz.id && r.isCorrect);
    const incorrectResponses = responses?.filter(r => r.quizId === quiz.id && !r.isCorrect);

    return (
        <Card>
            <Stack spacing={1} direction="row" justifyContent="space-between" alignItems="center">
                <Stack>
                    <Stack>
                        <Typography>Question</Typography>
                        <Typography>{quiz.question}</Typography>
                    </Stack>
                    <Stack>
                        <Typography>Correct Answer</Typography>
                        <Typography>{quiz.correctAnswer}</Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Stack spacing={1}>
                        <Typography variant="subtitle1" color="success.main">
                            Correct Responses ({correctResponses.length})
                        </Typography>
                        {correctResponses &&
                            correctResponses.map(response => (
                                <Typography key={response.id}>{response.user.name}</Typography>
                            ))}
                    </Stack>
                    <Stack spacing={1}>
                        <Typography variant="subtitle1" color="error.main">
                            Incorrect Responses ({incorrectResponses.length})
                        </Typography>
                        {incorrectResponses &&
                            incorrectResponses.map(response => (
                                <Typography key={response.id}>{response.user.name}</Typography>
                            ))}
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    );
};

export default QuizResponseCard;
