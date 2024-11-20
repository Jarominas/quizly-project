import { NAVIGATION_PATHS } from '@/configs/pageNavigation'
import { Button, Stack } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const QuizPage = () => {
	return (
		<Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignSelf='center'>
			<Button variant='contained' component={Link} href={NAVIGATION_PATHS.QUIZ.RANDOM}>
				Random Quiz
			</Button>
			<Button variant='contained' component={Link} href={NAVIGATION_PATHS.GAME_ROOM}>
				Play with friends
			</Button>
		</Stack>
	)
}

export default QuizPage
