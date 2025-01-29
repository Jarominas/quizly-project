export interface Quiz {
    id: string;
    category: string;
    difficulty: string;
    type: string;
    question: {
        text: string;
    };
    correctAnswer: string;
    incorrectAnswers: { answer: string }[];
    isNiche: boolean;
    imageUrl: string;
}
