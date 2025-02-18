'use client';

import React from 'react';

import { useAuth } from '@/hooks/useAuth';
import { USER_ACCESS_ACTIONS } from '@/configs/permissions';

interface PermissionContextType {
    isAllowedTo: (_action: string) => boolean;
}

interface PermissionProviderProps {
    children: React.ReactNode;
}

const PermissionContext = React.createContext<PermissionContextType>({
    isAllowedTo: () => false,
});

export const PermissionProvider = ({ children }: PermissionProviderProps) => {
    const { user } = useAuth();

    const isAllowedTo = (action: string) => {
        if (!user) return false;

        return USER_ACCESS_ACTIONS[user.role]?.includes(action) || false;
    };

    return <PermissionContext.Provider value={{ isAllowedTo }}>{children}</PermissionContext.Provider>;
};

export default PermissionContext;
