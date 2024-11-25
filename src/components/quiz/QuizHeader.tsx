'use client'

import { Button, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const QuizHeader = ({ quiz }: any) => {
	const router = useRouter()
	return (
		<Stack spacing={2} direction='row'>
			<Button variant='contained' onClick={router.back}>
				Back
			</Button>
			<Typography variant='h4'>{quiz?.title}</Typography>
		</Stack>
	)
}

export default QuizHeader
