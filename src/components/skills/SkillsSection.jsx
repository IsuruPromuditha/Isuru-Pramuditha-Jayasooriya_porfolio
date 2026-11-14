import React, { useState, useMemo } from 'react';
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiHtml5, 
  SiCss3, 
  SiFlutter, 
  SiCplusplus, 
  SiJava, 
  SiPhp, 
  SiAmazonaws, 
  SiPostgresql, 
  SiMongodb, 
  SiMysql, 
  SiGit, 
  SiFigma, 
  SiTrello, 
  SiPowerbi,
  SiSelenium,
  SiPostman
} from 'react-icons/si';
import { CgCPlusPlus } from 'react-icons/cg';
import { FiCpu, FiCheckSquare, FiActivity, FiLayers } from 'react-icons/fi';

const SKILLS_DATA = [
  // Languages
  { name: 'TypeScript', category: 'Languages', level: 90, icon: SiTypescript, color: 'text-blue-400' },
  { name: 'React', category: 'Languages', level: 95, icon: SiReact, color: 'text-cyan-400' },
  { name: 'Node.js', category: 'Languages', level: 85, icon: SiNodedotjs, color: 'text-emerald-400' },
  { name: 'HTML', category: 'Languages', level: 95, icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS', category: 'Languages', level: 90, icon: SiCss3, color: 'text-sky-400' },
  { name: 'Flutter', category: 'Languages', level: 80, icon: SiFlutter, color: 'text-blue-300' },
  { name: 'C', category: 'Languages', level: 75, icon: CgCPlusPlus, color: 'text-gray-300' },
  { name: 'C++', category: 'Languages', level: 75, icon: SiCplusplus, color: 'text-indigo-400' },
  { name: 'Java', category: 'Languages', level: 82, icon: SiJava, color: 'text-red-400' },
  { name: 'PHP', category: 'Languages', level: 85, icon: SiPhp, color: 'text-purple-400' },
  
  // Platforms
  { name: 'AWS', category: 'Platforms', level: 78, icon: SiAmazonaws, color: 'text-amber-400' },
  
  // Data
  { name: 'PostgreSQL', category: 'Data', level: 84, icon: SiPostgresql, color: 'text-blue-400' },
  { name: 'MongoDB', category: 'Data', level: 82, icon: SiMongodb, color: 'text-emerald-500' },
  { name: 'MySQL', category: 'Data', level: 86, icon: SiMysql, color: 'text-sky-500' },
  
  // Practice
  { name: 'System Design', category: 'Practice', level: 80, icon: FiLayers, color: 'text-violet-400' },
  { name: 'Observability', category: 'Practice', level: 76, icon: FiActivity, color: 'text-teal-400' },
  { name: 'CI/CD', category: 'Practice', level: 78, icon: FiCpu, color: 'text-pink-400' },
  { name: 'Code Review', category: 'Practice', level: 88, icon: FiCheckSquare, color: 'text-green-400' },
  
  // Automation
  { name: 'Playwright', category: 'Automation', level: 88, icon: FiCheckSquare, color: 'text-teal-400' },
  { name: 'Postman', category: 'Automation', level: 90, icon: SiPostman, color: 'text-orange-400' },
  { name: 'Selenium', category: 'Automation', level: 82, icon: SiSelenium, color: 'text-green-500' },
  
  // Tools
  { name: 'Git', category: 'Tools', level: 92, icon: SiGit, color: 'text-red-500' },
  { name: 'Figma', category: 'Tools', level: 85, icon: SiFigma, color: 'text-pink-500' },
  { name: 'Trello', category: 'Tools', level: 90, icon: SiTrello, color: 'text-blue-500' },
  { name: 'Power BI', category: 'Tools', level: 75, icon: SiPowerbi, color: 'text-yellow-500' },
  { name: 'JMeter', category: 'Tools', level: 78, icon: FiActivity, color: 'text-rose-400' },
];

const CATEGORIES = ['All', 'Languages', 'Platforms', 'Data', 'Practice', 'Automation', 'Tools'];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = useMemo(() => {
    if (activeTab === 'All') return SKILLS_DATA;
    return SKILLS_DATA.filter((skill) => skill.category === activeTab);
  }, [activeTab]);

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Technical Stack
          </span>
          <h2 className="text-3xl font-bold text-white mt-3">Technical Expertise</h2>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 rounded-lg font-medium text-xs transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-800/80 text-gray-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Smaller Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.name} 
                className="group p-3 rounded-lg bg-slate-800/30 border border-slate-700/40 hover:border-cyan-500/50 hover:bg-slate-800/70 transition duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-md bg-slate-900/80 border border-slate-700/50 group-hover:border-slate-600 transition">
                    <IconComponent className={`w-4 h-4 ${skill.color}`} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                    {skill.level}%
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-medium text-white group-hover:text-cyan-400 transition block truncate">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-gray-500 block">
                    {skill.category}
                  </span>
                </div>

                {/* Compact Progress Bar */}
                <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden border border-slate-800/60">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-sky-400 h-full rounded-full transition-all duration-700 ease-out"
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