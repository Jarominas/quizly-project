'use client';

import React from 'react';

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';
import { axiosInstance } from '@/configs/axiosInstance';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const GoogleAuthCallback = () => {
    const router = useRouter();
    const { setUser } = useAuth();

    React.useEffect(() => {
        const handleAuthCallback = async () => {
            const code = new URLSearchParams(window.location.search).get('code');

            if (!code) return;

            try {
                const response = await axiosInstance.post('/auth/google-web', { code });

                const { token, user } = response.data;

                if (token) {
                    localStorage.setItem('token', token);
                    setUser(user);
                    toast.success('Successfully signed in!');
                    router.push('/'); // Redirect to home page
                }
            } catch (error) {
                toast.error('Failed to sign in.');
                router.push('/');
            }
        };

        handleAuthCallback();
    }, [router]);

    return <LoadingSpinner />;
};

export default GoogleAuthCallback;
