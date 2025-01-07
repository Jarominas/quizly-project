import React from 'react';

import useSWR from 'swr';

import { Quiz, Result } from '@/types/quiz';
import { axiosInstance } from '@/configs/axiosInstance';
import { useAuth } from '@/hooks/useAuth';
import { User } from '@/types/user';

interface QuizContextValue {
    quiz: Quiz | null;
    selectedAnswers: Record<number, number>;
    results: {
        score: number;
        answeredQuestions: {
            questionId: number;
            selectedAnswerId: number;
            isCorrect: boolean;
            correctAnswerId: number | null;
        }[];
    } | null;
    showCorrectAnswer: boolean;
    error: any;
    isLoading: boolean;
    setQuiz: (_quiz: Quiz | null) => void;
    addAnswer: (_questionId: number, _answerId: number) => void;
    clearAnswers: () => void;
    setResults: (_results: Result) => void;
    toggleCorrectAnswer: (_show: boolean) => void;
    fetchNextQuiz: () => Promise<void>;
    validateAnswers: () => Promise<void>;
}

interface QuizProviderProps {
    children: React.ReactNode;
}

export const QuizContext = React.createContext<QuizContextValue | null>(null);

export const QuizProvider = ({ children }: QuizProviderProps) => {
    const { user } = useAuth() as { user: User | null };
    const [quiz, setQuiz] = React.useState<Quiz | null>(null);
    const [results, setResults] = React.useState<Result | null>(null);
    const [selectedAnswers, setSelectedAnswers] = React.useState<Record<number, number>>({});
    const [showCorrectAnswer, setShowCorrectAnswer] = React.useState<boolean>(false);

    console.log('showCorrectAnswer', showCorrectAnswer);

    console.log('user', user);

    const { error, isLoading } = useSWR<Quiz>(
        quiz ? null : '/quizes/random',
        url => axiosInstance.get(url).then(res => res.data),
        {
            revalidateOnFocus: false,
            onSuccess: fetchedData => {
                if (!quiz) setQuiz(fetchedData);
            },
        }
    );

    const addAnswer = (questionId: number, answerId: number) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: answerId,
        }));
    };

    const clearAnswers = () => setSelectedAnswers({});
    const toggleCorrectAnswer = (show: boolean) => setShowCorrectAnswer(show);

    const fetchNextQuiz = async () => {
        try {
            const response = await axiosInstance.get('/quizes/random');

            setQuiz(response.data);
            clearAnswers();
            setResults(null);
            setShowCorrectAnswer(false);
        } catch (e) {
            console.error(e);
        }
    };

    const validateAnswers = async () => {
        try {
            const validationResults = await axiosInstance.post('/quizes/validate-answers', {
                userId: user?.id,
                quizId: quiz?.id,
                selectedAnswers,
            });

            if (validationResults) {
                setResults(validationResults.data);
                setShowCorrectAnswer(true);
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <QuizContext.Provider
            value={{
                quiz,
                selectedAnswers,
                results,
                showCorrectAnswer,
                error,
                isLoading,
                setQuiz,
                addAnswer,
                clearAnswers,
                setResults,
                toggleCorrectAnswer,
                fetchNextQuiz,
                validateAnswers,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};
