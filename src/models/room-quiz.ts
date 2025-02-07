import { GameRoom } from './game-room';
import { RoomQuizResponse } from './room-quiz-response';

export interface RoomQuiz {
    id: string;
    question: string;
    correctAnswer: string;
    incorrectAnswers: string[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    room: GameRoom;
    roomId: string;
    responses: RoomQuizResponse[];
}
