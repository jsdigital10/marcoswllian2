import React from 'react';
import { ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

export const Screen04Marcos: React.FC = () => {
  return (
    <section
      id="marcos"
      aria-label="Apresentação de Marcos Willian"
      className="relative py-20 px-5 flex flex-col items-center justify-center min-h-[85vh]"
    >
      <div className="w-full max-w-[420px] mx-auto text-center">
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-bold tracking-[0.2em] text-[#ff5500] uppercase mb-4">
          <span>03</span>
          <span className="text-neutral-500">•</span>
          <span>LIDERANÇA TÉCNICA</span>
        </div>

        {/* Título */}
        <h2 className="text-2xl sm:text-3xl font-black uppercase font-athletic tracking-wide text-white leading-tight mb-8">
          QUEM ESTÁ <br />
          <span className="text-metallic">POR TRÁS DO TIME?</span>
        </h2>

        {/* COMPOSIÇÃO PREMIUM: Espaço preparado para futura foto PNG profissional de Marcos Willian */}
        <div className="relative mx-auto w-full max-w-[310px] aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] mb-6 flex flex-col items-center justify-end p-6 group">
          {/* Ambient orange light halo inside frame */}
          <div
            aria-hidden="true"
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#ff5500]/20 rounded-full blur-3xl pointer-events-none"
          />

          {/* Athletic graphic geometry representing preparation space */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-40">
            {/* Elegant stylized athletic silhouette badge */}
            <div className="w-24 h-24 rounded-full border border-[#ff5500]/30 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent mb-3 shadow-[0_0_20px_rgba(255,85,0,0.15)]">
              <UserCheck className="w-12 h-12 text-neutral-300 stroke-[1.2]" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#ff5500] uppercase font-bold">
              <Sparkles className="w-3 h-3" />
              <span>DIREÇÃO TÉCNICA</span>
            </div>
          </div>

          {/* Subtle gradient vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a162e] via-[#0a162e]/70 to-transparent" />

          {/* Identificação dentro da moldura */}
          <div className="relative z-10 w-full text-center space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              <ShieldCheck className="w-3 h-3 text-[#ff5500]" />
              PERFIL PROFISSIONAL
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase font-athletic tracking-wide text-white">
              MARCOS WILLIAN
            </h3>
            <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#ff6a00] uppercase font-display leading-relaxed">
              PERSONAL TRAINER • PREPARADOR FÍSICO • PERFORMANCE ESPORTIVA • TREINO HÍBRIDO
            </p>
          </div>
        </div>

        {/* Texto oficial rigorosamente sem invenções de diplomas ou estatísticas */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
            “Treinamento com direção, acompanhamento e propósito para transformar objetivos em evolução.”
          </p>
        </div>
      </div>
    </section>
  );
};
