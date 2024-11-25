import React from 'react'
import { QuizContext } from '@/context/QuizContext'

export const useQuiz = () => {
	const context = React.useContext(QuizContext)
	if (!context) {
		throw new Error('useQuiz must be used within a QuizProvider')
	}
	return context
}
