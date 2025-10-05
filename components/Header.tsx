
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 border-b border-slate-700/50">
      <div className="container mx-auto text-center">
        <h1 
          className="text-4xl md:text-5xl font-bold tracking-wider uppercase"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400">
            The Peace Codex
          </span>
        </h1>
        <p className="mt-2 text-slate-400 text-lg">
          A Living Repository for a New Reality
        </p>
      </div>
    </header>
  );
};

export default Header;
