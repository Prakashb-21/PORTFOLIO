import React from 'react';

interface SectionDividerProps {
  glowColor?: 'blue' | 'cyan' | 'indigo' | 'emerald';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ glowColor = 'blue' }) => {
  const glowStyles = {
    blue: 'from-blue-500/0 via-blue-500/40 to-blue-500/0',
    cyan: 'from-cyan-500/0 via-cyan-500/40 to-cyan-500/0',
    indigo: 'from-indigo-500/0 via-indigo-500/40 to-indigo-500/0',
    emerald: 'from-emerald-500/0 via-emerald-500/40 to-emerald-500/0',
  };

  return (
    <div className="relative w-full overflow-hidden py-1">
      {/* Base divider line */}
      <div className={`h-[1px] w-full bg-gradient-to-r ${glowStyles[glowColor]}`} />
      
      {/* Moving illuminated laser beam animation */}
      <div className="absolute inset-0 h-[1.5px] w-full overflow-hidden">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-beam" />
      </div>
      
      {/* Center diamond accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#0a0d16] border border-sky-400/60 shadow-sm shadow-sky-400/50" />
    </div>
  );
};
