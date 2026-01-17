
import React from 'react';
import { GlassConfig } from '../types';

interface Props {
  config: GlassConfig;
  setConfig: React.Dispatch<React.SetStateAction<GlassConfig>>;
}

const ControlPanel: React.FC<Props> = ({ config, setConfig }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: name === 'color' ? value : parseFloat(value)
    }));
  };

  const sliders = [
    { label: 'Blur', name: 'blur', min: 0, max: 40, step: 1, unit: 'px' },
    { label: 'Transparency', name: 'transparency', min: 0, max: 1, step: 0.01, unit: '' },
    { label: 'Saturation', name: 'saturation', min: 0, max: 200, step: 1, unit: '%' },
    { label: 'Border Width', name: 'outline', min: 0, max: 10, step: 1, unit: 'px' },
    { label: 'Corner Radius', name: 'borderRadius', min: 0, max: 100, step: 1, unit: 'px' },
  ];

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
        Style Configuration
      </h2>
      
      <div className="space-y-5">
        <div className="flex items-center justify-between group">
          <label className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Glass Color</label>
          <input 
            type="color" 
            name="color" 
            value={config.color} 
            onChange={handleChange}
            className="w-12 h-10 rounded-lg cursor-pointer bg-transparent border-none"
          />
        </div>

        {sliders.map((slider) => (
          <div key={slider.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-300">{slider.label}</label>
              <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">
                {config[slider.name as keyof GlassConfig]}{slider.unit}
              </span>
            </div>
            <input 
              type="range"
              name={slider.name}
              min={slider.min}
              max={slider.max}
              step={slider.step}
              value={config[slider.name as keyof GlassConfig] as number}
              onChange={handleChange}
              className="w-full cursor-pointer accent-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
