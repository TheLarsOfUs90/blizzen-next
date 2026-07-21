'use client';

import { useState } from 'react';

interface NavBarProps {
  activeHref: string;
  onToggleTheme: () => void;
}

export function NavBar({ activeHref, onToggleTheme }: NavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (href: string) => {
    window.location.href = href;
    setIsMobileMenuOpen(false);
  };

  const linkClass = (href: string) =>
    href === activeHref
      ? 'text-yellow-400 font-semibold'
      : 'hover:text-yellow-400 transition';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <button
          onClick={() => navigateTo('/')}
          className="flex items-center gap-3 hover:scale-105 transition"
        >
          <span className="text-3xl">⚡</span>
          <span className="text-2xl font-bold tracking-tight">BliZzen</span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => navigateTo('/#home')} className="hover:text-yellow-400 transition">
            Home
          </button>
          <button onClick={() => navigateTo('/#about')} className="hover:text-yellow-400 transition">
            Über uns
          </button>
          <button onClick={() => navigateTo('/members')} className="hover:text-yellow-400 transition">
            Mitglieder
          </button>
          <a href="/matches" className={linkClass('/matches')}>
            Matches
          </a>
          <button onClick={() => navigateTo('/#erfolge')} className="hover:text-yellow-400 transition">
            Erfolge
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onToggleTheme}
            className="w-11 h-11 rounded-full bg-gradient-to-br from-[#110222] to-[#b00677] flex items-center justify-center text-2xl shadow-lg border border-white/30 hover:scale-110 transition"
          >
            ⚡
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-3xl p-2">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-40 pt-20">
          <div className="flex flex-col items-center gap-10 text-2xl font-medium">
            <button onClick={() => navigateTo('/#home')}>Home</button>
            <button onClick={() => navigateTo('/#about')}>Über uns</button>
            <button onClick={() => navigateTo('/members')} className="hover:text-yellow-400">
              Mitglieder
            </button>
            <button onClick={() => navigateTo('/matches')} className="text-yellow-400">
              Matches
            </button>
            <button onClick={() => navigateTo('/#erfolge')}>Erfolge</button>
          </div>
        </div>
      )}
    </nav>
  );
}