import React from 'react';

export const MotionBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Deep dark blue base vignette */}
      <div className="absolute inset-0 bg-[#081326]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#11244d] via-[#09152e] to-[#060e20] opacity-95" />

      {/* Atmospheric ambient orange glow 1 (top center) - Highlights brand opening */}
      <div
        className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[340px] h-[340px] md:w-[520px] md:h-[520px] rounded-full bg-gradient-to-b from-[#ff5500]/22 via-[#ff4500]/8 to-transparent blur-[90px] animate-ambient"
        style={{ animationDuration: '14s' }}
      />

      {/* Atmospheric ambient blue depth (mid-left) */}
      <div
        className="absolute top-[22%] -left-[100px] w-[320px] h-[320px] rounded-full bg-[#1b3d75]/30 blur-[110px]"
      />

      {/* Atmospheric ambient orange glow 2 (mid-section) - Highlights method & Time MW */}
      <div
        className="absolute top-[42%] -right-[100px] w-[300px] h-[300px] rounded-full bg-[#ff5500]/14 blur-[100px] animate-ambient"
        style={{ animationDelay: '4s', animationDuration: '18s' }}
      />

      {/* Atmospheric ambient orange glow 3 (bottom CTA) - Highlights conversion */}
      <div
        className="absolute bottom-[8%] -left-[80px] w-[320px] h-[320px] rounded-full bg-[#ff5500]/18 blur-[110px] animate-ambient"
        style={{ animationDelay: '2s', animationDuration: '16s' }}
      />

      {/* Atmospheric ambient orange glow 4 (bottom right subtle pulse) */}
      <div
        className="absolute bottom-[2%] -right-[60px] w-[260px] h-[260px] rounded-full bg-[#ff6a00]/12 blur-[90px]"
      />

      {/* Discreet athletic speed lines / geometry with subtle blue-orange contrast */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.045] stroke-white"
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
            <line x1="0" y1="0" x2="0" y2="60" stroke="#ff5500" strokeWidth="0.6" strokeDasharray="3 3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#athletic-grid)" />
      </svg>

      {/* Orange diagonal sheen lines */}
      <div className="absolute top-0 right-0 w-[1px] h-[70vh] bg-gradient-to-b from-transparent via-[#ff5500]/30 to-transparent rotate-12 origin-top opacity-60" />
      <div className="absolute bottom-0 left-0 w-[1px] h-[70vh] bg-gradient-to-t from-transparent via-[#ff5500]/25 to-transparent -rotate-12 origin-bottom opacity-50" />
    </div>
  );
};
