import React, { useState } from 'react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { 
  FolderGit2, 
  Code, 
  Layers, 
  CheckCircle2, 
  Terminal, 
  X, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Python & Backend', 'Full Stack'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative bg-transparent overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world applications showcasing Python backend engineering, RESTful API integrations, responsive React interfaces, and relational SQL persistence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white border-transparent shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900/60 text-slate-300 hover:text-white border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl shadow-black/30 hover:-translate-y-1"
            >
              <div className="p-6 sm:p-8 space-y-5">
                
                {/* Header row: category badge + featured badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-sky-400 border border-blue-500/30">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Featured Resume Project
                    </span>
                  )}
                </div>

                {/* Project Title & Tagline */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Architecture Snapshot */}
                <div className="bg-[#0b0f19] p-3 rounded-xl border border-slate-800/80 text-xs font-mono text-slate-400 flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Architecture</span>
                    <span className="text-slate-300">{project.architecture}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400 font-bold block">
                    Core Engineering Highlights
                  </span>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 3).map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-sky-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-6 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600/20 hover:bg-blue-600/30 text-sky-300 border border-blue-500/30 transition-all flex items-center gap-1.5"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>View Code & Architecture</span>
                </button>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel bg-[#0b0f19] border border-slate-700/80 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase font-semibold">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {selectedProject.tagline}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Pills */}
            {selectedProject.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">{m.label}</div>
                    <div className="text-sm font-bold text-sky-300 mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Full Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Project Overview & Objective
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Architecture Details */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-sky-400" />
                System Flow & Architecture
              </h4>
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-sky-300">
                {selectedProject.architecture}
              </div>
            </div>

            {/* All Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Key Accomplishments & Implementation
              </h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Snippet Preview */}
            {selectedProject.codeSnippet && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 font-bold uppercase text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-amber-400" />
                    Implementation Preview: {selectedProject.codeSnippet.filename}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-sky-300">
                    {selectedProject.codeSnippet.language}
                  </span>
                </div>
                <div className="bg-[#05070d] rounded-xl p-4 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                  <pre>{selectedProject.codeSnippet.code}</pre>
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
