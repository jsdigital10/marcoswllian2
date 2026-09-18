export interface ObjectiveOption {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'flame' | 'zap' | 'dumbbell' | 'gauge';
}

export interface ProgressStep {
  number: string;
  label: string;
  sectionId: string;
}

export interface PillarCard {
  number: string;
  title: string;
  description: string;
  iconName: 'target' | 'lineChart' | 'activity';
}

export interface EvolutionWord {
  word: string;
  isAccent?: boolean;
}

export interface RealResultPillar {
  id: string;
  tag: string;
  title: string;
  highlight: string;
  description: string;
  phase: string;
}
