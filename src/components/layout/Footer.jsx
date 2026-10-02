import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-4 bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {currentYear} <span className="text-slate-200 font-medium">Isuru Pramuditha</span>. Designed & Built with React & Tailwind CSS.
        </div>

        <div className="flex space-x-6">
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#estimator" className="hover:text-cyan-400 transition">
            Estimator
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}