import React from 'react';

import { Quiz } from '@/types/quiz';

interface QuizContextValue {
    quiz: Quiz | null;
    selectedAnswers: Record<number, number>;
    results: any[] | null;
    setResults: (_results: any[]) => void;
    setQuiz: (_quiz: Quiz | null) => void;
    addAnswer: (_questionId: number, _answerId: number) => void;
    clearAnswers: () => void;
}

interface QuizProviderProps {
    children: React.ReactNode;
}

export const QuizContext = React.createContext<QuizContextValue>({
    quiz: null,
    selectedAnswers: {},
    results: null,
    setResults: () => {},
    setQuiz: () => {},
    addAnswer: () => {},
    clearAnswers: () => {},
});

export const QuizProvider = ({ children }: QuizProviderProps) => {
    const [quiz, setQuiz] = React.useState<Quiz | null>(null);
    const [results, setResults] = React.useState<any[]>([]);
    const [selectedAnswers, setSelectedAnswers] = React.useState<Record<number, number>>({});

    const addAnswer = (questionId: number, answerId: number) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: answerId,
        }));
    };

    const clearAnswers = () => setSelectedAnswers({});

    return (
        <QuizContext.Provider value={{ quiz, selectedAnswers, results, setResults, setQuiz, addAnswer, clearAnswers }}>
            {children}
        </QuizContext.Provider>
    );
};
