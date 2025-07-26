import React from "react";
import { Trophy, RefreshCw, Share2 } from "lucide-react";
import { Button } from "./Button";
import { Footer } from "./Footer";

interface GameCompleteProps {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const GameComplete: React.FC<GameCompleteProps> = ({
  score,
  correctAnswers,
  totalQuestions,
  onRestart,
}) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  const getPerformanceMessage = () => {
    if (percentage >= 90)
      return {
        message: "Especialista em Ecologia!",
        icon: "🌟",
      };
    if (percentage >= 70)
      return {
        message: "Muito Bem!",
        icon: "🌿",
      };
    if (percentage >= 50)
      return {
        message: "Bom Trabalho!",
        icon: "🌱",
      };
    return {
      message: "Continue Estudando! O Mangue Precisa de Você!",
      icon: "📚",
    };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="flex flex-col gap-4 bg-[url('/background-modal.webp')] rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto text-center">
      <div>
        <div className="relative inline-block">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 text-3xl">
            {performance.icon}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-primary mb-2">Parabéns!</h2>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-primary rounded-t-xl px-4 py-2 text-secondary text-xl font-bold">
          {performance.message}
        </div>
        <div className="flex flex-col items-center bg-secondary p-6 rounded-xl border border-[#D7CEC2]">
          <img src="/badge-defensor.png" alt="Badge" />
          <p className="text-primary text-sm leading-relaxed">
            Você contribuiu para combater a desinformação sobre mudanças
            climáticas nos manguezais! Compartilhe seus conhecimentos e ajude a
            proteger estes ecossistemas vitais.
          </p>
        </div>
      </div>

      <div className="border border-t border-[#C7BBA2] w-full md:hidden" />

      <div className="flex flex-col gap-4 justify-between md:flex-row">
        <div className="flex flex-col items-center justify-center bg-secondary border border-[#D7CEC2] rounded-xl p-4 w-full">
          <div className="text-6xl font-bold text-primary">
            {correctAnswers}
          </div>
          <div className="text-sm text-primary">Respostas Corretas</div>
        </div>

        <div className="flex flex-col items-center justify-center bg-secondary border border-[#D7CEC2] rounded-xl p-4 w-full">
          <div className="text-6xl font-bold text-primary">{percentage}%</div>
          <div className="text-sm text-primary">Taxa de Acerto</div>
        </div>

        <div className="flex flex-col items-center justify-center bg-secondary border border-[#D7CEC2] rounded-xl p-4 w-full">
          <div className="text-6xl font-bold text-primary">{score}</div>
          <div className="text-sm text-primary">Pontuação Total</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={onRestart}>
          <RefreshCw className="w-5 h-5" />
          <span className="text-2xl">Jogar Novamente</span>
        </Button>
        <Button
          variant="secondary"
          onClick={() => alert("Compartilhar em breve!")}
        >
          <Share2 className="w-5 h-5" />
          <span className="text-2xl">Compartilhar</span>
        </Button>
      </div>
      <Footer />
    </div>
  );
};
