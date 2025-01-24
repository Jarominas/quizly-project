import React from 'react';

import Link from 'next/link';

import { Button, Stack } from '@mui/material';

import { NAVIGATION_PATHS } from '@/configs/pageNavigation';

const QuizPage = () => (
    <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} alignSelf="center">
        <Button variant="contained" component={Link} href={NAVIGATION_PATHS.APP.QUIZ.RANDOM}>
            Random Quiz
        </Button>
        <Button variant="contained" component={Link} href={NAVIGATION_PATHS.APP.GAME_ROOM}>
            Play with friends
        </Button>
    </Stack>
);

export default QuizPage;
