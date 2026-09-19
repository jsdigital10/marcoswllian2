import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl, getWhatsAppCtaMessage } from '../constants';
import { ObjectiveOption, ModalityOption } from '../types';

interface Screen09FinalCTAProps {
  selectedObjective: ObjectiveOption | null;
  selectedModality: ModalityOption | null;
}

export const Screen09FinalCTA: React.FC<Screen09FinalCTAProps> = ({
  selectedObjective,
  selectedModality,
}) => {
  const whatsappUrl = createWhatsAppUrl(
    getWhatsAppCtaMessage(selectedObjective?.title, selectedModality?.title)
  );

  return (
    <section
      id="comecar"
      aria-label="Decisão e Inscrição Time MW"
      className="relative py-24 px-5 min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Ambient glowing spotlight for decisive moment */}
      <div
        aria-hidden="true"
        className="absolute w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full bg-gradient-to-t from-[#ff5500]/25 via-[#ff4400]/10 to-transparent blur-[110px] pointer-events-none -bottom-10"
      />

      <div className="relative z-10 w-full max-w-[420px] mx-auto flex flex-col items-center">
        {/* Começar pequeno */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-neutral-400 uppercase font-display mb-3"
        >
          VOCÊ CHEGOU ATÉ AQUI.
        </motion.p>

        {/* Revelar: AGORA É COM VOCÊ. */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-athletic tracking-wide text-white leading-tight mb-4"
        >
          AGORA É <br />
          <span className="text-metallic">COM </span>
          <span className="text-orange-glow">VOCÊ.</span>
        </motion.h2>

        {/* Texto persuasivo oficial */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-6 max-w-[340px]"
        >
          “Se você decidiu levar sua evolução a sério, vamos conversar sobre o seu treino no Time MW.”
        </motion.p>

        {/* RECUPERAÇÃO DAS ESCOLHAS DO VISITANTE (OBJETIVO & MODALIDADE) */}
        {(selectedObjective || selectedModality) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full mb-8 p-4 rounded-2xl bg-[#0e1e3d]/90 border border-[#ff5500]/40 shadow-[0_0_20px_rgba(255,85,0,0.2)] text-left space-y-3"
          >
            {selectedObjective && (
              <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-2.5">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block">
                    SEU OBJETIVO:
                  </span>
                  <span className="text-sm font-extrabold uppercase font-athletic text-[#ff6a00] tracking-wide">
                    “{selectedObjective.title}”
                  </span>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[#ff5500] shrink-0" />
              </div>
            )}

            {selectedModality && (
              <div className="flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block">
                    MODALIDADE ESCOLHIDA:
                  </span>
                  <span className="text-sm font-extrabold uppercase font-athletic text-white tracking-wide">
                    {selectedModality.title} • {selectedModality.tag}
                  </span>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[#25d366] shrink-0" />
              </div>
            )}
          </motion.div>
        )}

        {/* BOTÃO COMERCIAL PRINCIPAL ÚNICO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full space-y-3"
        >
          <a
            id="main-cta-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero fazer parte do Time MW via WhatsApp"
            className="group relative w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#ff5500] via-[#ff6a00] to-[#ff4500] hover:from-[#ff6a00] hover:to-[#ff3300] text-white text-base sm:text-lg font-black tracking-wider uppercase font-athletic shadow-[0_8px_30px_rgba(255,85,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden border border-white/20"
          >
            {/* 3D Highlight Sheen */}
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent pointer-events-none"
            />

            {/* Símbolo reconhecível do WhatsApp em acabamento 3D */}
            <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
              <svg
                className="w-4 h-4 fill-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
              </svg>
            </div>

            <span className="text-center font-extrabold tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
              QUERO FAZER PARTE DO TIME MW
            </span>
          </a>

          {/* Subtítulo oficial */}
          <p className="text-xs text-neutral-400 font-sans tracking-wide">
            Falar diretamente com Marcos Willian
          </p>
        </motion.div>
      </div>
    </section>
  );
};
