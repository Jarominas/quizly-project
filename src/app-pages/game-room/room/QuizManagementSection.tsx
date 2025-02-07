import React from 'react';

import { Button, Card, Stack, Typography } from '@mui/material';

const QuizManagement = () => {
    const handleAddNewQuestion = () => {
        console.log('Add New Question');
    };

    const handleStartQuiz = () => {
        console.log('Start Quiz');
    };

    return (
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
    );
};

export default QuizManagement;
