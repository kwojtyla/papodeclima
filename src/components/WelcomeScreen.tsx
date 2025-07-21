import React from "react";
import { Play, TreePine, Waves, Target } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
              <TreePine className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Waves className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
            EcoMangue Quiz
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Combatendo Fake News sobre Mudanças Climáticas
          </p>
          <p className="text-gray-500">
            Teste seus conhecimentos e ajude a proteger os manguezais!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div className="flex items-center space-x-3 mb-3">
              <Target className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-gray-800">Objetivo</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Identifique fatos e fake news sobre o impacto das mudanças
              climáticas nos manguezais
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-200">
            <div className="flex items-center space-x-3 mb-3">
              <Play className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-gray-800">Como Jogar</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Leia cada afirmação e escolha se é um FATO ou FAKE. Receba
              explicações detalhadas!
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl mb-8">
          <h3 className="font-semibold text-gray-800 mb-3 text-center">
            Por que os Manguezais são Importantes?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>• Sequestram 10x mais carbono que florestas</div>
            <div>• Protegem contra tempestades e erosão</div>
            <div>• Berçário para 75% dos peixes comerciais</div>
            <div>• Filtram poluentes da água naturalmente</div>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 text-lg"
        >
          <Play className="w-6 h-6" />
          <span>Começar Quiz</span>
        </button>
      </div>
    </div>
  );
};
