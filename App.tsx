
import React from 'react';
import Header from './components/Header';
import CodexEntry from './components/CodexEntry';
import { CODEX_ENTRIES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950 text-gray-200 selection:bg-cyan-300 selection:text-slate-900">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto flex flex-col gap-12">
            {CODEX_ENTRIES.map((entry, index) => (
              <CodexEntry key={entry.id} entry={entry} index={index} />
            ))}
          </div>
        </main>
        <footer className="text-center py-8 text-slate-500 text-sm">
          <p>The Peace Codex is an open-source experiment in collective reality design.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
