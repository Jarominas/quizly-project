import React from 'react'
import { Button, Stack } from '@mui/material'

const QuizFooter = () => {
	return (
		<Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignSelf={{ xs: '', sm: 'flex-end' }}>
			<Button variant='contained'>Check</Button>
			<Button variant='outlined' disabled>
				Next Quiz
			</Button>
		</Stack>
	)
}

export default QuizFooter
