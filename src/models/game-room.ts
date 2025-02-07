import { RoomQuiz } from './room-quiz';
import { User } from './user';

export interface GameRoom {
    id: string;
    name: string;
    roomUuid: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    manager: User;
    managerId: string;
    participants: User[];
    quizzes: RoomQuiz[];
}
