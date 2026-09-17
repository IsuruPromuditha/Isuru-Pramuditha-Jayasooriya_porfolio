import React, { useState, useMemo } from 'react';

const SKILLS_DATA = [
  { name: 'React / Vite', category: 'Frontend', level: 95 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
  { name: 'JavaScript / TypeScript', category: 'Frontend', level: 88 },
  { name: 'Node.js / Express', category: 'Backend', level: 85 },
  { name: 'MySQL / PostgreSQL', category: 'Backend', level: 82 },
  { name: 'REST APIs', category: 'Backend', level: 90 },
  { name: 'Docker / Cloud', category: 'DevOps', level: 75 },
  { name: 'Git / GitHub', category: 'Tools', level: 92 },
];

const CATEGORIES = ['All', 'Frontend', 'Backend', 'DevOps', 'Tools'];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = useMemo(() => {
    if (activeTab === 'All') return SKILLS_DATA;
    return SKILLS_DATA.filter((skill) => skill.category === activeTab);
  }, [activeTab]);

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Technical Expertise</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                activeTab === cat
                  ? 'bg-cyan-500 text-slate-950'
                  : 'bg-slate-800 text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <div className="flex justify-between mb-2 text-sm">
                <span className="font-semibold text-white">{skill.name}</span>
                <span className="text-cyan-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-400 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}