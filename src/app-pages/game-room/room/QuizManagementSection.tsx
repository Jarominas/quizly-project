import React from 'react';

import { Button, Card, Stack, Typography } from '@mui/material';

import { QuizCreateForm } from '@/components/QuizCreation';

interface QuizManagementProps {
    roomUuid: string;
}

const QuizManagement = ({ roomUuid }: QuizManagementProps) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleAddNewQuestion = () => {
        setIsModalOpen(true);
    };

    const handleStartQuiz = () => {
        console.log('Start Quiz');
    };

    return (
        <>
            <Card>
                <Stack spacing={2}>
                    <Typography variant="h6">Quiz Management</Typography>
                    <Button size="large" variant="contained" onClick={handleAddNewQuestion}>
                        Add New Question
                    </Button>
                    <Button size="large" variant="contained" onClick={handleStartQuiz}>
                        Start Quiz
                    </Button>
                </Stack>
            </Card>
            <QuizCreateForm open={isModalOpen} onClose={() => setIsModalOpen(false)} roomUuid={roomUuid} />
        </>
    );
};

export default QuizManagement;
