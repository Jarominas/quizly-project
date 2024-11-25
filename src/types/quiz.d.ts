export interface Quiz {
	id: number
	title: string
	description: string
	questions: Question[]
}

export interface Question {
	id: number
	text: string
	answers: Answer[]
}

export interface Answer {
	id: number
	text: string
	isCorrect: boolean
}
