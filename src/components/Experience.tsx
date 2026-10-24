import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Award,
  Workflow
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-transparent">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on industry experience delivering production web components, responsive interfaces, and collaborative engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 pb-12 border-l-2 border-blue-500/30 last:pb-0">
              
              {/* Timeline Marker Pulse */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0a0d16] border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
              </div>

              {/* Card Container */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6 hover:border-blue-500/40 transition-all duration-300 shadow-xl shadow-black/40">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-sky-400 border border-blue-500/30">
                      <Award className="w-3 h-3" />
                      <span>{exp.type}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-300 font-medium text-sm">
                      <Building2 className="w-4 h-4 text-sky-400" />
                      <span className="text-sky-300 font-semibold">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Contributions & Highlights */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2">
                    <Workflow className="w-3.5 h-3.5" />
                    Key Responsibilities & Impact
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.contributions.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                    Technologies & Methodologies Used
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 text-sky-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
