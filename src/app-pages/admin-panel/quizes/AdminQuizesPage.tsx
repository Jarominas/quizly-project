'use client';

import React from 'react';

import { Box, Typography } from '@mui/material';

import MuiDataGrid from '@/components/ui/MuiDataGrid';
import TableGrid from '@/components/ui/layouts/TableGrid';
import { Quiz } from '@/models/quiz';

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
    data.map((quiz: any) => ({
        id: quiz.id,
        category: quiz.category,
        difficulty: quiz.difficulty,
        type: quiz.type,
        question: quiz.question.text,
        correctAnswer: quiz.correctAnswer,
        incorrectAnswers: quiz.incorrectAnswers.map((incorrect: any) => incorrect.answer).join(', '),
    }));

const AdminQuizesPage = () => (
    <>
        <Typography component="h4" variant="h4" gutterBottom>
            Quizes List
        </Typography>
        <TableGrid>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <MuiDataGrid
                    fetchUrl="/quizes"
                    columns={columns}
                    rowsMapper={rowsMapper}
                    onRowClick={params => console.log(params.row)}
                />
            </Box>
        </TableGrid>
    </>
);

export default AdminQuizesPage;
