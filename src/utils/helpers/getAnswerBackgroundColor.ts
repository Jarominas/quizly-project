export const getAnswerBackgroundColor = (answer: any, selectedAnswer: number, showCorrectAnswer: boolean) => {
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
