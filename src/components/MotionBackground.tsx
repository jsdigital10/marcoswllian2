import React from 'react';

export const MotionBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Deep base vignette */}
      <div className="absolute inset-0 bg-[#070709]" />

      {/* Atmospheric ambient orange glow 1 (top center) */}
      <div
        className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[340px] h-[340px] md:w-[520px] md:h-[520px] rounded-full bg-gradient-to-b from-[#ff5500]/15 via-[#ff4500]/5 to-transparent blur-[90px] animate-ambient"
        style={{ animationDuration: '14s' }}
      />

      {/* Atmospheric ambient orange glow 2 (mid-section) */}
      <div
        className="absolute top-[38%] -right-[100px] w-[280px] h-[280px] rounded-full bg-[#ff5500]/8 blur-[100px] animate-ambient"
        style={{ animationDelay: '4s', animationDuration: '18s' }}
      />

      {/* Atmospheric ambient orange glow 3 (bottom CTA) */}
      <div
        className="absolute bottom-[8%] -left-[80px] w-[300px] h-[300px] rounded-full bg-[#ff5500]/10 blur-[110px] animate-ambient"
        style={{ animationDelay: '2s', animationDuration: '16s' }}
      />

      {/* Discreet athletic speed lines / geometry */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] stroke-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="athletic-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <line x1="0" y1="0" x2="60" y2="0" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#athletic-grid)" />
      </svg>

      {/* Subtle diagonal sheen line */}
      <div className="absolute top-0 right-0 w-[1px] h-[70vh] bg-gradient-to-b from-transparent via-[#ff5500]/15 to-transparent rotate-12 origin-top opacity-50" />
      <div className="absolute bottom-0 left-0 w-[1px] h-[70vh] bg-gradient-to-t from-transparent via-[#ff5500]/10 to-transparent -rotate-12 origin-bottom opacity-40" />
    </div>
  );
};
