import React from 'react';

import { Button, Card, Stack, Typography } from '@mui/material';

import { QuizCreateForm } from '@/components/QuizManagment';
import QuizCheckAnswers from '@/components/QuizManagment/QuizCheckAnswers';
import { RoomQuiz, RoomQuizResponse } from '@/models';

interface QuizManagementProps {
    quizzes: RoomQuiz[];
    responses: RoomQuizResponse[];
    roomUuid: string;
}

const QuizManagement = ({ roomUuid, quizzes, responses }: QuizManagementProps) => {
    const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
    const [isCheckAnswersModalOpen, setIsCheckAnswersModalOpen] = React.useState(false);

    const handleAddNewQuestion = () => {
        setIsCreateModalOpen(true);
    };

    const handleCheckQuizAnswers = () => {
        setIsCheckAnswersModalOpen(true);
    };

    return (
        <>
            <Card>
                <Stack spacing={2}>
                    <Typography variant="h6">Quiz Management</Typography>
                    <Stack spacing={2} alignSelf="flex-start">
                        <Button size="large" variant="contained" onClick={handleAddNewQuestion}>
                            Add New Question
                        </Button>
                        <Button size="large" variant="contained" onClick={handleCheckQuizAnswers}>
                            Check Quiz Answers
                        </Button>
                    </Stack>
                </Stack>
            </Card>

            <QuizCheckAnswers
                open={isCheckAnswersModalOpen}
                handleClose={() => setIsCheckAnswersModalOpen(false)}
                quizzes={quizzes}
                responses={responses}
            />
            <QuizCreateForm open={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} roomUuid={roomUuid} />
        </>
    );
};

export default QuizManagement;
