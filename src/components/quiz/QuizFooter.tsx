import React from 'react';

import { Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useQuiz } from '@/hooks/useQuiz';
import useApi from '@/hooks/useApi';

import IconButton from '@components/buttons/IconButton';

const QuizFooter = ({ quiz, showCorrectAnswer, setShowCorrectAnswer }: any) => {
    const { selectedAnswers, clearAnswers, setQuiz, setResults } = useQuiz();
    const { fetchData } = useApi();
    const [loadingCheck, setLoadingCheck] = React.useState(false);
    const [loadingNext, setLoadingNext] = React.useState(false);

    const handleCheck = async () => {
        setLoadingCheck(true);
        try {
            const validationResults = await fetchData('/quizes/validate-answers', {
                method: 'POST',
                data: { quizId: quiz.id, selectedAnswers },
            });

            if (validationResults) {
                setShowCorrectAnswer(true);
                setResults(validationResults);
                setLoadingCheck(false);
            }
        } catch (error) {
            console.error('Validation error:', error);
            setLoadingCheck(false);
        }
    };

    const fetchNextRandomQuiz = async () => {
        setLoadingNext(true);
        try {
            const newQuiz = await fetchData('/quizes/random', { method: 'GET' });

            setQuiz(newQuiz);
            setShowCorrectAnswer(false);
            clearAnswers();
            setLoadingNext(false);
        } catch (error) {
            console.error('Fetch quiz error:', error);
            setLoadingNext(false);
        }
    };

    return (
        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignSelf={{ xs: '', sm: 'flex-end' }}>
            <IconButton
                variant="contained"
                disabled={showCorrectAnswer}
                onClick={handleCheck}
                text="Check"
                loading={loadingCheck}
                icon={<CheckCircleOutlineIcon />}
            />
            <IconButton
                text="Next Quiz"
                variant="outlined"
                icon={<ChevronRightIcon />}
                onClick={fetchNextRandomQuiz}
                disabled={!showCorrectAnswer}
                loading={loadingNext}
            />
        </Stack>
    );
};

export default QuizFooter;
