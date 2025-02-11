import React from 'react';

import { RoomRole } from '@/models';

interface RoomRoleBasedRenderProps {
    roomRole: RoomRole;
    children: React.ReactNode;
    fallback?: React.ReactNode;
    isRoomManager: boolean;
}

const RoomRoleBasedRender: React.FC<RoomRoleBasedRenderProps> = ({
    roomRole,
    children,
    fallback = null,
    isRoomManager,
}) => {
    if (roomRole === 'roomManager' && !isRoomManager) return <>{fallback}</>;

    return <>{children}</>;
};

export default RoomRoleBasedRender;
