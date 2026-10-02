import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import CodeTerminal from './CodeTerminal';

const ROLES = [
  'Full-Stack Developer',
  'Frontend Specialist (React/Vite)',
  'Node.js & Database Architect',
  'UI/UX Craftsman',
];

export default function Hero() {
  const currentRole = useTypewriter(ROLES);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center py-16 px-4 bg-slate-950 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content Floating Above Highlighted Image */}
        <div className="relative space-y-6 text-left py-8">
          
          {/* Highlighted Cutout Image Container */}
          <div className="absolute -inset-6 sm:-inset-10 z-0 flex items-center justify-center pointer-events-none">
            {/* Intense Radial Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-cyan-400/10 to-transparent rounded-full blur-2xl" />

            {/* Cyan Pedestal Base Glow */}
            <div className="absolute bottom-2 w-64 h-16 bg-cyan-400/40 rounded-[100%] blur-xl shadow-[0_0_50px_rgba(6,182,212,0.8)] animate-pulse" />

            {/* High-Visibility Cutout Image */}
            <img
              src="/isuruimg.png"
              alt="Isuru Background"
              className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(6,182,212,0.6)] opacity-85 scale-105 transition-transform duration-500"
            />

            {/* Dark Gradient Overlay to Protect Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
          </div>

          {/* Foreground Content Layer (z-10) */}
          <div className="relative z-10 space-y-6">
            <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/40 rounded-full text-cyan-400 text-sm font-semibold shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              Available for freelance & full-time positions
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Hi, I'm <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">Full-Stack Dev</span>
            </h1>

            <p className="text-xl sm:text-2xl font-mono text-gray-200 min-h-[40px] drop-shadow-md">
              {currentRole}
              <span className="animate-pulse text-cyan-400">|</span>
            </p>

            <p className="text-gray-300 text-base max-w-lg leading-relaxed bg-slate-950/40 p-3 rounded-lg backdrop-blur-sm border border-slate-800/50">
              Specializing in scalable React web apps, high-performance backends with Node.js, and sleek Tailwind CSS interfaces.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30 active:scale-95"
              >
                Explore Projects
              </a>
              <a
                href="#estimator"
                className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/80 text-white hover:border-cyan-400 transition backdrop-blur-md"
              >
                Project Scope Estimator
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Code Terminal */}
        <div className="relative z-10">
          <CodeTerminal />
        </div>

      </div>
    </section>
  );
}