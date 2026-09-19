import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants';

interface Screen05ImpactProps {
  onDiscoverClick: () => void;
}

export const Screen05Impact: React.FC<Screen05ImpactProps> = ({ onDiscoverClick }) => {
  return (
    <section
      id="timemw"
      aria-label="Momento de Impacto Time MW"
      className="relative py-24 px-5 min-h-screen flex flex-col items-center justify-center bg-[#071024] overflow-hidden"
    >
      {/* Deep atmospheric backdrops */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#13264d] via-[#09152e] to-[#050d1e] opacity-95"
      />

      {/* Atmospheric center orange glow behind the big Time MW logo */}
      <div
        aria-hidden="true"
        className="absolute w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-[#ff5500]/25 blur-[90px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-[420px] mx-auto text-center flex flex-col items-center">
        {/* Frase 1: VOCÊ NÃO PRECISA FAZER ISSO SOZINHO. */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-sm sm:text-base font-bold tracking-[0.2em] text-neutral-400 uppercase font-display">
            VOCÊ NÃO PRECISA
          </p>
          <h2 className="text-2xl sm:text-3xl font-black uppercase font-athletic tracking-wider text-metallic">
            FAZER ISSO SOZINHO.
          </h2>
        </motion.div>

        {/* Pausa visual & "VENHA PRO" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#ff6a00] font-display">
            VENHA PRO
          </span>
        </motion.div>

        {/* LOGO TIME MW — GRANDE, PRESERVANDO PROPORÇÃO E TRANSPARÊNCIA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center my-4"
        >
          {/* Layered glows for 3D depth */}
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-full bg-gradient-to-b from-[#ff5500]/30 to-transparent blur-3xl pointer-events-none"
          />

          <img
            id="time-mw-official-logo"
            src={OFFICIAL_LINKS.TIME_MW_LOGO}
            alt="Logo Oficial Time MW"
            className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(255,85,0,0.35)] relative z-10"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Texto descritivo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 mb-8 space-y-1"
        >
          <p className="text-base sm:text-lg font-bold font-athletic uppercase tracking-wider text-white">
            MAIS QUE TREINAR.
          </p>
          <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-[320px] mx-auto">
            É fazer parte de um time que busca evolução.
          </p>
        </motion.div>

        {/* Botão: DESCUBRA O TIME ↓ (NÃO abre WhatsApp) */}
        <motion.button
          id="descubra-o-time-btn"
          type="button"
          onClick={onDiscoverClick}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#17171e] to-[#20202c] hover:from-[#22222e] hover:to-[#2b2b3b] text-white text-xs sm:text-sm font-bold tracking-widest uppercase font-athletic border border-[#ff5500]/50 shadow-[0_4px_25px_rgba(255,85,0,0.2)] active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <span>DESCUBRA O TIME</span>
          <ChevronDown className="w-4 h-4 text-[#ff5500] group-hover:translate-y-0.5 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
};
