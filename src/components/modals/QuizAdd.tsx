'use client';

import React from 'react';

import {
    Button,
    MenuItem,
    Select,
    Stack,
    Typography,
    InputLabel,
    OutlinedInput,
    CircularProgress,
    Box,
    Chip,
} from '@mui/material';
import { toast } from 'react-toastify';
import { mutate } from 'swr';
import Image from 'next/image';

import { TOAST_MESSAGES } from '@/constants/toastMessages';
import { axiosInstance } from '@/configs/axiosInstance';

import ModalLayout from '../ui/layouts/ModalLayout';

const CATEGORIES = [
    {
        value: 'economy',
        label: 'Economy',
    },
    {
        value: 'science',
        label: 'Science',
    },
    {
        value: 'history',
        label: 'History',
    },
];

interface QuizAddProps {
    open: boolean;
    onClose: () => void;
}

const QuizAdd = ({ open, onClose }: QuizAddProps) => {
    const [loading, setLoading] = React.useState(false);
    const [isImageCreating, setIsImageCreating] = React.useState(false);
    const [generatedImages, setGeneratedImages] = React.useState<string[]>([]);
    const [selectedImage, setSelectedImage] = React.useState<string>('');
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

    const resetForm = () => {
        setCategory('');
        setDifficulty('');
        setIsNiche(false);
        setCorrectAnswer('');
        setType('');
        setQuestion('');
        setIncorrectAnswers(['', '', '']);
        setGeneratedImages([]);
    };

    const handleGenerateImages = async () => {
        if (!question || !category) {
            toast.error('Please enter question and category first');

            return;
        }

        setIsImageCreating(true);
        try {
            const response = await axiosInstance.get('/quizes/generate-images', {
                params: {
                    prompt: question,
                    category,
                },
            });

            if (response.status !== 200) toast.error(TOAST_MESSAGES.ERROR.IMAGE_GENERATE);

            setGeneratedImages(prevImages => [...prevImages, response.data]);

            setIsImageCreating(false);
        } catch (error) {
            toast.error(TOAST_MESSAGES.ERROR.IMAGE_GENERATE);
            setIsImageCreating(false);
        }
    };

    const handleSubmit = async () => {
        if (!category || !difficulty || !correctAnswer || !type || !question || !selectedImage) {
            toast.error(TOAST_MESSAGES.ERROR.REQUIRED_FIELDS);

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
            imageUrl: selectedImage,
        };

        setLoading(true);

        try {
            const response = await axiosInstance.post('/quizes/create', quizData);

            if (response.status !== 201) toast.error(TOAST_MESSAGES.ERROR.QUIZ_CREATE);

            toast.success(TOAST_MESSAGES.SUCCESS.QUIZ_CREATE);

            resetForm();
            mutate('/quizes');
            onClose();
            setLoading(false);
        } catch (error: any) {
            toast.error(error.response.data.message || TOAST_MESSAGES.ERROR.QUIZ_CREATE);
            setLoading(false);
        }
    };

    return (
        <ModalLayout open={open} handleClose={onClose}>
            <Stack alignItems="flex-start">
                <Typography variant="h4">Add a New Quiz</Typography>
                <Stack direction="column" spacing={2} width="100%">
                    <InputLabel>Category</InputLabel>
                    <Select value={category} onChange={e => setCategory(e.target.value)} required>
                        {CATEGORIES.map(item => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
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

                    <Stack alignSelf="flex-start" width={200}>
                        <Button
                            size="large"
                            variant="contained"
                            disabled={question ? false : true}
                            onClick={handleGenerateImages}
                        >
                            {isImageCreating ? <CircularProgress size={25} /> : 'Generate Images'}
                        </Button>
                    </Stack>
                    <Stack
                        gap={1}
                        flexDirection="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        overflow="auto"
                        sx={{
                            whiteSpace: 'nowrap',
                            maxWidth: '100%',
                        }}
                    >
                        {generatedImages.length > 0 &&
                            generatedImages.map((image, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: '300px',
                                        height: '300px',
                                        position: 'relative',
                                        minWidth: '300px',
                                        flexShrink: 0,
                                        borderRadius: '10px',
                                        border: selectedImage === image ? '2px solid ' : 'none',
                                        borderColor: 'primary.main',

                                        '&:hover': {
                                            cursor: 'pointer',
                                        },
                                    }}
                                >
                                    <Image
                                        src={image}
                                        alt="Generated Image"
                                        fill
                                        unoptimized
                                        style={{
                                            borderRadius: '10px',
                                            objectFit: 'cover',
                                        }}
                                        onClick={() => setSelectedImage(image)}
                                    />
                                    {selectedImage === image && (
                                        <Chip
                                            label="Selected"
                                            color="primary"
                                            sx={{
                                                position: 'absolute',
                                                top: 5,
                                                right: 5,
                                            }}
                                        />
                                    )}
                                </Box>
                            ))}
                    </Stack>

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
                    <Button
                        disabled={loading}
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{ mt: 2 }}
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                    >
                        Add Quiz
                    </Button>
                </Stack>
            </Stack>
        </ModalLayout>
    );
};

export default QuizAdd;
