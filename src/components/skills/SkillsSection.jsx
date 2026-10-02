import React, { useState, useMemo } from 'react';
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiExpress,
  SiDocker,
  SiGithub,
} from 'react-icons/si';

const SKILLS_DATA = [
  { name: 'React / Vite', category: 'Frontend', tag: 'React', level: 95, icon: SiReact, color: 'text-cyan-400' },
  { name: 'Tailwind CSS', category: 'Frontend', tag: 'Frontend', level: 90, icon: SiTailwindcss, color: 'text-sky-400' },
  { name: 'JavaScript / TypeScript', category: 'Frontend', tag: 'JavaScript', level: 88, icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Node.js / Express', category: 'Backend', tag: 'Node.js', level: 85, icon: SiNodedotjs, color: 'text-emerald-400' },
  { name: 'MySQL / PostgreSQL', category: 'Backend', tag: 'SQL', level: 82, icon: SiMysql, color: 'text-blue-400' },
  { name: 'REST APIs', category: 'Backend', tag: 'API', level: 90, icon: SiExpress, color: 'text-gray-300' },
  { name: 'Docker / Cloud', category: 'DevOps', tag: 'Docker', level: 75, icon: SiDocker, color: 'text-blue-500' },
  { name: 'Git / GitHub', category: 'Tools', tag: 'Git', level: 92, icon: SiGithub, color: 'text-purple-400' },
];

const CATEGORY_TABS = [
  { key: 'All', label: 'All' },
  { key: 'React', label: 'React', icon: SiReact },
  { key: 'JavaScript', label: 'JavaScript', icon: SiJavascript },
  { key: 'Node.js', label: 'Node.js', icon: SiNodedotjs },
  { key: 'SQL', label: 'SQL', icon: SiMysql },
  { key: 'Git', label: 'Git', icon: SiGithub },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = useMemo(() => {
    if (activeTab === 'All') return SKILLS_DATA;

    return SKILLS_DATA.filter((skill) => {
      const tabMatch = skill.tag === activeTab || skill.category === activeTab;
      return tabMatch || skill.name.toLowerCase().includes(activeTab.toLowerCase());
    });
  }, [activeTab]);

  return (
    <section id="skills" className="w-full py-20 px-4 bg-slate-950/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Technical Stack
          </span>
          <h2 className="text-3xl font-bold text-white mt-3">Technical Expertise</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {CATEGORY_TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[10px] sm:text-xs font-medium transition-all duration-200 ${
                activeTab === key
                  ? 'border-cyan-400 bg-cyan-500/15 text-cyan-300 shadow-lg shadow-cyan-500/10'
                  : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:text-white'
              }`}
            >
              {Icon ? <Icon className="w-3.5 h-3.5" /> : null}
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/80 transition duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/60 group-hover:border-slate-600 transition">
                      <IconComponent className={`w-6 h-6 ${skill.color}`} />
                    </div>
                    <span className="font-semibold text-white group-hover:text-cyan-400 transition">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="bg-linear-to-r from-cyan-500 to-sky-400 h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}