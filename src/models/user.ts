import { UserRole } from './roles';

export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    isRoomManager?: boolean;
}

export type RoomRole = 'roomManager' | 'participant';
