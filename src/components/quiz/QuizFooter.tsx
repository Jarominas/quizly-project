import React from 'react'
import { Button, Stack } from '@mui/material'

const QuizFooter = ({ quiz, showCorrectAnswer, setShowCorrectAnswer, onNext }: any) => {
	const handleCheck = () => setShowCorrectAnswer(true)
	const handleNext = () => {
		setShowCorrectAnswer(false)
		onNext()
	}
	return (
		<Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignSelf={{ xs: '', sm: 'flex-end' }}>
			<Button variant='contained' onClick={handleCheck} disabled={showCorrectAnswer}>
				Check
			</Button>
			<Button variant='outlined' onClick={handleNext} disabled={!showCorrectAnswer}>
				Next Quiz
			</Button>
		</Stack>
	)
}

export default QuizFooter
