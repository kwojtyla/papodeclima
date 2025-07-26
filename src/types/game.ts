import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface Question {
  id: number;
  statement: string;
  compiledStatement?: MDXRemoteSerializeResult;
  isTrue: boolean;
  explanation: string;
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
