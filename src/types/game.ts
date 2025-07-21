export interface Question {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
  category: "biodiversity" | "climate" | "ecosystem" | "conservation";
}

export interface GameState {
  currentPhase: number;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  isGameComplete: boolean;
  showExplanation: boolean;
  selectedAnswer: boolean | null;
  isAnswerCorrect: boolean | null;
}
