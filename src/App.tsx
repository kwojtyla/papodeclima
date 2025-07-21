import { useState, useEffect } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { GameHeader } from "./components/GameHeader";
import { QuestionCard } from "./components/QuestionCard";
import { GameComplete } from "./components/GameComplete";
import { questions } from "./data/questions";
import type { GameState } from "./types/game";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameState, setGameState] = useState<GameState>({
    currentPhase: 1,
    score: 0,
    totalQuestions: questions.length,
    correctAnswers: 0,
    isGameComplete: false,
    showExplanation: false,
    selectedAnswer: null,
    isAnswerCorrect: null,
  });

  const currentQuestion = questions[gameState.currentPhase - 1];

  const handleGameStart = () => {
    setGameStarted(true);
  };

  const handleAnswerSelect = (selectedAnswer: boolean) => {
    const isCorrect = selectedAnswer === currentQuestion.isTrue;
    const points = isCorrect ? 100 : 0;

    setGameState((prev) => ({
      ...prev,
      selectedAnswer,
      isAnswerCorrect: isCorrect,
      showExplanation: true,
      score: prev.score + points,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
    }));
  };

  const handleNextQuestion = () => {
    if (gameState.currentPhase >= questions.length) {
      setGameState((prev) => ({
        ...prev,
        isGameComplete: true,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        currentPhase: prev.currentPhase + 1,
        showExplanation: false,
        selectedAnswer: null,
        isAnswerCorrect: null,
      }));
    }
  };

  const handleRestart = () => {
    setGameState({
      currentPhase: 1,
      score: 0,
      totalQuestions: questions.length,
      correctAnswers: 0,
      isGameComplete: false,
      showExplanation: false,
      selectedAnswer: null,
      isAnswerCorrect: null,
    });
    setGameStarted(false);
  };

  // Auto-advance after showing explanation
  useEffect(() => {
    if (gameState.showExplanation) {
      const timer = setTimeout(() => {
        handleNextQuestion();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [gameState.showExplanation, gameState.currentPhase]);

  if (!gameStarted) {
    return <WelcomeScreen onStart={handleGameStart} />;
  }

  if (gameState.isGameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-green-50 flex items-center justify-center p-4">
        <GameComplete
          score={gameState.score}
          correctAnswers={gameState.correctAnswers}
          totalQuestions={gameState.totalQuestions}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <GameHeader
            currentPhase={gameState.currentPhase}
            totalPhases={gameState.totalQuestions}
            score={gameState.score}
            correctAnswers={gameState.correctAnswers}
          />

          <div className="p-8">
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={gameState.selectedAnswer}
              isAnswerCorrect={gameState.isAnswerCorrect}
              showExplanation={gameState.showExplanation}
              onAnswerSelect={handleAnswerSelect}
            />

            {gameState.showExplanation && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">
                    Próxima pergunta em alguns segundos...
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
