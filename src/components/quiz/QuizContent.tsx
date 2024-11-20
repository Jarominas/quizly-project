'use client'

import { Stack, Typography } from '@mui/material'
import React from 'react'

const styles = {
	contentContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: (theme: any) => theme.spacing(5),
		borderRadius: (theme: any) => theme.spacing(1),
		backgroundColor: (theme: any) => theme.palette.background.paper,
		boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
		width: '100%',
	},
}

const QuizContent = () => {
	return (
		<Stack sx={styles.contentContainer}>
			<Typography variant='h5'>
				Quiz Content here will be the question,Quiz Content here will be the question,Quiz Content here will be
				the question,Quiz Content here will be the question,Quiz Content here will be the question,Quiz Content
			</Typography>
		</Stack>
	)
}

export default QuizContent
