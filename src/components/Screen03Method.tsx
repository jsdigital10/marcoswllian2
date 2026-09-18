import React from 'react';
import { Target, TrendingUp, Activity } from 'lucide-react';
import { METHOD_PILLARS } from '../constants';
import { PillarCard } from '../types';

export const Screen03Method: React.FC = () => {
  const getPillarIcon = (name: PillarCard['iconName']) => {
    switch (name) {
      case 'target':
        return <Target className="w-5 h-5 text-[#ff5500]" />;
      case 'lineChart':
        return <TrendingUp className="w-5 h-5 text-[#ff5500]" />;
      case 'activity':
        return <Activity className="w-5 h-5 text-[#ff5500]" />;
      default:
        return <Target className="w-5 h-5 text-[#ff5500]" />;
    }
  };

  return (
    <section
      id="metodo"
      aria-label="Posicionamento e Método"
      className="relative py-20 px-5 flex flex-col items-center justify-center min-h-[90vh]"
    >
      <div className="w-full max-w-[420px] mx-auto text-center">
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-bold tracking-[0.2em] text-[#ff5500] uppercase mb-4">
          <span>02</span>
          <span className="text-neutral-500">•</span>
          <span>MÉTODO & ESTRATÉGIA</span>
        </div>

        {/* Título de Posicionamento */}
        <h2 className="text-2xl sm:text-3xl font-black uppercase font-athletic tracking-wide text-white leading-tight mb-4">
          SEU TREINO PRECISA <br />
          <span className="text-metallic">TER UM OBJETIVO.</span>
        </h2>

        {/* Frase de Efeito */}
        <div className="mb-10 space-y-1">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-400 uppercase font-display">
            NÃO É SOBRE FAZER MAIS.
          </p>
          <p className="text-lg sm:text-xl font-extrabold uppercase font-athletic tracking-wide">
            É SOBRE{' '}
            <span className="text-orange-glow underline decoration-[#ff5500]/50 decoration-2 underline-offset-4">
              TREINAR MELHOR.
            </span>
          </p>
        </div>

        {/* 3 CARDS PREMIUM */}
        <div className="space-y-4 text-left">
          {METHOD_PILLARS.map((card) => (
            <div
              key={card.number}
              id={`method-card-${card.number}`}
              className="glass-panel p-5 rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-[#ff5500]/40 group"
            >
              {/* Subtle metallic corner indicator */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#ff5500]/10 border border-[#ff5500]/25 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    {getPillarIcon(card.iconName)}
                  </div>
                  <h3 className="text-base font-extrabold font-athletic tracking-wider uppercase text-white group-hover:text-[#ff7722] transition-colors">
                    {card.title}
                  </h3>
                </div>

                <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-[#ff5500] transition-colors">
                  {card.number}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans pl-1 border-l-2 border-[#ff5500]/40">
                “{card.description}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
