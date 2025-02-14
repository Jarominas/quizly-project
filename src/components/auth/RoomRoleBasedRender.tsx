import React from 'react';

import { RoomRole } from '@/models';

interface RoomRoleBasedRenderProps {
    allowedRoles: RoomRole[];
    userRole: RoomRole;
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

const RoomRoleBasedRender: React.FC<RoomRoleBasedRenderProps> = ({
    allowedRoles,
    userRole,
    children,
    fallback = null,
}) => {
    if (!allowedRoles.includes(userRole)) return <>{fallback}</>;

    return <>{children}</>;
};

export default RoomRoleBasedRender;
