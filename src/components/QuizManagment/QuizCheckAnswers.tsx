import React from 'react';

import { Stack, Typography } from '@mui/material';

import { RoomQuiz, RoomQuizResponse } from '@/models';

import ModalLayout from '../ui/layouts/ModalLayout';

import QuizResponseCard from './QuizResponseCard';

interface QuizCheckAnswersProps {
    quizzes: RoomQuiz[];
    responses: RoomQuizResponse[];
    open: boolean;
    handleClose: () => void;
}

const QuizCheckAnswers = ({ quizzes, responses, open, handleClose }: QuizCheckAnswersProps) => {
    if (!quizzes || quizzes.length === 0)
        return (
            <ModalLayout open={open} handleClose={handleClose}>
                <Stack spacing={2}>
                    <Typography variant="h6">No quizzes for now</Typography>
                </Stack>
            </ModalLayout>
        );

    return (
        <ModalLayout open={open} handleClose={handleClose}>
            <Stack spacing={2}>
                <Typography variant="h6">Quiz Answers</Typography>
                {quizzes.map(quiz => (
                    <QuizResponseCard key={quiz.id} quiz={quiz} responses={responses} />
                ))}
            </Stack>
        </ModalLayout>
    );
};

export default QuizCheckAnswers;
