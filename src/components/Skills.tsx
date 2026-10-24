import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Sparkles, 
  Terminal, 
  Database, 
  Layout, 
  Wrench, 
  Code2, 
  Layers, 
  Cpu
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const tabs = [
    { name: 'All', icon: Sparkles },
    { name: 'Programming Languages', icon: Terminal },
    { name: 'Backend & Database', icon: Database },
    { name: 'Web & Frontend', icon: Layout },
    { name: 'Tools & Methodologies', icon: Wrench },
  ];

  const filteredCategories = activeTab === 'All' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(cat => cat.category === activeTab);

  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'python':
        return '🐍';
      case 'javascript (es6+)':
      case 'javascript':
        return '⚡';
      case 'sql':
      case 'mysql & relational dbs':
        return '🗄️';
      case 'react':
        return '⚛️';
      case 'html5 & css3':
        return '🎨';
      case 'restful apis':
        return '🔌';
      case 'git & github':
        return '📦';
      default:
        return '💻';
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-transparent overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Proficiencies categorized by engineering domain, verified through academic projects, internship experience, and hands-on coding.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white border-transparent shadow-lg shadow-blue-500/25 scale-[1.02]'
                    : 'bg-slate-900/60 text-slate-300 hover:text-white border-slate-800 hover:bg-slate-800/60'
                }`}
              >
                <tab.icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-sky-400'}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 inline-block"></span>
                  {category.category}
                </h3>
                <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
                  • {category.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
                  >
                    {/* Top row: Icon, Name & Experience */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                          {getSkillIcon(skill.name)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {skill.experience}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Proficiency bar */}
                    <div className="space-y-1.5 my-3">
                      <div className="flex justify-between text-[11px] font-mono">
                        <span className="text-slate-400">Proficiency</span>
                        <span className="text-sky-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-sky-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                      {skill.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800 font-mono group-hover:border-slate-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom subtle shine bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Recruiter Callout Banner */}
        <div className="mt-16 glass-panel rounded-2xl p-6 sm:p-8 border border-sky-500/20 bg-gradient-to-r from-blue-950/20 via-slate-900/60 to-indigo-950/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Cpu className="w-5 h-5 text-sky-400" />
              <span>Looking for specific tech stack alignment?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              My core strengths center around Python scripting, relational database queries in MySQL, and building RESTful web architectures.
            </p>
          </div>
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 whitespace-nowrap transition-colors flex items-center gap-2"
          >
            <span>See Applied in Projects</span>
            <Layers className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
