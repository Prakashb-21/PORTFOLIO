import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-transparent">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Solid computer applications background and analytical foundation supporting my software development career.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 hover:border-sky-500/40 transition-all duration-300 relative overflow-hidden group shadow-lg shadow-black/30"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <BookOpen className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="text-slate-300 font-medium text-sm pl-10">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pl-10 md:pl-0">
                  {/* Score Badge */}
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.scoreType}: {edu.score}</span>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{edu.duration}</span>
                  </div>
                </div>
              </div>

              {/* Highlights & Details */}
              <div className="pt-4 space-y-2">
                {edu.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-sky-400/80 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Location Tag */}
              <div className="pt-3 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <MapPin className="w-3 h-3 text-rose-400" />
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
