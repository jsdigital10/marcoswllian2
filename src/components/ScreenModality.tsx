import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Timer, Dumbbell, MapPin, Zap, Activity, Check, ChevronDown } from 'lucide-react';
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
  onContinue,
}) => {
  const getIcon = (name: ModalityOption['iconName'], isSelected: boolean) => {
    const iconClass = `w-7 h-7 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(255,85,0,0.5)] ${
      isSelected ? 'text-[#ff5500] scale-110' : 'text-neutral-300 group-hover:text-white'
    }`;

    switch (name) {
      case 'timer':
        return <Timer className={iconClass} />;
      case 'dumbbell':
        return <Dumbbell className={iconClass} />;
      case 'mapPin':
        return <MapPin className={iconClass} />;
      case 'zap':
        return <Zap className={iconClass} />;
      case 'activity':
        return <Activity className={iconClass} />;
      default:
        return <Zap className={iconClass} />;
    }
  };

  return (
    <section
      id="modalidade"
      aria-label="Escolha a Função do Personal"
      className="relative py-16 px-5 flex flex-col items-center justify-center min-h-[90vh]"
    >
      <div className="w-full max-w-[420px] mx-auto text-center">
        {/* Sub-badge de contexto */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-bold tracking-[0.2em] text-[#ff5500] uppercase mb-4">
          <span>02</span>
          <span className="text-neutral-500">•</span>
          <span>FUNÇÃO DO PERSONAL</span>
        </div>

        {/* Título & Subtítulo */}
        <h2 className="text-2xl sm:text-3xl font-black uppercase font-athletic tracking-wide text-white leading-tight mb-2">
          COMO VOCÊ <br />
          <span className="text-metallic">QUER TREINAR?</span>
        </h2>

        <p className="text-xs sm:text-sm text-neutral-400 font-sans mb-8">
          “Escolha a modalidade desejada para o seu direcionamento exclusivo.”
        </p>

        {/* 3 CARDS EM DESTAQUE 3D */}
        <div className="grid grid-cols-1 gap-4 mb-8" role="radiogroup" aria-label="Modalidades de treino com Marcos Willian">
          {MODALITIES.map((item) => {
            const isSelected = selectedModality?.id === item.id;
            const whatsappUrl = createWhatsAppUrl(item.whatsappMessage);

            return (
              <div
                key={item.id}
                id={`modality-card-${item.id}`}
                className={`group relative text-left w-full p-5 rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                  isSelected
                    ? 'glass-panel-active -translate-y-1 shadow-[0_15px_30px_rgba(255,85,0,0.25)]'
                    : 'glass-panel hover:border-white/20 hover:-translate-y-0.5'
                }`}
                onClick={() => onSelectModality(item)}
              >
                {/* Side highlight indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="active-modality-indicator"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#ff8800] to-[#ff4400]"
                  />
                )}

                {/* Top ambient glow inside selected card */}
                {isSelected && (
                  <div
                    aria-hidden="true"
                    className="absolute -top-10 right-0 w-36 h-36 bg-[#ff5500]/15 rounded-full blur-2xl pointer-events-none"
                  />
                )}

                <div className="flex items-start gap-4">
                  {/* ÍCONE COM DESTACADO ACABAMENTO 3D */}
                  <div className="relative shrink-0">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-br from-[#2a3a60] via-[#1a2848] to-[#0e1930] border-2 border-[#ff5500] shadow-[0_8px_25px_rgba(255,85,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.5)]'
                          : 'bg-gradient-to-br from-[#1a2848] to-[#0c162c] border border-white/15 shadow-[0_6px_18px_rgba(0,0,0,0.5),inset_0_2px_3px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.4)] group-hover:border-white/30'
                      }`}
                    >
                      {/* 3D Sheen highlight diagonal */}
                      <span
                        aria-hidden="true"
                        className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent pointer-events-none"
                      />

                      {/* Subtle ambient light dot */}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#ff5500]/30 rounded-full blur-sm pointer-events-none"
                      />

                      {getIcon(item.iconName, isSelected)}
                    </div>

                    {/* Small 3D reflection base */}
                    <div
                      aria-hidden="true"
                      className="w-10 h-1 mx-auto mt-1 rounded-full bg-black/40 blur-[2px]"
                    />
                  </div>

                  {/* Informações da Modalidade */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono tracking-widest text-[#ff6a00] font-bold uppercase">
                        {item.tag}
                      </span>
                      {isSelected && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold font-athletic uppercase text-[#ff5500] bg-[#ff5500]/15 px-2 py-0.5 rounded-full border border-[#ff5500]/30">
                          <Check className="w-3 h-3" />
                          ESCOLHIDO
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-black tracking-wide uppercase font-athletic text-white">
                      {item.title}
                    </h3>

                    <p className="text-xs text-neutral-300 font-sans mt-1 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Botão de Ação Direta no WhatsApp */}
                    <div className="pt-3.5">
                      <a
                        id={`whatsapp-modality-btn-${item.id}`}
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Falar no WhatsApp sobre ${item.title}`}
                        className="inline-flex items-center justify-center gap-2 py-2 px-3.5 rounded-xl bg-white/[0.06] hover:bg-[#ff5500] border border-white/15 hover:border-[#ff5500] text-neutral-200 hover:text-white text-xs font-bold uppercase font-athletic tracking-wider transition-all duration-200 shadow-sm active:scale-95 group/btn"
                      >
                        {/* WhatsApp Icon */}
                        <svg
                          className="w-3.5 h-3.5 fill-current text-[#25d366] group-hover/btn:text-white transition-colors"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
                        </svg>
                        <span>Falar sobre {item.title}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FEEDBACK DINÂMICO & CONTINUAR APÓS SELEÇÃO */}
        <AnimatePresence>
          {selectedModality && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-4 pt-2"
            >
              <div className="p-3.5 rounded-xl bg-[#0f2042]/80 border border-[#ff5500]/30 backdrop-blur-sm">
                <p className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider font-athletic">
                  “Modalidade selecionada: {selectedModality.title}”
                </p>
                <p className="text-xs text-[#ff6a00] font-sans mt-0.5">
                  “Conheça o método antes de iniciar ou fale agora pelo botão acima.”
                </p>
              </div>

              {/* Botão de continuidade no biosite */}
              <button
                id="modality-continue-btn"
                type="button"
                onClick={onContinue}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ff6600] hover:from-[#ff6600] hover:to-[#ff4400] text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase font-athletic shadow-[0_4px_20px_rgba(255,85,0,0.3)] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>CONHECER O MÉTODO</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
