/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ObjectiveOption } from './types';
import { MotionBackground } from './components/MotionBackground';
import { ProgressIndicator } from './components/ProgressIndicator';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Screen01Hero } from './components/Screen01Hero';
import { Screen02Objective } from './components/Screen02Objective';
import { Screen03Method } from './components/Screen03Method';
import { Screen04Marcos } from './components/Screen04Marcos';
import { Screen05Impact } from './components/Screen05Impact';
import { Screen06RetentionWords } from './components/Screen06RetentionWords';
import { Screen07Results } from './components/Screen07Results';
import { Screen08Instagram } from './components/Screen08Instagram';
import { Screen09FinalCTA } from './components/Screen09FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedObjective, setSelectedObjective] = useState<ObjectiveOption | null>(null);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050507] text-white flex justify-center">
      {/* Dynamic atmospheric motion background */}
      <MotionBackground />

      {/* Floating progress bar */}
      <ProgressIndicator />

      {/* Compact 3D floating WhatsApp button (exclusive to bottom right) */}
      <FloatingWhatsApp />

      {/* Main vertical mini-app container: mobile-first (390px - 440px), centered on desktop */}
      <main className="w-full max-w-[440px] min-h-screen relative z-10 bg-[#070709] border-x border-white/[0.04] shadow-[0_0_80px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden">
        {/* TELA 01 — ABERTURA CINEMATOGRÁFICA */}
        <Screen01Hero onExploreClick={() => scrollToId('objetivo')} />

        {/* Divider accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff5500]/20 to-transparent my-2" />

        {/* TELA 02 — INTERAÇÃO COM O VISITANTE (QUAL É O SEU PRÓXIMO NÍVEL?) */}
        <Screen02Objective
          selectedObjective={selectedObjective}
          onSelectObjective={setSelectedObjective}
          onContinue={() => scrollToId('metodo')}
        />

        {/* Divider accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent my-2" />

        {/* TELA 03 — POSICIONAMENTO (MÉTODO & PILARES) */}
        <Screen03Method />

        {/* Divider accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff5500]/20 to-transparent my-2" />

        {/* TELA 04 — MARCOS WILLIAN (QUEM ESTÁ POR TRÁS DO TIME?) */}
        <Screen04Marcos />

        {/* Divider accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff5500]/30 to-transparent my-2" />

        {/* TELA 05 — MOMENTO DE IMPACTO (VENHA PRO TIME MW) */}
        <Screen05Impact onDiscoverClick={() => scrollToId('retencao')} />

        {/* Divider accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent my-2" />

        {/* TELA 06 — EXPERIÊNCIA DE RETENÇÃO (SCROLL CINEMATOGRÁFICO DE PALAVRAS) */}
        <Screen06RetentionWords />

        {/* Divider accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff5500]/20 to-transparent my-2" />

        {/* TELA 07 — RESULTADOS (EVOLUÇÃO TIME MW) */}
        <Screen07Results />

        {/* Divider accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent my-2" />

        {/* TELA 08 — EXPERIÊNCIA SOCIAL (ACOMPANHE O TIME MW - INSTAGRAM) */}
        <Screen08Instagram />

        {/* Divider accent */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff5500]/30 to-transparent my-2" />

        {/* TELA 09 — ÚNICO CTA COMERCIAL FORTE (AGORA É COM VOCÊ) */}
        <Screen09FinalCTA selectedObjective={selectedObjective} />

        {/* RODAPÉ */}
        <Footer />
      </main>
    </div>
  );
}
