import { ObjectiveOption, ProgressStep, PillarCard, EvolutionWord, RealResultPillar } from './types';

export const OFFICIAL_LINKS = {
  MAIN_LOGO: 'https://i.postimg.cc/rFX6pTd8/Convite-de-Aniversario-Colagem-com-Foto-Divertido-Branco.png',
  TIME_MW_LOGO: 'https://i.postimg.cc/j5jq7Hdd/8B76526B-65A1-42A7-9B3C-B193207DB3DC.png',
  WHATSAPP: 'https://wa.link/s8gahy',
  WHATSAPP_PHONE: '5534999457566',
  INSTAGRAM: 'https://www.instagram.com/marcos_willian.oficial?stkn=MXMyNWw2NXNtanc5cg==',
  INSTAGRAM_HANDLE: '@marcos_willian.oficial',
};

export const createWhatsAppUrl = (message: string) => {
  const phone = OFFICIAL_LINKS.WHATSAPP_PHONE;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const WHATSAPP_FLOATING_MESSAGE =
  'Olá Marcos Willian! Vim pelo seu site oficial e gostaria de fazer uma consultoria para levar meus treinos a outro patamar. Como funciona para entrar no Time MW?';

export const getWhatsAppCtaMessage = (objectiveTitle?: string) => {
  if (objectiveTitle) {
    return `Olá Marcos Willian! Vim do seu site e decidi buscar meu próximo nível. Meu objetivo principal é "${objectiveTitle}" — gostaria de fazer uma consultoria personalizada com você no Time MW!`;
  }
  return 'Olá Marcos Willian! Vim do seu site e quero levar minha evolução a sério. Gostaria de fazer uma consultoria personalizada e entender como funciona o acompanhamento do Time MW!';
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
