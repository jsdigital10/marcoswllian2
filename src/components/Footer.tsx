import React from 'react';
import { OFFICIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      aria-label="Informações de Rodapé"
      className="relative z-10 py-12 px-5 border-t border-white/[0.06] bg-[#07070a]/90 text-center"
    >
      <div className="w-full max-w-[420px] mx-auto flex flex-col items-center space-y-4">
        {/* Identidade visual discreta e elegante */}
        <div className="w-12 h-12 rounded-full p-1 bg-white/[0.03] border border-white/10 flex items-center justify-center">
          <img
            src={OFFICIAL_LINKS.MAIN_LOGO}
            alt="Marcos Willian"
            className="w-full h-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            loading="lazy"
          />
        </div>

        {/* Textos oficiais de identificação */}
        <div className="space-y-1">
          <p className="text-sm font-black font-athletic uppercase tracking-widest text-white">
            MARCOS WILLIAN
          </p>
          <p className="text-[11px] font-semibold font-display tracking-widest text-neutral-400 uppercase">
            PERSONAL TRAINER • PREPARADOR FÍSICO
          </p>
          <p className="text-xs font-extrabold font-athletic tracking-[0.2em] text-[#ff5500] uppercase">
            TIME MW
          </p>
        </div>

        {/* Canal Social */}
        <div className="pt-2">
          <a
            href={OFFICIAL_LINKS.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            Instagram: <span className="text-neutral-200 hover:text-[#ff5500]">{OFFICIAL_LINKS.INSTAGRAM_HANDLE}</span>
          </a>
        </div>

        {/* Assinatura técnica limpa */}
        <p className="text-[10px] font-mono text-neutral-600 tracking-wider pt-4 border-t border-white/[0.04] w-full">
          TODOS OS DIREITOS RESERVADOS • TIME MW
        </p>
      </div>
    </footer>
  );
};
