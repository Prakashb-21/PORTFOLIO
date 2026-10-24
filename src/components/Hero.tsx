import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  FileDown, 
  Send, 
  Terminal, 
  Sparkles, 
  MapPin, 
  Database, 
  Layers, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const titles = [
    "Python Developer",
    "Backend Developer",
    "BCA Graduate (Fresher)",
    "REST API Engineer",
    "Full-Stack Web Enthusiast"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          // Pause when word complete
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        // Deleting backwards
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 45 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent"
    >
      {/* Ambient background blur elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Open to Work Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-medium shadow-lg shadow-emerald-950/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Immediate Opportunities • Chennai / Remote</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono text-sky-400 tracking-wide flex items-center justify-center lg:justify-start gap-2">
                <span>Hello, World! I am</span>
                <Sparkles className="w-4 h-4 text-amber-400 inline animate-bounce" />
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                <span className="text-white">{PERSONAL_INFO.name}</span>
              </h1>
            </div>

            {/* Dynamic Typing Subtitle */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl lg:text-3xl font-bold">
              <span className="text-slate-400">I build with</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 min-h-[1.5em] inline-flex items-center">
                {displayText}
                <span className="w-0.5 h-6 sm:h-8 bg-sky-400 ml-1 animate-pulse"></span>
              </span>
            </div>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Motivated <strong className="text-white">BCA Graduate</strong> with hands-on experience in 
              <span className="text-sky-300 font-semibold"> Python</span>, 
              <span className="text-cyan-300 font-semibold"> React</span>, 
              <span className="text-emerald-300 font-semibold"> SQL</span>, and 
              <span className="text-indigo-300 font-semibold"> REST APIs</span>. 
              Passionate about architecting clean backend systems, relational databases, and dynamic web interfaces.
            </p>

            {/* Location Pill */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Completed Internship at Mervanix</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-400 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Get In Touch</span>
              </a>

              <a
                href="#projects"
                className="px-5 py-3 rounded-xl font-semibold text-sm text-slate-400 hover:text-sky-300 transition-colors flex items-center gap-1.5"
              >
                <span>View Projects</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-slate-500" />
              </a>

              {/* Direct GitHub & LinkedIn Links */}
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-all duration-300 hover:-translate-y-0.5 shadow-md flex items-center justify-center"
                  title="GitHub Profile (Prakashb-21)"
                >
                  <FaGithub className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-sky-400 hover:text-sky-300 border border-slate-700/80 transition-all duration-300 hover:-translate-y-0.5 shadow-md flex items-center justify-center"
                  title="LinkedIn Profile (prakash-b-015744322)"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="bg-slate-900/40 rounded-xl p-3 border border-slate-800/60 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-white">2+</div>
                <div className="text-[11px] text-slate-400">Full-Stack Projects</div>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-3 border border-slate-800/60 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-sky-400">1</div>
                <div className="text-[11px] text-slate-400">Industry Internship</div>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-3 border border-slate-800/60 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">BCA</div>
                <div className="text-[11px] text-slate-400">Computer Degree</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Python Terminal Card + Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glow backing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-sky-400/20 rounded-3xl blur-2xl -z-10" />

            {/* Terminal Window Card */}
            <div className="w-full max-w-md bg-[#0c101a] border border-slate-800 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
              
              {/* Terminal Window Header */}
              <div className="bg-[#121826] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    developer_profile.py
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 border border-blue-700/40">
                  Python 3.11
                </span>
              </div>

              {/* Terminal Code Content */}
              <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto">
                <p className="text-slate-500"># Prakash B's Developer Configuration</p>
                
                <div>
                  <span className="text-purple-400">class</span>{' '}
                  <span className="text-amber-300">PythonEngineer</span>:
                </div>
                
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-400">__init__</span>(self):
                  </div>
                  
                  <div className="pl-4 space-y-1">
                    <p>
                      self.<span className="text-sky-300">name</span> ={' '}
                      <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>
                    </p>
                    <p>
                      self.<span className="text-sky-300">role</span> ={' '}
                      <span className="text-emerald-300">"Python & Web Developer"</span>
                    </p>
                    <p>
                      self.<span className="text-sky-300">degree</span> ={' '}
                      <span className="text-emerald-300">"BCA (7.0 CGPA)"</span>
                    </p>
                    <p>
                      self.<span className="text-sky-300">status</span> ={' '}
                      <span className="text-emerald-300">"Available Immediately"</span>
                    </p>
                    <p>
                      self.<span className="text-sky-300">skills</span> = [
                    </p>
                    <div className="pl-4 text-emerald-300">
                      "Python", "JavaScript", "SQL",<br />
                      "React", "REST APIs", "Git"
                    </div>
                    <p>]</p>
                  </div>

                  <div className="pt-1">
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-400">get_readiness</span>(self):
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span>{' '}
                    <span className="text-amber-300">"Ready to contribute on Day 1"</span>
                  </div>
                </div>

                <div className="pt-2 text-slate-500">
                  <span className="text-sky-400">&gt;&gt;&gt;</span> print(PythonEngineer().get_readiness())
                </div>
                <div className="text-emerald-400 font-semibold bg-emerald-950/30 p-2 rounded border border-emerald-900/50">
                  ✔ "Ready to contribute on Day 1"
                </div>
              </div>

              {/* Terminal Footer with Quick Tags */}
              <div className="bg-[#0f1422] px-4 py-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-sky-400" />
                  MySQL / SQLite Ready
                </span>
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  REST Architecture
                </span>
              </div>
            </div>

            {/* Floating Tech Badge 1: Python */}
            <div className="absolute -top-5 -left-4 sm:-left-6 bg-slate-900/90 border border-amber-500/30 rounded-2xl p-2.5 shadow-xl shadow-amber-500/10 backdrop-blur-md hidden sm:flex items-center gap-2 animate-bounce duration-1000">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold text-xs">
                🐍
              </div>
              <div>
                <div className="text-xs font-bold text-white">Python Core</div>
                <div className="text-[10px] text-slate-400">OOP & Scripting</div>
              </div>
            </div>

            {/* Floating Tech Badge 2: React & REST */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-slate-900/90 border border-sky-500/30 rounded-2xl p-2.5 shadow-xl shadow-sky-500/10 backdrop-blur-md hidden sm:flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 font-bold text-xs">
                ⚛️
              </div>
              <div>
                <div className="text-xs font-bold text-white">React + REST</div>
                <div className="text-[10px] text-slate-400">Modern Frontend</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
