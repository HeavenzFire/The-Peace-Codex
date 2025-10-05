
import React from 'react';
import { CodexEntryType } from '../types';
import { ForkIcon, ShareIcon } from './IconComponents';

interface CodexEntryProps {
  entry: CodexEntryType;
  index: number;
}

const CodexEntry: React.FC<CodexEntryProps> = ({ entry, index }) => {
  return (
    <article className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-2xl shadow-black/20 overflow-hidden transition-all duration-300 hover:border-cyan-400/50">
      <header className="p-6 bg-slate-900/30 border-b border-slate-700/50 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-cyan-300" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          Entry #{entry.id.padStart(3, '0')}
        </h2>
        <span className="text-slate-400 font-mono text-sm">{entry.date}</span>
      </header>

      <div className="p-6 md:p-8 space-y-8">
        {/* The Principle / Pull Request */}
        <section>
          <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-3" style={{ fontFamily: "'Source Code Pro', monospace" }}>
            Principle // Pull Request
          </h3>
          <div className="bg-gray-900/70 p-4 rounded-lg border border-slate-700">
            <p className="text-lg md:text-xl text-green-300" style={{ fontFamily: "'Source Code Pro', monospace" }}>
              {`> ${entry.principle}`}
            </p>
          </div>
        </section>

        {/* The Embodiment / Local Build */}
        <section>
          <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-3" style={{ fontFamily: "'Source Code Pro', monospace" }}>
            Embodiment // Local Build Log
          </h3>
          <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
            <h4 className="font-semibold text-violet-300 mb-2 text-lg">{entry.embodiment.title}</h4>
            <p className="text-slate-300 leading-relaxed whitespace-pre-line">
              {entry.embodiment.log}
            </p>
          </div>
        </section>

        {/* The Invitation / Open Source */}
        <section>
          <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-3" style={{ fontFamily: "'Source Code Pro', monospace" }}>
            Invitation // Fork This Reality
          </h3>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center bg-transparent p-4 rounded-lg border border-dashed border-slate-600">
            <p className="flex-grow text-cyan-200/90 italic">
              {entry.invitation}
            </p>
            <div className="flex gap-2 flex-shrink-0">
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-200 rounded-md hover:bg-slate-600/50 transition-colors">
                    <ForkIcon />
                    <span>Fork</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-200 rounded-md hover:bg-slate-600/50 transition-colors">
                    <ShareIcon />
                    <span>Share</span>
                </button>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default CodexEntry;
