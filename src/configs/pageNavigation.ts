import React from 'react';

import { House, MessageCircleQuestion, Swords, Trophy, Shield, Users, BetweenHorizontalStart } from 'lucide-react';

interface NavItem {
    name: string;
    link: string;
    icon?: React.ComponentType<any>;
    permission: string | null;
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
    },
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
};

export const APP_NAVIGATION_LIST: NavItem[] = [
    {
        name: 'Home',
        link: NAVIGATION_PATHS.APP.HOME,
        icon: House,
        permission: null,
    },
    {
        name: 'Quiz',
        link: NAVIGATION_PATHS.APP.QUIZ.ROOT,
        icon: MessageCircleQuestion,
        permission: null,
    },
    {
        name: 'Game Room',
        link: NAVIGATION_PATHS.APP.GAME_ROOM,
        icon: Swords,
        permission: null,
    },
    {
        name: 'Achievments',
        link: NAVIGATION_PATHS.APP.ACHIEVEMENTS,
        icon: Trophy,
        permission: 'navbar:btn.achievements',
    },
    {
        name: 'Admin Panel',
        link: NAVIGATION_PATHS.ADMIN_PANEL.ROOT,
        icon: Shield,
        permission: 'navbar:btn.admin-panel',
    },
];

export const ADMIN_PANEL_NAVIGATION_LIST: NavItem[] = [
    {
        name: 'Home',
        link: NAVIGATION_PATHS.ADMIN_PANEL.ROOT,
        icon: House,
        permission: 'navbar:btn.admin-panel.home',
    },
    {
        name: 'Users',
        link: NAVIGATION_PATHS.ADMIN_PANEL.USERS,
        icon: Users,
        permission: 'navbar:btn.admin-panel.users',
    },
    {
        name: 'Quizes',
        link: NAVIGATION_PATHS.ADMIN_PANEL.QUIZES,
        icon: BetweenHorizontalStart,
        permission: 'navbar:btn.admin-panel.quizes',
    },
];
