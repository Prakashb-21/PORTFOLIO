import React from 'react';
import { CAREER_OBJECTIVE } from '../data/portfolioData';
import { 
  User, 
  GraduationCap, 
  Target, 
  Lightbulb, 
  CheckCircle2, 
  Cpu, 
  Code, 
  Server,
  ArrowRight
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-transparent">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold tracking-wider uppercase">
            <User className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Get to know my technical journey, programming background, and dedication to software engineering excellence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Career Objective */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Bio Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-0.5 bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-500 shadow-lg shadow-blue-500/25">
                    <img 
                      src="/avatar.jpg" 
                      alt="Prakash B - Python Developer" 
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0a0d16] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  </span>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-mono font-semibold">
                    <Target className="w-3.5 h-3.5" />
                    <span>Career Objective</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">Prakash B</h3>
                  <p className="text-xs text-sky-400 font-mono">Software Developer • Python & Backend Fresher</p>
                </div>
              </div>

              <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Motivated and detail-oriented <strong className="text-white">BCA graduate</strong> with a strong foundation in 
                  software development, web technologies, database management, and programming concepts. 
                  I bring hands-on experience developing responsive web applications using 
                  <span className="text-sky-300 font-semibold"> HTML</span>, 
                  <span className="text-sky-300 font-semibold"> CSS</span>, 
                  <span className="text-sky-300 font-semibold"> JavaScript</span>, 
                  <span className="text-amber-300 font-semibold"> Python</span>, 
                  <span className="text-cyan-300 font-semibold"> React</span>, and 
                  <span className="text-emerald-300 font-semibold"> SQL</span>.
                </p>
                <p>
                  My goal is to secure an entry-level <strong className="text-white">Software Developer, Python Developer, or Web Developer</strong> role 
                  where I can apply my analytical skills, contribute to real-world projects, learn from senior engineers, and build scalable software solutions.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800/80">
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="text-[11px] text-slate-400 uppercase font-mono">Degree</div>
                  <div className="text-sm font-bold text-white mt-0.5">BCA (2021–2026)</div>
                  <div className="text-[10px] text-emerald-400">CGPA 7.0 / 10</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="text-[11px] text-slate-400 uppercase font-mono">Location</div>
                  <div className="text-sm font-bold text-white mt-0.5">Chennai, India</div>
                  <div className="text-[10px] text-sky-400">Velachery, 600042</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-slate-400 uppercase font-mono">Availability</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">Immediate</div>
                  <div className="text-[10px] text-slate-400">Fresher / Full-Time</div>
                </div>
              </div>
            </div>

            {/* Core Values & Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CAREER_OBJECTIVE.strengths.map((item, idx) => (
                <div 
                  key={idx}
                  className="glass-panel p-4 rounded-xl border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Technical Passion & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Highlight Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Educational Background</h3>
                    <p className="text-[11px] text-slate-400">Sun Arts and Science College</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  7.0 CGPA
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Graduating with a Bachelor of Computer Applications (BCA) with hands-on coursework in Data Structures, Database Systems (RDBMS), Object-Oriented Software Engineering, and Web Development.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Data Structures", "Database Management", "OOP in Python", "Web Technologies", "Software Engineering"].map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Interests Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Technical Interests</h3>
                  <p className="text-[11px] text-slate-400">What drives my curiosity every day</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Server className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Backend Engineering & REST APIs</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Designing structured endpoints, request routing, validation, and JSON data pipelines with Python.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Cpu className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Relational Database Solutions (SQL)</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Writing complex queries, joins, foreign key normalization, and persistent transactional storage with MySQL.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <Code className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Modern Responsive Frontend</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Connecting backend services to interactive React interfaces with clean component architectures.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Link */}
              <div className="pt-2">
                <a 
                  href="#skills" 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Explore my technical skill stack</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
