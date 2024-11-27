'use client';

import React from 'react';

import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack } from '@mui/material';

import { useQuiz } from '@/hooks/useQuiz';
import { getAnswerBackgroundColor } from '@/utils/helpers/getAnswerBackgroundColor';
import { Answer, Quiz } from '@/types/quiz';
import useShuffledAnswers from '@/hooks/useShuffledAnswers';

interface QuizAnswersProps {
    quiz: Quiz;
    showCorrectAnswer: boolean;
}

const styles = {
    answerBox: {
        border: '1px solid',
        borderColor: (theme: any) => theme.palette.primary.light,
        borderRadius: (theme: any) => theme.spacing(1),
        cursor: 'pointer',
    },
    listItemText: {
        padding: (theme: any) => theme.spacing(2),
    },
};

const QuizAnswers = ({ quiz, showCorrectAnswer }: QuizAnswersProps) => {
    const { selectedAnswers, addAnswer, results } = useQuiz();
    const numbers = ['A', 'B', 'C', 'D'];

    const { answers } = quiz.questions[0] ?? {};
    const question = quiz.questions[0] ?? {};

    const { shuffledAnswers } = useShuffledAnswers({ answers: answers });

    const correctAnswerId = results?.find(result => result?.questionId === question.id)?.correctAnswerId;

    const handleAnswerSelect = (answerId: number) => {
        if (!showCorrectAnswer) addAnswer(question.id, answerId);
    };

    const getListItemStyles = (answer: Answer) => ({
        ...styles.answerBox,
        backgroundColor: getAnswerBackgroundColor(
            answer,
            selectedAnswers[question.id],
            showCorrectAnswer,
            correctAnswerId
        ),
    });

    return (
        <Stack spacing={1}>
            {shuffledAnswers?.map((answer, index) => (
                <ListItem
                    sx={getListItemStyles(answer)}
                    key={answer.id}
                    disablePadding
                    onClick={() => handleAnswerSelect(answer.id)}
                >
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar>{numbers[index]}</Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={styles.listItemText} primary={answer.text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </Stack>
    );
};

export default QuizAnswers;
