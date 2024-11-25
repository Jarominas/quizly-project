import { Quiz } from '@/types/quiz'
import React from 'react'

interface QuizContextValue {
	quiz: Quiz | null
	setQuiz: (quiz: Quiz | null) => void
}

interface QuizProviderProps {
	children: React.ReactNode
}

export const QuizContext = React.createContext<QuizContextValue | undefined>(undefined)

export const QuizProvider = ({ children }: QuizProviderProps) => {
	const [quiz, setQuiz] = React.useState<Quiz | null>(null)

	return <QuizContext.Provider value={{ quiz, setQuiz }}>{children}</QuizContext.Provider>
}
