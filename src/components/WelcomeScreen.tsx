import React from "react";
import { Play, Target } from "lucide-react";
import {
  InstructionCard,
  InstructionCardContent,
  InstructionCardHeader,
} from "./InstructionCard";
import { Button } from "./Button";
import { Footer } from "./Footer";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <main className="min-h-screen bg-[url('/background.webp')] bg-cover bg-no-repeat flex items-center justify-center p-4">
      <article className="space-y-4 bg-[url('/background-modal.webp')] rounded-2xl shadow-2xl py-12 px-4 md:px-12 max-w-2xl w-full">
        <section className="text-center flex flex-col items-center gap-3 text-primary">
          <h1 className="text-6xl font-bold">Papo de Clima</h1>
          <p className="text-2xl">
            Combatendo Fake News sobre Mudanças Climáticas
          </p>
          <p className="text-base">
            Teste seus conhecimentos e ajude a proteger os manguezais!
          </p>
        </section>

        <section className="flex flex-col md:flex-row gap-1 md:gap-4">
          <InstructionCard className="md:w-1/2">
            <InstructionCardHeader>
              <Target className="w-6 h-6 text-primary" />
              Objetivo
            </InstructionCardHeader>
            <InstructionCardContent>
              Identifique fatos e fake news sobre o impacto das mudanças
              climáticas nos manguezais e ganhe pontos na jornada
            </InstructionCardContent>
          </InstructionCard>
          <InstructionCard className="md:w-1/2">
            <InstructionCardHeader>
              <Play className="w-6 h-6 text-primary" />
              Como Jogar
            </InstructionCardHeader>
            <InstructionCardContent>
              Leia cada afirmação e escolha se é um FATO{" "}
              <span className="font-bold">(Não que não!)</span> ou FAKE{" "}
              <span className="font-bold">(É papo!)</span>. Receba explicações
              detalhadas!
            </InstructionCardContent>
          </InstructionCard>
        </section>

        <Button onClick={onStart} variant="default">
          <Play className="w-6 h-6" />
          <span className="font-bold text-3xl">Começar</span>
        </Button>
        <Footer />
      </article>
    </main>
  );
};
