import type { Question } from "../types/game";

export const questions: Question[] = [
  {
    id: 1,
    statement:
      "Os manguezais absorvem até 10 vezes mais carbono por hectare do que as florestas tropicais.",
    isTrue: true,
    explanation:
      "FATO: Os manguezais são extremamente eficientes no sequestro de carbono, armazenando grandes quantidades tanto na biomassa quanto no solo rico em matéria orgânica.",
    category: "climate",
  },
  {
    id: 2,
    statement:
      "O aumento do nível do mar sempre beneficia os manguezais, pois eles precisam de água salgada.",
    isTrue: false,
    explanation:
      "FAKE: Embora os manguezais sejam adaptados à água salgada, o aumento acelerado do nível do mar pode submergir completamente estas áreas, destruindo o ecossistema.",
    category: "climate",
  },
  {
    id: 3,
    statement:
      "Os manguezais servem como berçários naturais para mais de 75% das espécies de peixes comerciais tropicais.",
    isTrue: true,
    explanation:
      "FATO: Os manguezais são ecossistemas fundamentais que servem como áreas de reprodução e crescimento para a maioria das espécies marinhas comerciais.",
    category: "biodiversity",
  },
  {
    id: 4,
    statement:
      "A temperatura mais alta dos oceanos não afeta significativamente os manguezais.",
    isTrue: false,
    explanation:
      "FAKE: O aquecimento dos oceanos afeta diretamente os manguezais, alterando a salinidade, causando branqueamento de corais associados e modificando as cadeias alimentares.",
    category: "climate",
  },
  {
    id: 5,
    statement:
      "Os manguezais podem migrar naturalmente para o interior conforme o nível do mar sobe.",
    isTrue: true,
    explanation:
      "FATO: Os manguezais têm capacidade natural de migração para áreas mais altas, mas isso só é possível quando não há barreiras humanas como construções ou agricultura.",
    category: "ecosystem",
  },
  {
    id: 6,
    statement:
      "Destruir manguezais para aquicultura sempre aumenta a produção de pescado na região.",
    isTrue: false,
    explanation:
      "FAKE: A destruição de manguezais para aquicultura geralmente reduz a produção pesqueira a longo prazo, pois elimina os berçários naturais das espécies marinhas.",
    category: "conservation",
  },
  {
    id: 7,
    statement:
      "Os manguezais conseguem filtrar naturalmente poluentes e sedimentos da água.",
    isTrue: true,
    explanation:
      "FATO: Os manguezais atuam como filtros naturais, suas raízes e sedimentos capturam poluentes, metais pesados e excesso de nutrientes da água.",
    category: "ecosystem",
  },
  {
    id: 8,
    statement:
      "A acidificação dos oceanos não impacta os manguezais porque eles vivem em água doce.",
    isTrue: false,
    explanation:
      "FAKE: Os manguezais vivem em águas salobras (mistura de água doce e salgada) e são diretamente afetados pela acidificação, que prejudica a vida marinha associada.",
    category: "climate",
  },
  {
    id: 9,
    statement:
      "Restaurar manguezais é uma das estratégias mais eficazes para mitigar mudanças climáticas.",
    isTrue: true,
    explanation:
      "FATO: A restauração de manguezais é reconhecida internacionalmente como uma solução baseada na natureza muito eficaz para sequestro de carbono e adaptação climática.",
    category: "conservation",
  },
  {
    id: 10,
    statement:
      "Os furacões e tempestades não afetam os manguezais porque eles são resistentes.",
    isTrue: false,
    explanation:
      "FAKE: Embora os manguezais ofereçam proteção contra tempestades, eles próprios podem ser severamente danificados por furacões intensos, especialmente com o aumento da frequência destes eventos.",
    category: "climate",
  },
];
