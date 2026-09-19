import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants';

interface Screen01HeroProps {
  onExploreClick: () => void;
}

export const Screen01Hero: React.FC<Screen01HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero"
      aria-label="Abertura Marcos Willian"
      className="relative min-h-[92vh] flex flex-col items-center justify-between text-center pt-16 pb-8 px-5 overflow-hidden"
    >
      {/* Subtle light streak sweep animation across hero */}
      <div
        aria-hidden="true"
        className="absolute -inset-full pointer-events-none opacity-25 overflow-hidden"
      >
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#ff5500]/20 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[lightStreak_7s_ease-in-out_infinite]" />
      </div>

      {/* Main Brand Composition */}
      <div className="w-full flex-1 flex flex-col items-center justify-center my-auto">
        {/* LOGO PRINCIPAL: Grande, sem deformação, preservando transparência */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center mb-6"
        >
          {/* Subtle atmospheric glow behind logo */}
          <div
            aria-hidden="true"
            className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#ff5500]/25 via-transparent to-white/5 blur-2xl -z-10"
          />

          <img
            id="hero-main-logo"
            src={OFFICIAL_LINKS.MAIN_LOGO}
            alt="Logomarca Oficial Marcos Willian - Personal Trainer"
            className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* NOME & CARGO */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-1 mb-6"
        >
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-athletic uppercase text-metallic">
            MARCOS WILLIAN
          </h1>
          <div className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] text-neutral-300 uppercase font-display flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-2">
            <span>PERSONAL TRAINER</span>
            <span className="text-[#ff5500]">•</span>
            <span>PREPARADOR FÍSICO</span>
            <span className="text-[#ff5500]">•</span>
            <span>PERFORMANCE ESPORTIVA</span>
            <span className="text-[#ff5500]">•</span>
            <span>TREINO HÍBRIDO</span>
          </div>
        </motion.div>

        {/* MENSAGEM DE IMPACTO: NÃO É SÓ TREINAR. É EVOLUIR. */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-3 max-w-[340px] mx-auto"
        >
          <div className="text-xl sm:text-2xl font-black uppercase font-athletic tracking-wide leading-tight">
            <span className="text-white block">NÃO É SÓ TREINAR.</span>
            <span className="inline-block mt-0.5 text-2xl sm:text-3xl text-orange-glow font-black tracking-wider">
              É EVOLUIR.
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans px-2">
            “Treinamento, acompanhamento e preparação para quem decidiu buscar sua melhor versão.”
          </p>
        </motion.div>

        {/* CONHEÇA O TIME MW ↓ (NÃO é WhatsApp) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8"
        >
          <button
            id="hero-conheca-time-btn"
            type="button"
            onClick={onExploreClick}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14141a]/90 hover:bg-[#1a1a24] text-xs sm:text-sm font-bold tracking-wider uppercase text-white border border-[#ff5500]/40 hover:border-[#ff5500] shadow-[0_4px_20px_rgba(255,85,0,0.15)] active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span className="tracking-widest">CONHEÇA O TIME MW</span>
            <ChevronDown className="w-4 h-4 text-[#ff5500] group-hover:translate-y-0.5 transition-transform duration-200" />
          </button>
        </motion.div>
      </div>

      {/* Rodapé da tela 1: CONTINUE ↓ */}
      <motion.button
        type="button"
        onClick={onExploreClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="pt-4 flex flex-col items-center text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer group"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase font-display flex items-center gap-1">
          CONTINUE
          <ChevronDown className="w-3.5 h-3.5 text-[#ff5500]/70 animate-bounce" />
        </span>
      </motion.button>
    </section>
  );
};
