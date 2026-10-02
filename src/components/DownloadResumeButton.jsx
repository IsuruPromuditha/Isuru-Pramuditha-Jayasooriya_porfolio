import React from 'react';
import { Download } from 'lucide-react';

export default function DownloadResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download="Isuru Pramuditha Jaysooriya_Resume.pdf"
      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20 active:scale-95"
    >
      <Download className="w-4 h-4" />
      <span>Download Resume</span>
    </a>
  );
}