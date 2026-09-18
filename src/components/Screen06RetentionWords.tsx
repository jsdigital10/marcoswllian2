import React from 'react';
import { motion } from 'motion/react';
import { RETENTION_WORDS } from '../constants';

export const Screen06RetentionWords: React.FC = () => {
  return (
    <section
      id="retencao"
      aria-label="Pilares de Disciplina e Evolução"
      className="relative py-24 px-5 flex flex-col items-center justify-center min-h-screen overflow-hidden"
    >
      <div className="w-full max-w-[420px] mx-auto text-center">
        {/* Subtle header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-12">
          <span>O CÓDIGO DO TIME</span>
        </div>

        {/* Sequential cinematic words */}
        <div className="space-y-6 sm:space-y-8 my-4">
          {RETENTION_WORDS.map((item, index) => {
            return (
              <motion.div
                key={item.word}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-1"
              >
                {item.isAccent ? (
                  <span className="block text-4xl sm:text-5xl md:text-6xl font-black font-athletic tracking-wider uppercase text-orange-glow">
                    {item.word}
                  </span>
                ) : (
                  <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold font-athletic tracking-wide uppercase text-neutral-400 hover:text-white transition-colors duration-300">
                    {item.word}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mensagem final da seção de retenção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 max-w-[340px] mx-auto p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm"
        >
          <p className="text-xs sm:text-sm font-medium text-neutral-300 italic font-sans">
            “Quando existe direção, cada treino passa a ter um propósito.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};
