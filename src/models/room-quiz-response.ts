import { RoomQuiz } from './room-quiz';
import { User } from './user';

export interface RoomQuizResponse {
    id: string;
    response: string;
    isCorrect: boolean;
    createdAt: string;
    updatedAt: string;
    quiz: RoomQuiz;
    quizId: string;
    user: User;
    userId: string;
}
