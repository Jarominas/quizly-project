'use client';

import React from 'react';

import { Box, Button, Stack, Typography } from '@mui/material';

import MuiDataGrid from '@/components/ui/MuiDataGrid';
import TableGrid from '@/components/ui/layouts/TableGrid';
import { Quiz } from '@/models/quiz';
import QuizUpdate from '@/components/modals/QuizUpdate';
import QuizAdd from '@/components/modals/QuizAdd';

const columns = [
    { field: 'id', headerName: 'ID', flex: 1, minWidth: 200 },
    { field: 'category', headerName: 'Category', flex: 2, minWidth: 200 },
    { field: 'difficulty', headerName: 'Difficulty', flex: 2, minWidth: 200 },
    { field: 'type', headerName: 'Type', flex: 2, minWidth: 200 },
    { field: 'question', headerName: 'Question', flex: 2, minWidth: 200 },
    { field: 'correctAnswer', headerName: 'Correct Answer', flex: 2, minWidth: 200 },
    { field: 'incorrectAnswers', headerName: 'Incorrect Answers', flex: 2, minWidth: 200 },
];

const rowsMapper = (data: Quiz[]) =>
    data?.map((quiz: any) => ({
        id: quiz.id,
        category: quiz.category,
        difficulty: quiz.difficulty,
        type: quiz.type,
        question: quiz.question.text,
        correctAnswer: quiz.correctAnswer,
        incorrectAnswers: quiz.incorrectAnswers.map((incorrect: any) => incorrect.answer).join(', '),
        imageUrl: quiz.imageUrl,
    }));

const AdminQuizesPage = () => {
    const [isAddQuizOpen, setIsAddQuizOpen] = React.useState(false);
    const [isUpdateQuizOpen, setIsUpdateQuizOpen] = React.useState(false);
    const [selectedQuiz, setSelectedQuiz] = React.useState<any>(null);

    console.log('selectedQuiz', selectedQuiz);

    const handleRowClick = (params: any) => {
        setSelectedQuiz(params.row);
        setIsUpdateQuizOpen(true);
    };

    const handleCloseUpdateModal = () => {
        setIsUpdateQuizOpen(false);
        setSelectedQuiz(null);
    };

    const handleOpenAddQuiz = () => {
        setIsAddQuizOpen(true);
    };

    const handleCloseAddQuiz = () => {
        setIsAddQuizOpen(false);
    };

    return (
        <>
            <Typography component="h4" variant="h4" gutterBottom>
                Quizes List
            </Typography>
            <Stack alignItems="flex-start">
                <Button variant="contained" size="large" onClick={handleOpenAddQuiz}>
                    Add Quiz
                </Button>
            </Stack>
            <TableGrid>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <MuiDataGrid
                        fetchUrl="/quizes"
                        columns={columns}
                        rowsMapper={rowsMapper}
                        onRowClick={handleRowClick}
                    />
                </Box>
            </TableGrid>
            <QuizAdd open={isAddQuizOpen} onClose={handleCloseAddQuiz} />
            <QuizUpdate open={isUpdateQuizOpen} onClose={handleCloseUpdateModal} selectedQuiz={selectedQuiz} />
        </>
    );
};

export default AdminQuizesPage;
