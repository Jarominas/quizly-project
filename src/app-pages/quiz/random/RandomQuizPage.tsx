'use client'
import QuizComponent from '@/components/quiz/QuizComponent'
import ErrorMessage from '@/components/ui-kit/ErrorMessage'
import LoadingSpinner from '@/components/ui-kit/LoadingSpinner'
import { axiosInstance } from '@/configs/axiosInstance'
import { ERROR_MESSAGES } from '@/constants/errorMessages'
import { useQuiz } from '@/hooks/useQuiz'
import { Quiz } from '@/types/quiz'
import React from 'react'
import useSWR from 'swr'

const RandomQuizPage = () => {
	const { quiz, setQuiz } = useQuiz()
	const [showCorrectAnswer, setShowCorrectAnswer] = React.useState(false)

	const { error, isLoading } = useSWR<Quiz>(
		quiz ? null : '/quizes/random',
		(url) => axiosInstance.get(url).then((res) => res.data),
		{
			revalidateOnFocus: false,
			onSuccess: (fetchedData) => {
				if (!quiz) {
					setQuiz(fetchedData)
				}
			},
		}
	)

	const fetchNextRandomQuiz = async () => {
		const newQuiz = await axiosInstance.get('/quizes/random').then((res) => res.data)
		setQuiz(newQuiz)
		setShowCorrectAnswer(false)
	}

	if (!quiz) return <ErrorMessage text={ERROR_MESSAGES.DATA_FETCH_ERROR} />
	if (isLoading) return <LoadingSpinner />
	if (error) return <ErrorMessage text={ERROR_MESSAGES.DATA_FETCH_ERROR} />

	return (
		<QuizComponent
			quiz={quiz}
			withProgress={false}
			showCorrectAnswer={showCorrectAnswer}
			setShowCorrectAnswer={setShowCorrectAnswer}
			onNext={fetchNextRandomQuiz}
		/>
	)
}

export default RandomQuizPage
