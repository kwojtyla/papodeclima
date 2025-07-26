import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { GameHeader } from "./components/GameHeader";
import { QuestionCard } from "./components/QuestionCard";
import { GameComplete } from "./components/GameComplete";
import { questions } from "./data/questions";
import type { GameState } from "./types/game";
import { Button } from "./components/Button";
import { ArrowRight } from "lucide-react";

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

  // useEffect(() => {
  //   if (gameState.showExplanation) {
  //     const timer = setTimeout(() => {
  //       handleNextQuestion();
  //     }, 4000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [gameState.showExplanation, gameState.currentPhase]);

  if (!gameStarted) {
    return <WelcomeScreen onStart={handleGameStart} />;
  }

  if (gameState.isGameComplete) {
    return (
      <div className="min-h-screen bg-[url('/background.webp')] flex items-center justify-center p-4">
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
    <main className="min-h-screen bg-[url('/background.webp')] bg-no-repeat bg-cover flex items-center justify-center p-4">
      <div className="container m-auto px-4 py-8 max-w-4xl">
        <div className="bg-[url('/background-modal.webp')] rounded-2xl shadow-2xl overflow-hidden">
          <GameHeader
            currentPhase={gameState.currentPhase}
            totalPhases={gameState.totalQuestions}
            score={gameState.score}
            correctAnswers={gameState.correctAnswers}
          />

          <div className="px-4 md:px-8 py-6 space-y-4">
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={gameState.selectedAnswer}
              isAnswerCorrect={gameState.isAnswerCorrect}
              showExplanation={gameState.showExplanation}
              onAnswerSelect={handleAnswerSelect}
            />

            {gameState.showExplanation && (
              <Button className="w-fit mx-auto" onClick={handleNextQuestion}>
                <span className="text-2xl">
                  {gameState.currentPhase === 10
                    ? "Finalizar quiz"
                    : "Próxima questão"}
                </span>
                <ArrowRight />
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
