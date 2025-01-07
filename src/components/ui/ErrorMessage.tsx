import React from 'react'

import { Alert, Stack } from '@mui/material'

interface ErrorMessageProps {
	text: string
}

const ErrorMessage = ({ text }: ErrorMessageProps) => (
	<Stack alignSelf='center'>
		<Alert severity='error' color='error' variant='filled' sx={{ flex: 1 }}>
			{text}
		</Alert>
	</Stack>
)

export default ErrorMessage
