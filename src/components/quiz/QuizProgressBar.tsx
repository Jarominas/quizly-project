import { Box, LinearProgress } from '@mui/material'
import React from 'react'

const QuizProgressBar = () => {
	return (
		<Box sx={{ width: '100%' }}>
			<LinearProgress variant='determinate' value={50} />
		</Box>
	)
}

export default QuizProgressBar
