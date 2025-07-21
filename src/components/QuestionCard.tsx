import React from "react";
import { CheckCircle, XCircle, Info } from "lucide-react";
import type { Question } from "../types/game";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: boolean | null;
  isAnswerCorrect: boolean | null;
  showExplanation: boolean;
  onAnswerSelect: (answer: boolean) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  isAnswerCorrect,
  showExplanation,
  onAnswerSelect,
}) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      biodiversity: "bg-green-100 text-green-800",
      climate: "bg-blue-100 text-blue-800",
      ecosystem: "bg-teal-100 text-teal-800",
      conservation: "bg-orange-100 text-orange-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      biodiversity: "Biodiversidade",
      climate: "Clima",
      ecosystem: "Ecossistema",
      conservation: "Conservação",
    };
    return labels[category as keyof typeof labels] || category;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <div
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getCategoryColor(
            question.category
          )}`}
        >
          {getCategoryLabel(question.category)}
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl border-l-4 border-teal-500">
          <p className="text-lg leading-relaxed text-gray-800 font-medium">
            "{question.statement}"
          </p>
        </div>
      </div>

      {!showExplanation ? (
        <div className="space-y-4">
          <p className="text-center text-gray-600 mb-6">
            Esta afirmação é verdadeira ou falsa?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => onAnswerSelect(true)}
              disabled={selectedAnswer !== null}
              className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg">FATO</span>
              </div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>

            <button
              onClick={() => onAnswerSelect(false)}
              disabled={selectedAnswer !== null}
              className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <div className="flex items-center justify-center space-x-3">
                <XCircle className="w-6 h-6" />
                <span className="text-lg">FAKE</span>
              </div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`p-6 rounded-xl border-2 ${
            isAnswerCorrect
              ? "bg-green-50 border-green-200"
              : "bg-red-50 border-red-200"
          }`}
        >
          <div className="flex items-start space-x-3">
            <div
              className={`p-2 rounded-full ${
                isAnswerCorrect ? "bg-green-200" : "bg-red-200"
              }`}
            >
              {isAnswerCorrect ? (
                <CheckCircle className="w-6 h-6 text-green-700" />
              ) : (
                <XCircle className="w-6 h-6 text-red-700" />
              )}
            </div>
            <div className="flex-1">
              <h3
                className={`font-bold text-lg mb-2 ${
                  isAnswerCorrect ? "text-green-800" : "text-red-800"
                }`}
              >
                {isAnswerCorrect ? "Correto!" : "Incorreto!"}
              </h3>
              <div className="flex items-start space-x-2">
                <Info className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
