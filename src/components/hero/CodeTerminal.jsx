import React, { useState } from 'react';

const CODE_SNIPPETS = {
  javascript: `// Full-Stack Developer Profile
const developer = {
  name: 'Isuru',
  role: 'Full-Stack Software Engineer',
  stack: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
  status: 'Building web applications'
};`,
  react: `export function TechStack() {
  return (
    <div className="p-4 bg-slate-900 text-cyan-400 font-mono">
      <h3>Frontend: React + Vite + Tailwind</h3>
      <h3>Backend: Node.js + Express + MySQL</h3>
    </div>
  );
}`,
};

export default function CodeTerminal() {
  const [activeTab, setActiveTab] = useState('javascript');

  return (
    <div className="w-full rounded-xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('javascript')}
            className={`px-2 py-1 rounded text-xs transition ${
              activeTab === 'javascript' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            developer.js
          </button>
          <button
            onClick={() => setActiveTab('react')}
            className={`px-2 py-1 rounded text-xs transition ${
              activeTab === 'react' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            TechStack.jsx
          </button>
        </div>
      </div>

      <div className="p-4 overflow-x-auto bg-slate-950/80 text-gray-300 min-h-[220px]">
        <pre>
          <code>{CODE_SNIPPETS[activeTab]}</code>
        </pre>
      </div>
    </div>
  );
}