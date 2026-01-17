
import React, { useState, useEffect, useCallback } from 'react';
import ControlPanel from './components/ControlPanel';
import PreviewCard from './components/PreviewCard';
import CodeOutput from './components/CodeOutput';
import { GlassConfig } from './types';

const App: React.FC = () => {
  const [config, setConfig] = useState<GlassConfig>({
    blur: 10,
    transparency: 0.2,
    color: '#ffffff',
    outline: 1,
    borderRadius: 24,
    saturation: 100
  });

  const [copyFeedback, setCopyFeedback] = useState(false);

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const cssCode = `background: ${hexToRgba(config.color, config.transparency)};
backdrop-filter: blur(${config.blur}px) saturate(${config.saturation}%);
-webkit-backdrop-filter: blur(${config.blur}px) saturate(${config.saturation}%);
border: ${config.outline}px solid ${hexToRgba(config.color, 0.3)};
border-radius: ${config.borderRadius}px;`;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(cssCode);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  }, [cssCode]);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000')` }}
    >
      {/* Overlay to ensure readability */}
      <div className="fixed inset-0 bg-black/30 pointer-events-none"></div>

      <header className="relative z-10 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
          Glassmorphism <span className="text-blue-400">Pro</span>
        </h1>
        <p className="text-slate-200 mt-2 font-light">Elevate your UI with modern crystalline effects</p>
      </header>

      <main className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Side: Preview Area */}
        <section className="flex flex-col items-center justify-center space-y-8 h-full min-h-[400px]">
          <PreviewCard config={config} hexToRgba={hexToRgba} />
        </section>

        {/* Right Side: Controls and Output */}
        <section className="space-y-6">
          <ControlPanel config={config} setConfig={setConfig} />
          <CodeOutput 
            code={cssCode} 
            onCopy={handleCopy} 
            copyFeedback={copyFeedback} 
          />
        </section>
      </main>

      <footer className="relative z-10 mt-12 text-slate-300 text-sm font-light">
        &copy; {new Date().getFullYear()} Glassmorphism Generator • Built for Portfolio
      </footer>
    </div>
  );
};

export default App;
