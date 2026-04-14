export interface Player {
    name: string;
    score: number;
    
}

export interface Question {
    question: string;
    options: string[];
    answer: string;
}

export interface QuizGame{
players:Player[];
questions:number;
}