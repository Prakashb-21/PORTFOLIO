import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SectionDivider } from './components/SectionDivider';
import { FileText } from 'lucide-react';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-sky-300 relative overflow-x-hidden">
      
      {/* Dynamic Animated Background Canvas, Orbs & Transitions */}
      <AnimatedBackground />

      {/* Sticky Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections with Animated Transitions */}
      <main className="flex-grow relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        
        <SectionDivider glowColor="blue" />
        <About />
        
        <SectionDivider glowColor="cyan" />
        <Skills />
        
        <SectionDivider glowColor="indigo" />
        <Experience />
        
        <SectionDivider glowColor="blue" />
        <Projects />
        
        <SectionDivider glowColor="cyan" />
        <Education />
        
        <SectionDivider glowColor="emerald" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* ATS Resume Viewer / Download Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Floating Quick Resume Action Badge (Bottom Right for Recruiters) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsResumeOpen(true)}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-sky-400 border border-sky-500/40 shadow-xl shadow-black/60 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          title="Quick Access: View Prakash's Resume"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <FileText className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
            Resume
          </span>
        </button>
      </div>

    </div>
  );
}

export default App;
