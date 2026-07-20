'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Members() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('light-mode');
  };

  const scrollToSection = (id: string) => {
    // Für Members Seite zurück zur Hauptseite scrollen
    if (id === 'home') {
      window.location.href = '/';
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <main className={`min-h-screen transition-all ${isLightMode ? 'light-mode' : 'bg-gradient-to-br from-[#110222] via-[#6b0080] to-[#b00677]'}`}>

{/* Navigation */}
<nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
  <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
    <button onClick={() => window.location.href = '/'} className="flex items-center gap-3 hover:scale-105 transition">
      <span className="text-3xl">⚡</span>
      <span className="text-2xl font-bold tracking-tight">BliZzen</span>
    </button>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
      <button onClick={() => window.location.href = '/#home'} className="hover:text-yellow-400 transition">Home</button>
      <button onClick={() => window.location.href = '/#about'} className="hover:text-yellow-400 transition">Über uns</button>
      <a href="/members" className="text-yellow-400 font-semibold">Mitglieder</a>
      <button onClick={() => window.location.href = '/#matches'} className="hover:text-yellow-400 transition">Matches</button>
      <button onClick={() => window.location.href = '/#erfolge'} className="hover:text-yellow-400 transition">Erfolge</button>
    </div>

    <div className="flex items-center gap-4">
      <button onClick={toggleTheme} className="w-11 h-11 rounded-full bg-gradient-to-br from-[#110222] to-[#b00677] flex items-center justify-center text-2xl shadow-lg border border-white/30 hover:scale-110 transition">⚡</button>
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-3xl p-2">
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="md:hidden fixed inset-0 bg-black/95 z-40 pt-20">
      <div className="flex flex-col items-center gap-10 text-2xl font-medium">
        <button onClick={() => window.location.href = '/#home'}>Home</button>
        <button onClick={() => window.location.href = '/#about'}>Über uns</button>
        <a href="/members" className="text-yellow-400">Mitglieder</a>
        <button onClick={() => window.location.href = '/#matches'}>Matches</button>
        <button onClick={() => window.location.href = '/#erfolge'}>Erfolge</button>
      </div>
    </div>
  )}
</nav>

      {/* MEMBERS CONTENT */}
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Unser Clan</h1>
            <p className="text-xl text-gray-400">Die aktiven Mitglieder von BliZzen</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1,2,3,4,5,6,7,8].map(i => (
              <Card key={i} className="text-center overflow-hidden hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
                    <div className="w-32 h-32 bg-gray-600 rounded-full flex items-center justify-center text-6xl">
                      👤
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-green-500">
                      Online
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold">Spieler {i}</h3>
                  <p className="text-yellow-400 text-sm mt-1">Valorant • Duelist</p>
                  <p className="text-xs opacity-70 mt-4">Level 87 • 245 Wins</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}