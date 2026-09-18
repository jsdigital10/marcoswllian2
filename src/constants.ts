import { ObjectiveOption, ProgressStep, PillarCard, EvolutionWord, RealResultPillar } from './types';

export const OFFICIAL_LINKS = {
  MAIN_LOGO: 'https://i.postimg.cc/rFX6pTd8/Convite-de-Aniversario-Colagem-com-Foto-Divertido-Branco.png',
  TIME_MW_LOGO: 'https://i.postimg.cc/28Rp5Yqn/5DBE1D9D-C3C8-4E98-A9C1-A233508DDCC5.png',
  WHATSAPP: 'https://wa.link/s8gahy',
  INSTAGRAM: 'https://www.instagram.com/marcos_willian.oficial?stkn=MXMyNWw2NXNtanc5cg==',
  INSTAGRAM_HANDLE: '@marcos_willian.oficial',
};

export const PROGRESS_STEPS: ProgressStep[] = [
  { number: '01', label: 'INÍCIO', sectionId: 'objetivo' },
  { number: '02', label: 'MÉTODO', sectionId: 'metodo' },
  { number: '03', label: 'TIME MW', sectionId: 'timemw' },
  { number: '04', label: 'EVOLUÇÃO', sectionId: 'evolucao' },
  { number: '05', label: 'COMEÇAR', sectionId: 'comecar' },
];

export const OBJECTIVES: ObjectiveOption[] = [
  {
    id: 'fisico',
    title: 'MELHORAR MEU FÍSICO',
    subtitle: 'Composição corporal & estética atlética',
    iconName: 'flame',
  },
  {
    id: 'condicionamento',
    title: 'MAIS CONDICIONAMENTO',
    subtitle: 'Capacidade cardiorrespiratória & vigor',
    iconName: 'zap',
  },
  {
    id: 'forca',
    title: 'GANHAR FORÇA',
    subtitle: 'Potência muscular & densidade',
    iconName: 'dumbbell',
  },
  {
    id: 'desempenho',
    title: 'MELHORAR MEU DESEMPENHO',
    subtitle: 'Agilidade, velocidade & rendimento',
    iconName: 'gauge',
  },
];

export const METHOD_PILLARS: PillarCard[] = [
  {
    number: '01',
    title: 'PLANEJAMENTO',
    description: 'Treinos direcionados aos seus objetivos.',
    iconName: 'target',
  },
  {
    number: '02',
    title: 'ACOMPANHAMENTO',
    description: 'Estratégia para acompanhar sua evolução.',
    iconName: 'lineChart',
  },
  {
    number: '03',
    title: 'PERFORMANCE',
    description: 'Força, condicionamento e desempenho trabalhando juntos.',
    iconName: 'activity',
  },
];

export const RETENTION_WORDS: EvolutionWord[] = [
  { word: 'DISCIPLINA.' },
  { word: 'CONSTÂNCIA.' },
  { word: 'PERFORMANCE.' },
  { word: 'EVOLUÇÃO.', isAccent: true },
  { word: 'RESULTADO.' },
];

export const REAL_RESULT_SLIDES: RealResultPillar[] = [
  {
    id: 'processo',
    tag: 'PILAR 01',
    title: 'PROCESSOS REAIS',
    highlight: 'DIRECIONAMENTO INDIVIDUAL',
    description: 'Cada indivíduo possui uma biomecânica única. O planejamento respeita sua rotina e potencializa seus ganhos sem desperdício de tempo.',
    phase: 'ETAPA INICIAL & ESTRATÉGIA',
  },
  {
    id: 'evolucao',
    tag: 'PILAR 02',
    title: 'EVOLUÇÃO REAL',
    highlight: 'MÉTRICAS & PROGRESSÃO',
    description: 'Ajustes contínuos de cargas, volume e intensidade para que o corpo continue respondendo com hipertrofia, queima calórica e rendimento.',
    phase: 'CONSOLIDAÇÃO & CONSISTÊNCIA',
  },
  {
    id: 'resultado',
    tag: 'PILAR 03',
    title: 'RESULTADOS REAIS',
    highlight: 'TRANSFORMAÇÃO SUSTENTÁVEL',
    description: 'Mudanças físicas profundas e duradouras construídas através de método esportivo e disciplina no Time MW.',
    phase: 'ALTA PERFORMANCE & FÍSICO',
  },
];
