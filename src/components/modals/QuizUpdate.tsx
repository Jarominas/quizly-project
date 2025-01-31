'use client';

import React from 'react';

import {
    Button,
    Select,
    MenuItem,
    Stack,
    OutlinedInput,
    InputLabel,
    Typography,
    CircularProgress,
    Box,
} from '@mui/material';
import { toast } from 'react-toastify';
import { mutate } from 'swr';
import Image from 'next/image';

import { axiosInstance } from '@/configs/axiosInstance';
import { TOAST_MESSAGES } from '@/constants/toastMessages';

import ModalLayout from '@components/ui/layouts/ModalLayout';

const styles = {
    imageContainer: {
        position: 'relative',
        width: '525px',
        height: '385px',
    },
};

interface QuizUpdateProps {
    open: boolean;
    onClose: () => void;
    selectedQuiz: any;
}

const QuizUpdate = ({ open, onClose, selectedQuiz }: QuizUpdateProps) => {
    const [loading, setLoading] = React.useState(false);
    const [category, setCategory] = React.useState('');
    const [difficulty, setDifficulty] = React.useState('');
    const [isNiche, setIsNiche] = React.useState(false);
    const [correctAnswer, setCorrectAnswer] = React.useState('');
    const [type, setType] = React.useState('');
    const [question, setQuestion] = React.useState('');
    const [incorrectAnswers, setIncorrectAnswers] = React.useState(['', '', '']);
    const [imageUrl, setImageUrl] = React.useState('') || 'https://via.placeholder.com/200';

    const fullImageUrl = `${process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL}${imageUrl}`;

    React.useEffect(() => {
        if (selectedQuiz) {
            setCategory(selectedQuiz.category);
            setDifficulty(selectedQuiz.difficulty);
            setType(selectedQuiz.type);
            setQuestion(selectedQuiz.question);
            setCorrectAnswer(selectedQuiz.correctAnswer);
            setIncorrectAnswers(selectedQuiz.incorrectAnswers.split(', '));
            setIsNiche(selectedQuiz.isNiche || false);
            setImageUrl(selectedQuiz.imageUrl);
        }
    }, [selectedQuiz]);

    const handleIncorrectAnswerChange = (index: number, value: string) => {
        const updatedAnswers = [...incorrectAnswers];

        updatedAnswers[index] = value;
        setIncorrectAnswers(updatedAnswers);
    };

    const resetForm = () => {
        setCategory('');
        setDifficulty('');
        setIsNiche(false);
        setCorrectAnswer('');
        setType('');
        setQuestion('');
        setIncorrectAnswers(['', '', '']);
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = async () => {
        setLoading(true);

        if (!category || !difficulty || !correctAnswer || !type || !question) {
            toast.error(TOAST_MESSAGES.ERROR.QUIZ_FORM);

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
            const response = await axiosInstance.put(`/quizes/update/${selectedQuiz.id}`, quizData);

            if (response.status !== 200) toast.error(TOAST_MESSAGES.ERROR.QUIZ_UPDATE);

            toast.success(TOAST_MESSAGES.SUCCESS.QUIZ_UPDATE);
            handleClose();
            mutate('/quizes');
            setLoading(false);
        } catch (error) {
            toast.error(TOAST_MESSAGES.ERROR.QUIZ_UPDATE);
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        setLoading(true);

        try {
            const response = await axiosInstance.delete(`/quizes/delete/${selectedQuiz.id}`);

            if (response.status !== 200) toast.error(TOAST_MESSAGES.ERROR.QUIZ_DELETED);

            toast.success(TOAST_MESSAGES.SUCCESS.QUIZ_DELETED);
            handleClose();
            mutate('/quizes');
            setLoading(false);
        } catch (error) {
            toast.error(TOAST_MESSAGES.ERROR.QUIZ_DELETED);
            setLoading(false);
        }
    };

    return (
        <ModalLayout open={open} handleClose={handleClose}>
            <Typography variant="h5" gutterBottom>
                Edit Quiz
            </Typography>
            <Stack direction="column" spacing={2} width="100%">
                <InputLabel>Category</InputLabel>
                <Select value={category} onChange={e => setCategory(e.target.value)} required>
                    <MenuItem value="music">Music</MenuItem>
                    <MenuItem value="science">Science</MenuItem>
                    <MenuItem value="history">History</MenuItem>
                </Select>

                <InputLabel>Difficulty</InputLabel>
                <Select value={difficulty} onChange={e => setDifficulty(e.target.value)} required>
                    <MenuItem value="easy">Easy</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="hard">Hard</MenuItem>
                </Select>

                <OutlinedInput
                    placeholder="Question"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    fullWidth
                    required
                />
                {imageUrl && (
                    <Box sx={styles.imageContainer}>
                        <Image src={fullImageUrl} alt="Quiz Image" layout={'fill'} objectFit={'contain'} unoptimized />
                    </Box>
                )}

                <OutlinedInput
                    placeholder="Correct Answer"
                    value={correctAnswer}
                    onChange={e => setCorrectAnswer(e.target.value)}
                    fullWidth
                    required
                />

                <Typography>Incorrect Answers:</Typography>
                {incorrectAnswers.map((answer, index) => (
                    <OutlinedInput
                        key={index}
                        placeholder={`Incorrect Answer ${index + 1}`}
                        value={answer}
                        onChange={e => handleIncorrectAnswerChange(index, e.target.value)}
                        fullWidth
                    />
                ))}

                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={e => setType(e.target.value)} required>
                    <MenuItem value="text_choice">Text Choice</MenuItem>
                    <MenuItem value="image_choice">Image Choice</MenuItem>
                </Select>

                <InputLabel>Is Niche</InputLabel>
                <Select value={isNiche.toString()} onChange={e => setIsNiche(e.target.value === 'true')}>
                    <MenuItem value="false">No</MenuItem>
                    <MenuItem value="true">Yes</MenuItem>
                </Select>
                <Stack direction="row" spacing={2}>
                    <Button
                        size="large"
                        variant="contained"
                        color="error"
                        onClick={handleDelete}
                        sx={{ mt: 2 }}
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                    >
                        Delete Quiz
                    </Button>
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{ mt: 2 }}
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                    >
                        Update Quiz
                    </Button>
                </Stack>
            </Stack>
        </ModalLayout>
    );
};

export default QuizUpdate;
