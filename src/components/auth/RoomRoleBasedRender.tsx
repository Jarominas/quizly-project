import React from 'react';

import { RoomRole } from '@/models';

interface RoomRoleBasedRenderProps {
    allowedRoles: RoomRole[];
    userRoomRole: RoomRole;
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

const RoomRoleBasedRender: React.FC<RoomRoleBasedRenderProps> = ({
    allowedRoles,
    userRoomRole,
    children,
    fallback = null,
}) => {
    if (!allowedRoles.includes(userRoomRole)) return <>{fallback}</>;

    return <>{children}</>;
};

export default RoomRoleBasedRender;
