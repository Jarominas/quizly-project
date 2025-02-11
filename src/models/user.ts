export interface User {
    id: string;
    email: string;
    name: string;
    isRoomManager?: boolean;
}

export type RoomRole = 'roomManager' | 'participant';
