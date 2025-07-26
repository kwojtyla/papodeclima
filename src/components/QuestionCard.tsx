import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import type { Question } from "../types/game";
import { Button } from "./Button";
import { cn } from "../lib/utils";
import { MDXContent } from "./MDXContent";
import { useMDX } from "../hooks/useMDX";

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
  const mdxSource = useMDX(question.explanation);
  return (
    <>
      <div className="bg-secondary py-6 px-4 rounded-xl border-l-4 border-primary">
        <p className="text-xl text-primary">"{question.statement}"</p>
      </div>

      {!showExplanation ? (
        <div className="space-y-4">
          <p className="text-center text-primary">
            Esta afirmação é verdadeira ou falsa?
          </p>

          <div className="flex flex-col md:flex-row items-center gap-2.5">
            <Button
              onClick={() => onAnswerSelect(true)}
              disabled={selectedAnswer !== null}
            >
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg">Não que não!</span>
              </div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Button>

            <Button
              onClick={() => onAnswerSelect(false)}
              disabled={selectedAnswer !== null}
              className="bg-[#FE6847] hover:bg-[#da684f]"
            >
              <div className="flex items-center justify-center space-x-3">
                <XCircle className="w-6 h-6" />
                <span className="text-lg">É papo!</span>
              </div>
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "p-6 rounded-xl border-2",
            isAnswerCorrect
              ? "bg-green-50 border-primary"
              : "bg-red-50 border-red-700"
          )}
        >
          <div className="flex flex-col items-start space-x-3">
            <div className="flex items-center gap-2.5">
              {isAnswerCorrect ? (
                <>
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="font-bold text-xl text-primary">
                    CORRETO!
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-6 h-6 text-red-700" />
                  <span className="font-bold text-xl text-red-700">
                    INCORRETO :(
                  </span>
                </>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-start space-x-2">
                {mdxSource ? (
                  <div className="text-primary">
                    <MDXContent source={mdxSource} />
                  </div>
                ) : (
                  <p className="text-primary">{question.explanation}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
