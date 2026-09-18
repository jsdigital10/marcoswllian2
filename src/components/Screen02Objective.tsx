import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Zap, Dumbbell, Gauge, Check, ChevronDown } from 'lucide-react';
import { OBJECTIVES } from '../constants';
import { ObjectiveOption } from '../types';

interface Screen02ObjectiveProps {
  selectedObjective: ObjectiveOption | null;
  onSelectObjective: (obj: ObjectiveOption) => void;
  onContinue: () => void;
}

export const Screen02Objective: React.FC<Screen02ObjectiveProps> = ({
  selectedObjective,
  onSelectObjective,
  onContinue,
}) => {
  const getIcon = (name: ObjectiveOption['iconName'], isSelected: boolean) => {
    const iconClass = `w-6 h-6 transition-all duration-300 ${
      isSelected
        ? 'text-[#ff5500] drop-shadow-[0_0_8px_rgba(255,85,0,0.8)] scale-110'
        : 'text-neutral-400 group-hover:text-white'
    }`;

    switch (name) {
      case 'flame':
        return <Flame className={iconClass} />;
      case 'zap':
        return <Zap className={iconClass} />;
      case 'dumbbell':
        return <Dumbbell className={iconClass} />;
      case 'gauge':
        return <Gauge className={iconClass} />;
      default:
        return <Flame className={iconClass} />;
    }
  };

  return (
    <section
      id="objetivo"
      aria-label="Seleção de Objetivo"
      className="relative py-16 px-5 flex flex-col items-center justify-center min-h-[90vh]"
    >
      <div className="w-full max-w-[420px] mx-auto text-center">
        {/* Sub-badge / context */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-bold tracking-[0.2em] text-[#ff5500] uppercase mb-4">
          <span>01</span>
          <span className="text-neutral-500">•</span>
          <span>DIAGNÓSTICO INICIAL</span>
        </div>

        {/* Título & Subtítulo */}
        <h2 className="text-2xl sm:text-3xl font-black uppercase font-athletic tracking-wide text-white leading-tight mb-2">
          QUAL É O SEU <br />
          <span className="text-metallic">PRÓXIMO NÍVEL?</span>
        </h2>

        <p className="text-xs sm:text-sm text-neutral-400 font-sans mb-8">
          “Escolha o que você quer buscar agora.”
        </p>

        {/* 4 CARDS INTERATIVOS */}
        <div className="grid grid-cols-1 gap-3.5 mb-8" role="radiogroup" aria-label="Opções de objetivos de treino">
          {OBJECTIVES.map((item) => {
            const isSelected = selectedObjective?.id === item.id;

            return (
              <button
                key={item.id}
                id={`objective-card-${item.id}`}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => onSelectObjective(item)}
                className={`group relative text-left w-full p-4 rounded-xl transition-all duration-200 cursor-pointer overflow-hidden ${
                  isSelected
                    ? 'glass-panel-active -translate-y-1'
                    : 'glass-panel hover:border-white/20 hover:-translate-y-0.5'
                }`}
              >
                {/* Subtle side highlight indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="active-objective-indicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff8800] to-[#ff4400]"
                  />
                )}

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    {/* 3D Icon Badge Container */}
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#ff5500]/15 border border-[#ff5500]/40 shadow-[0_0_15px_rgba(255,85,0,0.3)]'
                          : 'bg-white/[0.04] border border-white/[0.08] group-hover:border-white/20'
                      }`}
                    >
                      {getIcon(item.iconName, isSelected)}
                    </div>

                    {/* Textos */}
                    <div>
                      <h3
                        className={`text-sm sm:text-base font-bold tracking-wide uppercase font-athletic transition-colors ${
                          isSelected ? 'text-white' : 'text-neutral-200 group-hover:text-white'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-neutral-400 font-sans">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Check Indicator */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#ff5500] text-black shadow-[0_0_10px_rgba(255,85,0,0.6)] scale-100'
                        : 'border border-neutral-700 bg-black/40 scale-90 opacity-40'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* FEEDBACK DINÂMICO APÓS SELEÇÃO */}
        <AnimatePresence>
          {selectedObjective && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-4 pt-2"
            >
              <div className="p-3.5 rounded-xl bg-[#14141c]/80 border border-[#ff5500]/25 backdrop-blur-sm">
                <p className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider font-athletic">
                  “Você já sabe onde quer chegar.”
                </p>
                <p className="text-xs text-[#ff6a00] font-sans mt-0.5">
                  “Agora precisa construir o caminho.”
                </p>
              </div>

              {/* Botão CONTINUAR ↓ (NÃO abre WhatsApp) */}
              <button
                id="objective-continue-btn"
                type="button"
                onClick={onContinue}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ff6600] hover:from-[#ff6600] hover:to-[#ff4400] text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase font-athletic shadow-[0_4px_20px_rgba(255,85,0,0.3)] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>CONTINUAR</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
