export const getAnswerBackgroundColor = (
    answer: any,
    selectedAnswer: number,
    showCorrectAnswer: boolean,
    correctAnswerId: number
) => {
    if (!showCorrectAnswer)
        return selectedAnswer === answer.id
            ? (theme: any) => theme.palette.primary.light
            : (theme: any) => theme.palette.background.default;

    if (answer.id === correctAnswerId) return (theme: any) => theme.palette.success.light;

    if (selectedAnswer === answer.id)
        return (theme: any) => (answer.isCorrect ? theme.palette.success.light : theme.palette.error.light);

    return (theme: any) => theme.palette.background.default;
};
