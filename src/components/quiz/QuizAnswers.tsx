'use client'

import React from 'react'

import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack } from '@mui/material'

const styles = {
	answerBox: {
		border: '1px solid',
		borderColor: (theme: any) => theme.palette.primary.light,
		borderRadius: (theme: any) => theme.spacing(1),
		cursor: 'pointer',
	},
	listItemText: {
		padding: (theme: any) => theme.spacing(2),
	},
}

const getBackgroundColor = (answer: any, selectedAnswer: number, showCorrectAnswer: boolean) => {
	if (!showCorrectAnswer) {
		return selectedAnswer === answer.id
			? (theme: any) => theme.palette.primary.light
			: (theme: any) => theme.palette.background.default
	}

	if (answer.isCorrect) {
		return (theme: any) => theme.palette.success.light
	}

	if (selectedAnswer === answer.id && !answer.isCorrect) {
		return (theme: any) => theme.palette.error.light
	}

	return (theme: any) => theme.palette.background.default
}

const QuizAnswers = ({ quiz, showCorrectAnswer }: any) => {
	const [selectedAnswer, setSelectedAnswer] = React.useState<number>(0)
	const numbers = ['A', 'B', 'C', 'D']

	const { answers } = quiz?.questions[0]

	const handleAnswerSelect = (answerId: number) => {
		if (!showCorrectAnswer) {
			setSelectedAnswer(answerId)
		}
	}

	return (
		<Stack spacing={1}>
			{answers.map((answer: any, index: number) => {
				return (
					<ListItem
						sx={{
							...styles.answerBox,
							backgroundColor: getBackgroundColor(answer, selectedAnswer, showCorrectAnswer),
							borderColor: showCorrectAnswer && answer.isCorrect ? 'success.main' : 'primary.light',
						}}
						key={answer.id}
						disablePadding
						onClick={() => handleAnswerSelect(answer.id)}
					>
						<ListItemButton>
							<ListItemAvatar>
								<Avatar>{numbers[index]}</Avatar>
							</ListItemAvatar>
							<ListItemText sx={styles.listItemText} primary={answer.text} />
						</ListItemButton>
					</ListItem>
				)
			})}
		</Stack>
	)
}

export default QuizAnswers
