import React from 'react';

import { Answer } from '@/types/quiz';

interface useShuffledAnswersProps {
    answers: Answer[];
}

const useShuffledAnswers = ({ answers }: useShuffledAnswersProps) => {
    const [shuffledAnswers, setShuffledAnswers] = React.useState<Answer[]>([]);

    React.useEffect(() => {
        if (!answers) return;
        const randomized = answers.sort(() => Math.random() - 0.5);

        setShuffledAnswers(randomized);
    }, [answers]);

    return { shuffledAnswers };
};

export default useShuffledAnswers;
