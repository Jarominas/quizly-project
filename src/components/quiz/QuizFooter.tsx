import React from 'react'
import { Button, Stack } from '@mui/material'
import { useQuiz } from '@/hooks/useQuiz'
import { axiosInstance } from '@/configs/axiosInstance'

const QuizFooter = ({ quiz, showCorrectAnswer, setShowCorrectAnswer }: any) => {
	const { selectedAnswers, clearAnswers, setQuiz } = useQuiz()

	const handleCheck = async () => {
		const validationResults = await axiosInstance.post('/quizes/validate-answers', {
			quizId: quiz.id,
			selectedAnswers,
		})

		if (validationResults.status === 201) {
			setShowCorrectAnswer(true)
		}
	}

	const fetchNextRandomQuiz = async () => {
		const newQuiz = await axiosInstance.get('/quizes/random').then((res) => res.data)
		setQuiz(newQuiz)
		setShowCorrectAnswer(false)
		clearAnswers()
	}
	return (
		<Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignSelf={{ xs: '', sm: 'flex-end' }}>
			<Button variant='contained' onClick={handleCheck} disabled={showCorrectAnswer}>
				Check
			</Button>
			<Button variant='outlined' onClick={fetchNextRandomQuiz} disabled={!showCorrectAnswer}>
				Next Quiz
			</Button>
		</Stack>
	)
}

export default QuizFooter
