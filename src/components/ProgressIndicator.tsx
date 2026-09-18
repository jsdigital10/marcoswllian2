import React, { useState, useEffect } from 'react';
import { PROGRESS_STEPS } from '../constants';

export const ProgressIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max((currentScroll / scrollHeight) * 100, 0), 100);
      setScrollProgress(progress);

      // Determine which section is currently active
      const sectionElements = PROGRESS_STEPS.map((step) =>
        document.getElementById(step.sectionId)
      );

      let foundIndex = 0;
      const viewportMid = window.innerHeight * 0.45;

      sectionElements.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportMid) {
            foundIndex = index;
          }
        }
      });

      setActiveStepIndex(foundIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentStep = PROGRESS_STEPS[activeStepIndex] || PROGRESS_STEPS[0];

  return (
    <header
      id="experience-progress-bar"
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#070709]/80 border-b border-white/[0.05] transition-all duration-300"
    >
      {/* Container limited to mobile width centered on desktop */}
      <div className="max-w-[440px] mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Active phase badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#ff5500]/15 border border-[#ff5500]/40 text-[10px] font-bold text-[#ff5500] font-mono">
            {currentStep.number}
          </span>
          <span className="text-[11px] font-semibold tracking-wider text-neutral-300 uppercase font-display">
            {currentStep.label}
          </span>
        </div>

        {/* Step dots interactive navigation */}
        <div className="flex items-center gap-1.5" role="navigation" aria-label="Progresso da experiência">
          {PROGRESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;

            return (
              <button
                key={step.number}
                id={`progress-dot-${step.sectionId}`}
                type="button"
                onClick={() => scrollToSection(step.sectionId)}
                aria-label={`Ir para ${step.number} ${step.label}`}
                className="group relative p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ff5500]"
              >
                <span
                  className={`block transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-4 h-1.5 bg-[#ff5500] shadow-[0_0_8px_rgba(255,85,0,0.8)]'
                      : isCompleted
                      ? 'w-1.5 h-1.5 bg-neutral-400 group-hover:bg-[#ff5500]'
                      : 'w-1.5 h-1.5 bg-neutral-700 group-hover:bg-neutral-500'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Real-time Orange Progress Line */}
      <div className="w-full h-[2px] bg-neutral-800/60 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#ff5500] via-[#ff6a00] to-[#ffaa00] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};
