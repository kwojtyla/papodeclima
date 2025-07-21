import React from "react";
import { TreePine, Award } from "lucide-react";

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
    <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6 rounded-t-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-full">
            <TreePine className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">EcoMangue Quiz</h1>
            <p className="text-teal-100 text-sm">
              Combatendo Fake News Climáticas
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white/20 px-3 py-2 rounded-full">
            <Award className="w-5 h-5" />
            <span className="font-semibold">{score} pts</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-teal-100">Acertos</div>
            <div className="font-bold">
              {correctAnswers}/{totalPhases}
            </div>
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
        <div className="w-full bg-white/20 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};
