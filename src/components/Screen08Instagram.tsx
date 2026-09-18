import React from 'react';
import { ExternalLink } from 'lucide-react';
import { OFFICIAL_LINKS } from '../constants';

export const Screen08Instagram: React.FC = () => {
  return (
    <section
      id="social"
      aria-label="Instagram Oficial Marcos Willian"
      className="relative py-20 px-5 flex flex-col items-center justify-center min-h-[80vh]"
    >
      <div className="w-full max-w-[420px] mx-auto text-center">
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-bold tracking-[0.2em] text-[#ff5500] uppercase mb-4">
          <span>COMUNIDADE & BASTIDORES</span>
        </div>

        {/* Título & Subtítulo */}
        <h2 className="text-2xl sm:text-3xl font-black uppercase font-athletic tracking-wide text-white leading-tight mb-2">
          ACOMPANHE O <br />
          <span className="text-metallic">TIME MW</span>
        </h2>

        <p className="text-xs sm:text-sm text-neutral-400 font-sans mb-8">
          “Treinos, rotina, evolução e o dia a dia do time.”
        </p>

        {/* CARD PREMIUM SOCIAL */}
        <div className="glass-panel p-7 rounded-3xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.7)] flex flex-col items-center relative overflow-hidden group">
          {/* Subtle Instagram colored ambient glow inside card */}
          <div
            aria-hidden="true"
            className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-[#f09433]/15 via-[#dc2743]/15 to-[#bc1888]/15 rounded-full blur-2xl pointer-events-none"
          />

          {/* SÍMBOLO RECONHECÍVEL DO INSTAGRAM COM ACABAMENTO 3D, ALTO-RELEVO E BRILHO */}
          <div className="relative mb-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] p-[1.5px] shadow-[0_8px_25px_rgba(220,39,67,0.35),0_2px_4px_rgba(0,0,0,0.6)] flex items-center justify-center">
              <div className="w-full h-full rounded-[14px] bg-[#121217] flex items-center justify-center relative overflow-hidden">
                {/* 3D Sheen highlight */}
                <div
                  aria-hidden="true"
                  className="absolute -top-6 -left-6 w-16 h-16 bg-white/20 rounded-full blur-md pointer-events-none"
                />

                {/* Professional recognizable Instagram SVG vector */}
                <svg
                  className="w-10 h-10 fill-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div>
          </div>

          {/* User handle */}
          <div className="mb-6">
            <span className="text-base sm:text-lg font-bold font-mono tracking-wide text-white">
              {OFFICIAL_LINKS.INSTAGRAM_HANDLE}
            </span>
            <p className="text-[11px] text-neutral-400 mt-0.5 font-sans">
              Conteúdos diários de treino e rotina
            </p>
          </div>

          {/* Botão ACOMPANHAR NO INSTAGRAM */}
          <a
            id="instagram-follow-btn"
            href={OFFICIAL_LINKS.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acompanhar Marcos Willian no Instagram"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#1e1e28] to-[#252535] hover:from-[#282836] hover:to-[#323245] text-white text-xs sm:text-sm font-bold tracking-widest uppercase font-athletic border border-white/15 hover:border-white/30 shadow-[0_4px_16px_rgba(0,0,0,0.5)] active:scale-[0.98] transition-all duration-200"
          >
            <span>ACOMPANHAR NO INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
