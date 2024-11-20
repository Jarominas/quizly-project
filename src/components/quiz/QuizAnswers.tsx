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

const QuizAnswers = () => {
	const numbers = ['A', 'B', 'C', 'D']

	return (
		<Stack spacing={1}>
			{numbers.map((number) => (
				<ListItem sx={styles.answerBox} key={number} disablePadding>
					<ListItemButton>
						<ListItemAvatar>
							<Avatar>{number}</Avatar>
						</ListItemAvatar>
						<ListItemText sx={styles.listItemText} primary='Inbox' />
					</ListItemButton>
				</ListItem>
			))}
		</Stack>
	)
}

export default QuizAnswers
