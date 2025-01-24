import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import StyleIcon from '@mui/icons-material/Style';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import PeopleRounded from '@mui/icons-material/PeopleRounded';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

interface NavItem {
    name: string;
    link: string;
    icon?: React.ComponentType<any>;
}

type NavigationPaths = {
    APP: {
        HOME: string;
        QUIZ: {
            ROOT: string;
            RANDOM: string;
        };
        GAME_ROOM: string;
        ACHIEVEMENTS: string;
    };
    ADMIN_PANEL: {
        ROOT: string;
        USERS: string;
        QUIZES: string;
        ADD_QUIZ: string;
    };
    SIGN_IN: string;
    SIGN_UP: string;
};

export const NAVIGATION_PATHS: NavigationPaths = {
    APP: {
        HOME: '/',
        QUIZ: {
            ROOT: '/quiz',
            RANDOM: '/quiz/random',
        },
        GAME_ROOM: '/game-room',
        ACHIEVEMENTS: '/achievements',
    },
    ADMIN_PANEL: {
        ROOT: '/admin-panel',
        USERS: '/admin-panel/users',
        QUIZES: '/admin-panel/quizes',
        ADD_QUIZ: '/admin-panel/add-quiz',
    },
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
};

export const APP_NAVIGATION_LIST: NavItem[] = [
    {
        name: 'Home',
        link: NAVIGATION_PATHS.APP.HOME,
        icon: HomeIcon,
    },
    {
        name: 'Quiz',
        link: NAVIGATION_PATHS.APP.QUIZ.ROOT,
        icon: StyleIcon,
    },
    {
        name: 'Game Room',
        link: NAVIGATION_PATHS.APP.GAME_ROOM,
        icon: InterpreterModeIcon,
    },
    {
        name: 'Achievments',
        link: NAVIGATION_PATHS.APP.ACHIEVEMENTS,
        icon: EmojiEventsIcon,
    },
    {
        name: 'Admin Panel',
        link: NAVIGATION_PATHS.ADMIN_PANEL.ROOT,
        icon: AdminPanelSettingsIcon,
    },
];

export const ADMIN_PANEL_NAVIGATION_LIST: NavItem[] = [
    {
        name: 'Home',
        link: NAVIGATION_PATHS.ADMIN_PANEL.ROOT,
        icon: HomeIcon,
    },
    {
        name: 'Users',
        link: NAVIGATION_PATHS.ADMIN_PANEL.USERS,
        icon: PeopleRounded,
    },
    {
        name: 'Quizes',
        link: NAVIGATION_PATHS.ADMIN_PANEL.QUIZES,
        icon: ViewCarouselIcon,
    },
    {
        name: 'Add Quiz',
        link: NAVIGATION_PATHS.ADMIN_PANEL.ADD_QUIZ,
        icon: PlaylistAddIcon,
    },
];
