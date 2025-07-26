import React from "react";
import { Award } from "lucide-react";

interface GameHeaderProps {
  currentPhase: number;
  totalPhases: number;
  score: number;
  correctAnswers: number;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  currentPhase,
  totalPhases,
  score,
  correctAnswers,
}) => {
  const progressPercentage = (currentPhase / totalPhases) * 100;

  return (
    <div className="bg-primary text-white p-6 rounded-t-2xl">
      <div className="flex flex-col items-center justify-between mb-4 md:flex-row gap-3 md:gap-0">
        <div className="flex flex-col items-center space-x-3 md:flex-row md:text-left text-center">
          <div className="size-11 p-2 bg-secondary rounded-full flex items-center justify-center">
            <img src="/icon-observatorio.png" alt="Logo Observatório" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Papo de Clima</h1>
            <p className="text-teal-100 text-sm">
              Combatendo fake news sobre mudanças climáticas no mangue
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-[#90793C] rounded-full pr-4">
          <div className="flex items-center text-primary space-x-2 bg-[#FFC107] px-3 py-2 rounded-full">
            <Award className="w-5 h-5" />
            <span>{score} pts</span>
          </div>
          <div className="text-right flex items-center gap-2">
            <div>
              {correctAnswers}/{totalPhases}
            </div>
            <div className="text-sm text-teal-100">acertos</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>
            Fase {currentPhase} de {totalPhases}
          </span>
          <span>{Math.round(progressPercentage)}% completo</span>
        </div>
        <div className="w-full bg-[#90793C] rounded-full h-3">
          <div
            className="bg-[#FFC107] h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};
