import React from "react";
import { Trophy, RefreshCw, Share2, TreePine } from "lucide-react";

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
        color: "text-green-600",
        icon: "🌟",
      };
    if (percentage >= 70)
      return {
        message: "Muito Bem! Defensor do Mangue!",
        color: "text-blue-600",
        icon: "🌿",
      };
    if (percentage >= 50)
      return {
        message: "Bom Trabalho! Continue Aprendendo!",
        color: "text-yellow-600",
        icon: "🌱",
      };
    return {
      message: "Continue Estudando! O Mangue Precisa de Você!",
      color: "text-orange-600",
      icon: "📚",
    };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <div className="relative inline-block">
          <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 text-3xl">
            {performance.icon}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-2">Parabéns!</h2>
        <p className={`text-xl font-semibold mb-4 ${performance.color}`}>
          {performance.message}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
          <div className="text-3xl font-bold text-green-600 mb-1">
            {correctAnswers}
          </div>
          <div className="text-sm text-gray-600">Respostas Corretas</div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-200">
          <div className="text-3xl font-bold text-blue-600 mb-1">
            {percentage}%
          </div>
          <div className="text-sm text-gray-600">Taxa de Acerto</div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
          <div className="text-3xl font-bold text-orange-600 mb-1">{score}</div>
          <div className="text-sm text-gray-600">Pontuação Total</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl mb-8">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <TreePine className="w-5 h-5 text-teal-600" />
          <h3 className="font-semibold text-gray-800">Impacto Educativo</h3>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          Você contribuiu para combater a desinformação sobre mudanças
          climáticas nos manguezais! Compartilhe seus conhecimentos e ajude a
          proteger estes ecossistemas vitais.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Jogar Novamente</span>
        </button>

        <button className="bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
          <Share2 className="w-5 h-5" />
          <span>Compartilhar</span>
        </button>
      </div>
    </div>
  );
};
