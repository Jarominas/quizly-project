import React from 'react';

import { Stack } from '@mui/material';

import QuizHeader from './QuizHeader';
import QuizProgressBar from './QuizProgressBar';
import QuizContent from './QuizContent';
import QuizAnswers from './QuizAnswers';
import QuizFooter from './QuizFooter';

interface QuizComponentProps {
    quiz: any;
    showProgress: boolean;
    showCorrectAnswer: boolean;
    setShowCorrectAnswer: () => void;
    fetchNextQuiz: () => Promise<void>;
}

const QuizComponent = ({ quiz, showProgress, showCorrectAnswer }: QuizComponentProps) => (
    <Stack spacing={2}>
        <QuizHeader quiz={quiz} />
        <QuizProgressBar showProgress={showProgress} />
        <QuizContent quiz={quiz} />
        <QuizAnswers quiz={quiz} showCorrectAnswer={showCorrectAnswer} />
        <QuizFooter />
    </Stack>
);

export default QuizComponent;
