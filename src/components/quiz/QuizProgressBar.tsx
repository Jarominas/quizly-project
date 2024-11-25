import { Box, LinearProgress } from '@mui/material'
import React from 'react'

interface QuizProgressBarProps {
	withProgress: boolean
}

const styles = {
	container: {
		width: '100%',
	},
}

const QuizProgressBar = ({ withProgress }: QuizProgressBarProps) => {
	if (!withProgress) return null

	return (
		<Box sx={styles.container}>
			<LinearProgress variant='determinate' value={50} />
		</Box>
	)
}

export default QuizProgressBar
