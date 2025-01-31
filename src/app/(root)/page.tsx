'use client';

import React from 'react';

import { useAuth } from '@/hooks/useAuth';
import HomePage from '@/app-pages/home/HomePage';
import UserHomePage from '@/app-pages/home/UserHomePage';

const Home = () => {
    const { user } = useAuth();

    if (!user) return <HomePage />;

    return <UserHomePage />;
};

export default Home;
