import React from 'react';
import { motion } from 'motion/react';
import { Timer, Dumbbell, MapPin, Globe, Zap, ArrowUpRight, Shield } from 'lucide-react';
import { MODALITIES, createWhatsAppUrl } from '../constants';
import { ModalityOption } from '../types';

interface ScreenModalityProps {
  selectedModality: ModalityOption | null;
  onSelectModality: (mod: ModalityOption) => void;
  onContinue: () => void;
}

export const ScreenModality: React.FC<ScreenModalityProps> = ({
  selectedModality,
  onSelectModality,
}) => {
  // Ícones em BRANCO com acabamento nítido e relevo 3D
  const getIcon = (name: ModalityOption['iconName']) => {
    const iconClass =
      'w-6 h-6 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] transition-transform duration-300 group-hover:scale-110';

    switch (name) {
      case 'timer':
        return <Timer className={iconClass} strokeWidth={2.4} />;
      case 'dumbbell':
        return <Dumbbell className={iconClass} strokeWidth={2.4} />;
      case 'mapPin':
        return <MapPin className={iconClass} strokeWidth={2.4} />;
      case 'globe':
        return <Globe className={iconClass} strokeWidth={2.4} />;
      case 'zap':
        return <Zap className={iconClass} strokeWidth={2.4} />;
      default:
        return <Zap className={iconClass} strokeWidth={2.4} />;
    }
  };

  return (
    <section
      id="modalidade"
      aria-label="O que você está buscando?"
      className="relative py-16 px-4 sm:px-5 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Decorativo com Brilho Esportivo Laranja e Azul Noturno */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-20 w-72 h-72 bg-[#ff5500]/10 rounded-full blur-[90px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#1a3365]/30 rounded-full blur-[90px] pointer-events-none"
      />

      <div className="w-full max-w-[430px] mx-auto text-center relative z-10">
        {/* Badge de Destaque Superior em Branco e Laranja */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent border border-white/15 shadow-[0_4px_15px_rgba(0,0,0,0.5)] mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff5500] shadow-[0_0_8px_#ff5500]" />
          <span className="text-[11px] font-extrabold tracking-[0.22em] text-white uppercase font-athletic">
            ATENDIMENTO EXCLUSIVO
          </span>
          <span className="text-neutral-500">•</span>
          <span className="text-[10px] font-mono tracking-widest text-[#ff6a00] font-bold">
            TIME MW
          </span>
        </motion.div>

        {/* Título de Alto Impacto em Branco Metálico e Laranja */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl sm:text-4xl font-black uppercase font-athletic tracking-tight text-white leading-none mb-3"
        >
          O QUE VOCÊ <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7700] via-[#ff5500] to-[#ff3300] drop-shadow-[0_2px_12px_rgba(255,85,0,0.4)]">
            ESTÁ BUSCANDO?
          </span>
        </motion.h2>

        {/* Subtítulo Direto com Linhas de Contraste Branco e Laranja */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#ff5500]/60" />
          <p className="text-xs sm:text-sm font-bold tracking-wider text-neutral-200 uppercase font-display">
            TOQUE NA MODALIDADE PARA INICIAR NO WHATSAPP
          </p>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#ff5500]/60" />
        </motion.div>

        {/* 5 BOTÕES PROFISSIONAIS COM CORES BRANCO, LARANJA E LOGO DO WHATSAPP 3D FIXA */}
        <div
          className="flex flex-col gap-3.5 w-full"
          role="list"
          aria-label="Botões de atendimento direto via WhatsApp para cada modalidade"
        >
          {MODALITIES.map((item, index) => {
            const isSelected = selectedModality?.id === item.id;
            const whatsappUrl = createWhatsAppUrl(item.whatsappMessage);

            return (
              <motion.a
                key={item.id}
                id={`whatsapp-btn-${item.id}`}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onSelectModality(item)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                aria-label={`${item.title} - ${item.actionText} no WhatsApp com Marcos Willian`}
                className={`group relative w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl transition-all duration-250 cursor-pointer overflow-hidden text-left border ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#14213d] via-[#101b33] to-[#0b1324] border-[#ff5500] shadow-[0_10px_30px_rgba(255,85,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] scale-[1.01]'
                    : 'bg-gradient-to-r from-[#0c162b] via-[#091122] to-[#070d1a] border-white/15 hover:border-[#ff5500]/80 shadow-[0_6px_22px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_28px_rgba(255,85,0,0.25)] hover:-translate-y-0.5 active:scale-[0.98]'
                }`}
              >
                {/* Linha de acabamento chanfrado metálico superior (Reflexo de luz) */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                />

                {/* Brilho laranja sutil na lateral ao passar o mouse */}
                <span
                  aria-hidden="true"
                  className="absolute -left-10 top-0 bottom-0 w-20 bg-gradient-to-r from-[#ff5500]/20 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />

                {/* LADO ESQUERDO: ÍCONE 3D BRANCO + TEXTOS EM BRANCO E LARANJA */}
                <div className="flex items-center gap-3.5 min-w-0 pr-2">
                  {/* CAIXA DO ÍCONE 3D METÁLICA (SEM VERDE, ÍCONE BRANCO) */}
                  <div className="relative shrink-0">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#1a2947] via-[#0f1a30] to-[#080e1c] border border-white/20 flex items-center justify-center shadow-[0_6px_16px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.8)] group-hover:border-[#ff5500]/70 group-hover:shadow-[0_6px_20px_rgba(255,85,0,0.3)] transition-all duration-300">
                      {/* Reflexo de vidro 3D na parte superior do ícone */}
                      <span
                        aria-hidden="true"
                        className="absolute top-0.5 left-1 right-1 h-5 rounded-t-xl bg-gradient-to-b from-white/30 to-transparent pointer-events-none"
                      />

                      {/* O ÍCONE EM BRANCO PURO */}
                      {getIcon(item.iconName)}
                    </div>
                  </div>

                  {/* IDENTIFICAÇÃO: TÍTULO EM BRANCO PURO & AÇÃO EM LARANJA ESPORTIVO */}
                  <div className="min-w-0">
                    {/* Título Principal em Branco com visual atlético */}
                    <span className="block text-lg sm:text-xl font-black uppercase font-athletic tracking-wide text-white leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      {item.title}
                    </span>

                    {/* Ação e Chamada em Laranja Vibrante (sem a palavra DIRETO) */}
                    <span className="block text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-[#ff5500] group-hover:text-[#ff7700] font-athletic transition-colors mt-0.5">
                      {item.actionText}
                    </span>
                  </div>
                </div>

                {/* LADO DIREITO: LOGO DO WHATSAPP 3D EM ALTO RELEVO (SEM PISCAR) */}
                <div className="relative flex items-center gap-2.5 shrink-0 pl-1">
                  {/* BOTÃO DO WHATSAPP 3D EM ALTO RELEVO FÍSICO */}
                  <div className="relative">
                    {/* Sombra de profundidade tátil */}
                    <div
                      aria-hidden="true"
                      className="absolute -inset-1 rounded-full bg-black/50 blur-[3px]"
                    />

                    {/* Botão esférico 3D com anel metálico e cúpula de vidro */}
                    <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-[#2bf376] via-[#20c85c] to-[#0f8e43] border-2 border-white/90 flex items-center justify-center shadow-[0_6px_18px_rgba(32,200,92,0.45),inset_0_3px_5px_rgba(255,255,255,0.85),inset_0_-3px_5px_rgba(0,0,0,0.55)] group-hover:scale-105 transition-transform duration-200">
                      {/* Cúpula de reflexo brilhante especular superior (estilo gema/vidro 3D) */}
                      <span
                        aria-hidden="true"
                        className="absolute top-0.5 left-1.5 right-1.5 h-4 rounded-t-full bg-gradient-to-b from-white/70 to-transparent pointer-events-none"
                      />

                      {/* Símbolo do WhatsApp nítido com sombra 3D em alto contraste */}
                      <svg
                        className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)] relative z-20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Seta discreta em Branco/Laranja para reforçar a ação */}
                  <div className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-[#ff5500] group-hover:border-[#ff5500] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Garantia / Rodapé sutil de segurança em Branco e Laranja */}
        <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-center gap-2 text-neutral-300 text-[11px] font-medium font-sans">
          <Shield className="w-3.5 h-3.5 text-[#ff5500]" />
          <span>Atendimento 100% humanizado e direto com Marcos Willian</span>
        </div>
      </div>
    </section>
  );
};
