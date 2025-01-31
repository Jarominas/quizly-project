import React from 'react';

import { Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useQuiz } from '@/hooks/useQuiz';

import IconButton from '@components/buttons/IconButton';

const QuizFooter = () => {
    const { showCorrectAnswer, validateAnswers, fetchNextQuiz } = useQuiz();
    const [loadingCheck, setLoadingCheck] = React.useState(false);
    const [loadingNext, setLoadingNext] = React.useState(false);

    const handleCheck = async () => {
        setLoadingCheck(true);
        await validateAnswers();
        setLoadingCheck(false);
    };

    const handleNext = async () => {
        setLoadingNext(true);
        await fetchNextQuiz();
        setLoadingNext(false);
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
                onClick={handleNext}
                disabled={!showCorrectAnswer}
                loading={loadingNext}
            />
        </Stack>
    );
};

export default QuizFooter;
