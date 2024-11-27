import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import StyleIcon from '@mui/icons-material/Style';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';

interface NavItem {
    name: string;
    link: string;
    icon?: React.ComponentType;
}

export const NAVIGATION_PATHS = {
    HOME: '/',
    QUIZ: {
        ROOT: '/quiz',
        RANDOM: '/quiz/random',
    },
    GAME_ROOM: '/game-room',
    ACHIEVEMENTS: '/achievements',
    LOGIN: '/sign-in',
    SIGN_UP: '/sign-up',
};

export const APP_NAVIGATION_LIST: NavItem[] = [
    {
        name: 'Home',
        link: NAVIGATION_PATHS.HOME,
        icon: HomeIcon,
    },
    {
        name: 'Quiz',
        link: NAVIGATION_PATHS.QUIZ.ROOT,
        icon: StyleIcon,
    },
    {
        name: 'Game Room',
        link: NAVIGATION_PATHS.GAME_ROOM,
        icon: InterpreterModeIcon,
    },
    {
        name: 'Achievments',
        link: NAVIGATION_PATHS.ACHIEVEMENTS,
        icon: EmojiEventsIcon,
    },
];
