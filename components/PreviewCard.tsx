
import React from 'react';
import { GlassConfig } from '../types';

interface Props {
  config: GlassConfig;
  hexToRgba: (hex: string, alpha: number) => string;
}

const PreviewCard: React.FC<Props> = ({ config, hexToRgba }) => {
  return (
    <div className="relative group perspective-1000 w-full max-w-sm">
      <div 
        className="transition-all duration-300 p-8 md:p-12 shadow-2xl flex flex-col items-center justify-center text-center transform hover:scale-105"
        style={{
          background: hexToRgba(config.color, config.transparency),
          backdropFilter: `blur(${config.blur}px) saturate(${config.saturation}%)`,
          WebkitBackdropFilter: `blur(${config.blur}px) saturate(${config.saturation}%)`,
          border: `${config.outline}px solid ${hexToRgba(config.color, 0.3)}`,
          borderRadius: `${config.borderRadius}px`,
        }}
      >
        <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Glassmorphism Card</h3>
        <p className="text-white/80 font-light text-sm leading-relaxed">
          Create stunning, frosted glass effects that adapt perfectly to any background.
        </p>
        <div className="mt-8 flex gap-3">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
      </div>
      
      {/* Decorative spheres in background behind the card to show transparency */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
    </div>
  );
};

export default PreviewCard;
