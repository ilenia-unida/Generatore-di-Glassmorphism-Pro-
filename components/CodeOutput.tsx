
import React from 'react';

interface Props {
  code: string;
  onCopy: () => void;
  copyFeedback: boolean;
}

const CodeOutput: React.FC<Props> = ({ code, onCopy, copyFeedback }) => {
  return (
    <div className="bg-slate-900/90 rounded-3xl overflow-hidden border border-white/10 shadow-xl">
      <div className="bg-slate-800/50 px-6 py-4 flex justify-between items-center border-b border-white/5">
        <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">CSS Styles</span>
        <button 
          onClick={onCopy}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
            copyFeedback 
              ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
          }`}
        >
          {copyFeedback ? (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              COPIED
            </>
          ) : (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
              COPY CODE
            </>
          )}
        </button>
      </div>
      <div className="p-6">
        <pre className="text-blue-300 font-mono text-sm overflow-x-auto whitespace-pre-wrap leading-relaxed selection:bg-blue-500/30">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeOutput;
