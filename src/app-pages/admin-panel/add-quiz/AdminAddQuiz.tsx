'use client';

import React from 'react';

import { Box, Button, MenuItem, Select, Stack, TextField, Typography, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

const AdminAddQuiz = () => {
    const [category, setCategory] = React.useState('');
    const [difficulty, setDifficulty] = React.useState('');
    const [isNiche, setIsNiche] = React.useState(false);
    const [correctAnswer, setCorrectAnswer] = React.useState('');
    const [type, setType] = React.useState('');
    const [question, setQuestion] = React.useState('');
    const [incorrectAnswers, setIncorrectAnswers] = React.useState(['', '', '']);

    const handleIncorrectAnswerChange = (index: number, value: string) => {
        const updatedAnswers = [...incorrectAnswers];

        updatedAnswers[index] = value;
        setIncorrectAnswers(updatedAnswers);
    };

    const handleSubmit = async () => {
        if (!category || !difficulty || !correctAnswer || !type || !question) {
            alert('Please fill in all required fields');

            return;
        }

        const quizData = {
            category,
            difficulty,
            isNiche,
            correctAnswer,
            type,
            question: { text: question },
            incorrectAnswers,
        };

        try {
            const response = await axios.post('/api/quizzes', quizData);

            alert('Quiz added successfully!');
            console.log(response.data);
            // Reset form
            setCategory('');
            setDifficulty('');
            setIsNiche(false);
            setCorrectAnswer('');
            setType('');
            setQuestion('');
            setIncorrectAnswers(['', '', '']);
        } catch (error) {
            console.error('Error adding quiz:', error);
            alert('Failed to add quiz');
        }
    };

    return (
        <Stack alignItems="flex-start">
            <Typography variant="h4">Add a New Quiz</Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 600 }}>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Category</InputLabel>
                    <Select value={category} onChange={e => setCategory(e.target.value)} required>
                        <MenuItem value="music">Music</MenuItem>
                        <MenuItem value="science">Science</MenuItem>
                        <MenuItem value="history">History</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel>Difficulty</InputLabel>
                    <Select value={difficulty} onChange={e => setDifficulty(e.target.value)} required>
                        <MenuItem value="easy">Easy</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="hard">Hard</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    label="Question"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    margin="normal"
                    fullWidth
                    required
                />

                <TextField
                    label="Correct Answer"
                    value={correctAnswer}
                    onChange={e => setCorrectAnswer(e.target.value)}
                    margin="normal"
                    fullWidth
                    required
                />

                <Typography>Incorrect Answers:</Typography>
                {incorrectAnswers.map((answer, index) => (
                    <TextField
                        key={index}
                        label={`Incorrect Answer ${index + 1}`}
                        value={answer}
                        onChange={e => handleIncorrectAnswerChange(index, e.target.value)}
                        margin="normal"
                        fullWidth
                    />
                ))}

                <FormControl fullWidth margin="normal">
                    <InputLabel>Type</InputLabel>
                    <Select value={type} onChange={e => setType(e.target.value)} required>
                        <MenuItem value="text_choice">Text Choice</MenuItem>
                        <MenuItem value="image_choice">Image Choice</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel>Is Niche</InputLabel>
                    <Select value={isNiche.toString()} onChange={e => setIsNiche(e.target.value === 'true')}>
                        <MenuItem value="false">No</MenuItem>
                        <MenuItem value="true">Yes</MenuItem>
                    </Select>
                </FormControl>

                <Button size="large" variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
                    Add Quiz
                </Button>
            </Box>
        </Stack>
    );
};

export default AdminAddQuiz;
