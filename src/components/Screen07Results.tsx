import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Shield, Activity, Target } from 'lucide-react';
import { REAL_RESULT_SLIDES } from '../constants';

export const Screen07Results: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? REAL_RESULT_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === REAL_RESULT_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = REAL_RESULT_SLIDES[currentSlideIndex];

  return (
    <section
      id="evolucao"
      aria-label="Evolução e Resultados"
      className="relative py-20 px-5 flex flex-col items-center justify-center min-h-[85vh]"
    >
      <div className="w-full max-w-[420px] mx-auto text-center">
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-bold tracking-[0.2em] text-[#ff5500] uppercase mb-3">
          <span>04</span>
          <span className="text-neutral-500">•</span>
          <span>COMPROMISSO TÉCNICO</span>
        </div>

        {/* Títulos */}
        <h2 className="text-2xl sm:text-3xl font-black uppercase font-athletic tracking-wide text-white leading-tight mb-2">
          EVOLUÇÃO <br />
          <span className="text-metallic">TIME MW</span>
        </h2>

        <div className="flex items-center justify-center gap-2 text-[11px] font-mono tracking-wider text-neutral-400 uppercase mb-8">
          <span>RESULTADOS REAIS</span>
          <span className="text-[#ff5500]">•</span>
          <span>PROCESSOS REAIS</span>
          <span className="text-[#ff5500]">•</span>
          <span>EVOLUÇÃO REAL</span>
        </div>

        {/* CARROSSEL PREMIUM INTERATIVO */}
        <div className="relative glass-panel rounded-2xl p-6 border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6)] overflow-hidden">
          {/* Subtle upper badge */}
          <div className="flex items-center justify-between mb-4 border-b border-white/[0.06] pb-3">
            <span className="text-[10px] font-mono tracking-widest text-[#ff6a00] font-bold uppercase">
              {activeSlide.tag}
            </span>
            <span className="text-[10px] font-mono text-neutral-500">
              {currentSlideIndex + 1} / {REAL_RESULT_SLIDES.length}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 text-left min-h-[160px] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold font-athletic uppercase tracking-wider text-white">
                  {activeSlide.title}
                </h3>
                <p className="text-xs font-bold text-[#ff5500] font-display uppercase tracking-wider mt-0.5">
                  {activeSlide.highlight}
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mt-3">
                  “{activeSlide.description}”
                </p>
              </div>

              {/* Slot preparado para futuras fotos / dados de evolução reais */}
              <div className="pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                <span className="flex items-center gap-1">
                  {currentSlideIndex === 0 && <Target className="w-3 h-3 text-[#ff5500]" />}
                  {currentSlideIndex === 1 && <Activity className="w-3 h-3 text-[#ff5500]" />}
                  {currentSlideIndex === 2 && <Shield className="w-3 h-3 text-[#ff5500]" />}
                  {activeSlide.phase}
                </span>
                <span className="text-[#ff5500]/80">MÉTODO MW</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 pt-3 border-t border-white/[0.06]">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {REAL_RESULT_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlideIndex
                      ? 'w-6 bg-[#ff5500]'
                      : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                id="carousel-prev-btn"
                type="button"
                onClick={prevSlide}
                aria-label="Pilar anterior"
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                id="carousel-next-btn"
                type="button"
                onClick={nextSlide}
                aria-label="Próximo pilar"
                className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
