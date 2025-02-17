import React from 'react';

import { Button, CircularProgress, OutlinedInput, Stack } from '@mui/material';
import { toast } from 'react-toastify';

import { TOAST_MESSAGES } from '@/constants/toastMessages';
import { useWebSocket } from '@/hooks/useWebSocket';

import ModalLayout from '../ui/layouts/ModalLayout';

interface QuizCreateFormProps {
    open: boolean;
    onClose: () => void;
    roomUuid: string;
}

const QuizCreateForm = ({ open, onClose, roomUuid }: QuizCreateFormProps) => {
    const { socket } = useWebSocket();
    const [loading, setLoading] = React.useState(false);
    const [question, setQuestion] = React.useState('');
    const [correctAnswer, setCorrectAnswer] = React.useState('');
    const [incorrectAnswers, setIncorrectAnswers] = React.useState(['', '', '']);

    const handleIncorrectAnswerChange = (index: number, value: string) => {
        const updatedAnswers = [...incorrectAnswers];

        updatedAnswers[index] = value;
        setIncorrectAnswers(updatedAnswers);
    };

    const resetForm = () => {
        setCorrectAnswer('');
        setQuestion('');
        setIncorrectAnswers(['', '', '']);
    };

    const handleSubmit = async () => {
        if (!correctAnswer || !question || incorrectAnswers.some(answer => !answer)) {
            toast.error(TOAST_MESSAGES.ERROR.REQUIRED_FIELDS);

            return;
        }

        const quizData = {
            roomUuid,
            quiz: {
                correctAnswer,
                question,
                incorrectAnswers,
            },
        };

        setLoading(true);

        if (!socket) {
            toast.error('Socket connection not available');
            setLoading(false);
        }

        socket?.emit('createQuiz', quizData, (response: any) => {
            if (response.error) toast.error(response.error);
            else {
                toast.success(TOAST_MESSAGES.SUCCESS.QUIZ_CREATE);
                resetForm();
                onClose();
            }
            setLoading(false);
        });
    };

    return (
        <ModalLayout open={open} handleClose={onClose}>
            <Stack spacing={2}>
                <OutlinedInput placeholder="Question" value={question} onChange={e => setQuestion(e.target.value)} />
                <OutlinedInput
                    placeholder="Correct Answer"
                    value={correctAnswer}
                    onChange={e => setCorrectAnswer(e.target.value)}
                />
                {incorrectAnswers.map((answer, index) => (
                    <OutlinedInput
                        key={index}
                        placeholder={`Incorrect Answer ${index + 1}`}
                        value={answer}
                        onChange={e => handleIncorrectAnswerChange(index, e.target.value)}
                    />
                ))}
                <Stack spacing={2} direction="row">
                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={24} /> : null}
                    >
                        Add Question
                    </Button>
                    <Button variant="contained" size="large" onClick={onClose} disabled={loading}>
                        Cancel
                    </Button>
                </Stack>
            </Stack>
        </ModalLayout>
    );
};

export default QuizCreateForm;
