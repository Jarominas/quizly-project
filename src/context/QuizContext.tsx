import { Quiz } from '@/types/quiz'
import React from 'react'

interface QuizContextValue {
	quiz: Quiz | null
	selectedAnswers: Record<number, number>
	setQuiz: (quiz: Quiz | null) => void
	addAnswer: (questionId: number, answerId: number) => void
	clearAnswers: () => void
}

interface QuizProviderProps {
	children: React.ReactNode
}

export const QuizContext = React.createContext<QuizContextValue | undefined>(undefined)

export const QuizProvider = ({ children }: QuizProviderProps) => {
	const [quiz, setQuiz] = React.useState<Quiz | null>(null)
	const [selectedAnswers, setSelectedAnswers] = React.useState<Record<number, number>>({})

	console.log('QuizProvider', quiz)

	const addAnswer = (questionId: number, answerId: number) => {
		setSelectedAnswers((prev) => ({
			...prev,
			[questionId]: answerId,
		}))
	}

	const clearAnswers = () => setSelectedAnswers({})

	return (
		<QuizContext.Provider value={{ quiz, selectedAnswers, setQuiz, addAnswer, clearAnswers }}>
			{children}
		</QuizContext.Provider>
	)
}
