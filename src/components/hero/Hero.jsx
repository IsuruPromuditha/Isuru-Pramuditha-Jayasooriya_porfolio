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
    <section className="min-h-[85vh] flex flex-col justify-center items-center py-16 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
            Available for freelance & full-time positions
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Hi, I'm <span className="text-cyan-400">Full-Stack Dev</span>
          </h1>
          <p className="text-xl sm:text-2xl font-mono text-gray-300 min-h-[40px]">
            {currentRole}
            <span className="animate-pulse text-cyan-400">|</span>
          </p>
          <p className="text-gray-400 text-base max-w-lg leading-relaxed">
            Specializing in scalable React web apps, high-performance backends with Node.js, and sleek Tailwind CSS interfaces.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
            >
              Explore Projects
            </a>
            <a
              href="#estimator"
              className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/60 text-white hover:border-cyan-400 transition"
            >
              Project Scope Estimator
            </a>
          </div>
        </div>

        <CodeTerminal />
      </div>
    </section>
  );
}