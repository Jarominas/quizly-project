import React from 'react';

import { User } from '@/types/user';
import { axiosInstance } from '@/configs/axiosInstance';

import { useAuth } from './useAuth';

const useUserScore = () => {
    const { user } = useAuth() as { user: User | null };
    const [score, setScore] = React.useState<number>(0);

    React.useEffect(() => {
        if (!user) return;

        const fetchUserScore = async () => {
            const response = await axiosInstance.get(`/user-score/`, {
                params: {
                    userId: user.id,
                },
            });

            setScore(response.data.totalScore);
        };

        fetchUserScore();
    }, [user]);

    return {
        score,
    };
};

export default useUserScore;
