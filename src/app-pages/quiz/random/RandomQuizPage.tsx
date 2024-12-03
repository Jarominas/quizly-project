'use client';

import React from 'react';

import QuizComponent from '@/components/quiz/QuizComponent';
import ErrorMessage from '@/components/ui-kit/ErrorMessage';
import LoadingSpinner from '@/components/ui-kit/LoadingSpinner';
import { ERROR_MESSAGES } from '@/constants/errorMessages';
import { useQuiz } from '@/hooks/useQuiz';

const RandomQuizPage = () => {
    const { quiz, isLoading, error, showCorrectAnswer, fetchNextQuiz, validateAnswers } = useQuiz();

    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMessage text={ERROR_MESSAGES.DATA_FETCH_ERROR} />;
    if (!quiz) return <ErrorMessage text={ERROR_MESSAGES.DATA_FETCH_ERROR} />;

    return (
        <QuizComponent
            quiz={quiz}
            showProgress={false}
            showCorrectAnswer={showCorrectAnswer}
            setShowCorrectAnswer={() => validateAnswers()}
            fetchNextQuiz={fetchNextQuiz}
        />
    );
};

export default RandomQuizPage;
