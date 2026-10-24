import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
      baseAlpha: number;
    }

    const particleColors = [
      'rgba(56, 189, 248,', // sky blue
      'rgba(59, 130, 246,', // blue
      'rgba(99, 102, 241,', // indigo
      'rgba(16, 185, 129,', // emerald
      'rgba(255, 222, 87,', // python gold
    ];

    const particleCount = Math.min(Math.floor((width * height) / 18000), 65);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.45 + 0.2;
      const colorPrefix = particleColors[Math.floor(Math.random() * particleColors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 1.8 + 1,
        color: colorPrefix,
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
      });
    }

    // Mouse coordinates for interactive reactions
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const connectionDistance = 110;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off canvas edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interactive mouse avoidance / gentle push
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          p.x -= (dxMouse / distMouse) * force * 2.5;
          p.y -= (dyMouse / distMouse) * force * 2.5;
          p.alpha = Math.min(p.baseAlpha + 0.4, 0.9);
        } else {
          p.alpha = p.baseAlpha;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.shadowColor = `${p.color} 0.5)`;
        ctx.shadowBlur = 8;
        ctx.fill();

        // Draw connecting constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }

        // Connect particle to mouse if within distance
        if (distMouse < mouse.radius) {
          const mouseLineAlpha = (1 - distMouse / mouse.radius) * 0.28;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(96, 165, 250, ${mouseLineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Floating ambient code tokens
  const floatingTokens = [
    { text: 'def', top: '15%', left: '8%', delay: '0s', duration: '18s' },
    { text: '{ ... }', top: '35%', left: '88%', delay: '3s', duration: '22s' },
    { text: 'SELECT *', top: '65%', left: '5%', delay: '6s', duration: '20s' },
    { text: 'async / await', top: '80%', left: '85%', delay: '2s', duration: '24s' },
    { text: 'λ: python', top: '48%', left: '92%', delay: '5s', duration: '19s' },
    { text: '<Component />', top: '22%', left: '82%', delay: '1s', duration: '21s' },
    { text: 'REST API', top: '75%', left: '12%', delay: '4s', duration: '23s' },
    { text: '0101', top: '90%', left: '45%', delay: '7s', duration: '17s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      
      {/* 1. Cyber Grid Pattern with Smooth Radial Falloff */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* 2. Layered Morphing Gradient Orbs (Smooth Ambient Color Drift) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[650px] h-[650px] sm:w-[850px] sm:h-[850px] rounded-full bg-gradient-to-tr from-blue-600/18 via-sky-500/12 to-indigo-600/10 blur-[140px] animate-gradient-drift will-change-transform" 
      />
      <div 
        className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-gradient-to-bl from-indigo-600/16 via-purple-600/12 to-cyan-500/10 blur-[150px] animate-gradient-drift-reverse will-change-transform" 
      />
      <div 
        className="absolute top-[40%] right-[15%] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 via-emerald-500/08 to-blue-500/10 blur-[130px] animate-pulse-subtle will-change-transform" 
      />
      <div 
        className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-amber-500/08 via-sky-500/08 to-blue-600/08 blur-[120px] animate-pulse-subtle will-change-transform" 
      />

      {/* 3. Interactive Constellation Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block w-full h-full opacity-80" 
      />

      {/* 4. Subtle Floating Code Tokens */}
      {floatingTokens.map((token, idx) => (
        <div
          key={idx}
          className="absolute font-mono text-[11px] sm:text-xs text-sky-400/20 select-none animate-pulse-subtle transition-opacity duration-1000"
          style={{
            top: token.top,
            left: token.left,
            animationDuration: token.duration,
            animationDelay: token.delay,
          }}
        >
          {token.text}
        </div>
      ))}

      {/* 5. Vignette Overlay for Crisp Readability */}
      <div className="absolute inset-0 bg-radial-vignette opacity-50" />

    </div>
  );
};
