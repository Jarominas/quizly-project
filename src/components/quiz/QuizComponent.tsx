import { Box, Stack } from '@mui/material'
import React from 'react'
import QuizHeader from './QuizHeader'
import QuizProgressBar from './QuizProgressBar'
import QuizContent from './QuizContent'
import QuizAnswers from './QuizAnswers'
import QuizFooter from './QuizFooter'

const QuizComponent = () => {
	return (
		<Stack spacing={2}>
			<QuizHeader />
			<QuizProgressBar />
			<QuizContent />
			<QuizAnswers />
			<QuizFooter />
		</Stack>
	)
}

export default QuizComponent
