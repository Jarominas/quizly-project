import React from 'react';

import { Stack } from '@mui/material';

import QuizHeader from './QuizHeader';
import QuizProgressBar from './QuizProgressBar';
import QuizContent from './QuizContent';
import QuizAnswers from './QuizAnswers';
import QuizFooter from './QuizFooter';

interface QuizComponentProps {
    quiz: any;
    withProgress: boolean;
    showCorrectAnswer: boolean;
    setShowCorrectAnswer: (_showCorrectAnswer: boolean) => void;
}

const QuizComponent = ({ quiz, withProgress, showCorrectAnswer, setShowCorrectAnswer }: QuizComponentProps) => (
    <Stack spacing={2}>
        <QuizHeader quiz={quiz} />
        <QuizProgressBar withProgress={withProgress} />
        <QuizContent quiz={quiz} />
        <QuizAnswers quiz={quiz} showCorrectAnswer={showCorrectAnswer} />
        <QuizFooter quiz={quiz} showCorrectAnswer={showCorrectAnswer} setShowCorrectAnswer={setShowCorrectAnswer} />
    </Stack>
);

export default QuizComponent;
