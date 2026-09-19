import { ObjectiveOption, ProgressStep, PillarCard, EvolutionWord, RealResultPillar, ModalityOption } from './types';

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

export const getWhatsAppCtaMessage = (objectiveTitle?: string, modalityTitle?: string) => {
  if (objectiveTitle && modalityTitle) {
    return `Olá Marcos Willian! Vim do seu site e gostaria de falar sobre ${modalityTitle} com foco em ${objectiveTitle}. Como faço para iniciar minha consultoria no Time MW?`;
  }
  if (modalityTitle) {
    return `Olá Marcos Willian! Vim do seu site e gostaria de falar sobre ${modalityTitle} e consultoria personalizada no Time MW!`;
  }
  if (objectiveTitle) {
    return `Olá Marcos Willian! Vim do seu site e decidi buscar meu próximo nível: "${objectiveTitle}". Gostaria de fazer uma consultoria personalizada com você no Time MW!`;
  }
  return 'Olá Marcos Willian! Vim do seu site e quero levar minha evolução a sério. Gostaria de fazer uma consultoria personalizada e entender como funciona o acompanhamento do Time MW!';
};

export const PROGRESS_STEPS: ProgressStep[] = [
  { number: '01', label: 'INÍCIO', sectionId: 'objetivo' },
  { number: '02', label: 'MODALIDADE', sectionId: 'modalidade' },
  { number: '03', label: 'MÉTODO', sectionId: 'metodo' },
  { number: '04', label: 'TIME MW', sectionId: 'timemw' },
  { number: '05', label: 'EVOLUÇÃO', sectionId: 'evolucao' },
  { number: '06', label: 'COMEÇAR', sectionId: 'comecar' },
];

export const MODALITIES: ModalityOption[] = [
  {
    id: 'corrida',
    title: 'CORRIDA',
    tag: 'RITMO & CONDICIONAMENTO',
    description: 'Planilhas individualizadas, ritmo cardiorrespiratório e evolução progressiva de distâncias.',
    iconName: 'timer',
    whatsappMessage: 'Olá Marcos Willian! Vim pelo seu site e gostaria de falar sobre corrida e consultoria no Time MW.',
  },
  {
    id: 'musculacao',
    title: 'MUSCULAÇÃO',
    tag: 'HIPERTROFIA & FORÇA',
    description: 'Periodização estratégica, ganho de massa muscular, definição corporal e progressão de carga.',
    iconName: 'dumbbell',
    whatsappMessage: 'Olá Marcos Willian! Vim pelo seu site e gostaria de falar sobre musculação e consultoria no Time MW.',
  },
  {
    id: 'presencial',
    title: 'PRESENCIAL',
    tag: 'PERSONAL VIP 1 A 1',
    description: 'Acompanhamento lado a lado, ajuste fino de técnica, biomecânica e correção postural em tempo real.',
    iconName: 'mapPin',
    whatsappMessage: 'Olá Marcos Willian! Vim pelo seu site e gostaria de falar sobre atendimento presencial de Personal Trainer.',
  },
  {
    id: 'hibrido',
    title: 'TREINO HÍBRIDO',
    tag: 'FORÇA + CORRIDA & PERFORMANCE',
    description: 'Combinação estratégica de força muscular e resistência cardiovascular para alto rendimento atlético.',
    iconName: 'zap',
    whatsappMessage: 'Olá Marcos Willian! Gostaria de falar sobre o treino híbrido.',
  },
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
