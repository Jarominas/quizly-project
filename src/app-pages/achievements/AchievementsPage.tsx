'use client';

import React from 'react';

import { Card, Stack, Typography } from '@mui/material';

import useUserScore from '@/hooks/useUserScore';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useAuth } from '@/hooks/useAuth';

const AchievementsPage = () => {
    const { user } = useAuth();
    const { score } = useUserScore();

    if (!user)
        return (
            <Stack spacing={2} alignSelf="center">
                <Typography> Please login to see your achievements</Typography>
            </Stack>
        );
    if (!score) return <LoadingSpinner />;

    return (
        <Stack spacing={2}>
            <Typography>Your Achievements</Typography>
            <Card>
                <Typography>Total played games: 0</Typography>
            </Card>
            <Card>
                <Typography>Correct answered questions: {score}</Typography>
            </Card>
        </Stack>
    );
};

export default AchievementsPage;
