'use client';

import React from 'react';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { axiosInstance } from '@/configs/axiosInstance';
import { NAVIGATION_PATHS } from '@/configs/pageNavigation';
import { TOAST_MESSAGES } from '@/constants/toastMessages';
import { User } from '@/models';

type AuthContextType = {
    user: User | null;
    login: (_email: string, _password: string) => void;
    logout: () => void;
    loading: boolean;
};

const AuthContext = React.createContext<AuthContextType>({
    user: null,
    login: (_email: string, _password: string) => {},
    logout: () => {},
    loading: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(false);

    const login = async (email: string, password: string): Promise<{ token: string | null; user?: User | null }> => {
        setLoading(true);
        try {
            const response = await axiosInstance.post('/auth/login', {
                email,
                password,
            });

            const { token, user: responseUser } = response.data;

            if (token) {
                localStorage.setItem('token', token);
                setUser(responseUser);
                setLoading(false);
                router.push(NAVIGATION_PATHS.APP.HOME);
                toast.success(TOAST_MESSAGES.SUCCESS.SIGN_IN);
            }

            return { token, user };
        } catch (error) {
            toast.error(TOAST_MESSAGES.ERROR.SIGN_IN);

            return { token: null };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        router.push(NAVIGATION_PATHS.SIGN_IN);
    };

    React.useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const checkUserStatus = async () => {
                setLoading(true);
                try {
                    const response = await axiosInstance.get('/auth/status');

                    setUser(response.data);
                    setLoading(false);
                } catch (error) {
                    console.error(error);
                    router.push('/');
                }
            };

            checkUserStatus();
        }
    }, []);

    return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
