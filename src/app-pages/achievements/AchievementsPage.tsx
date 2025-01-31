'use client';

import React from 'react';

import { Stack, Typography } from '@mui/material';

import { useAuth } from '@/hooks/useAuth';

const AchievementsPage = () => {
    const { user } = useAuth();

    if (!user)
        return (
            <Stack spacing={2} alignSelf="center">
                <Typography> Please login to see your achievements</Typography>
            </Stack>
        );

    return (
        <Stack spacing={2}>
            <Typography>Your Achievements</Typography>
        </Stack>
    );
};

export default AchievementsPage;
