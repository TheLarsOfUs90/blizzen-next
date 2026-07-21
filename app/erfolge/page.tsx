'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Erfolge() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('light-mode');
  };

  const navigateTo = (href: string) => {
    window.location.href = href;
    setIsMobileMenuOpen(false);
  };

  return (
    <main
      className={`min-h-screen transition-all ${
        isLightMode
          ? 'light-mode'
          : 'bg-gradient-to-br from-[#110222] via-[#6b0080] to-[#b00677]'
      }`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <button onClick={() => navigateTo('/')} className="flex items-center gap-3 hover:scale-105 transition">
            <span className="text-3xl">⚡</span>
            <span className="text-2xl font-bold tracking-tight">BliZzen</span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button
              onClick={() => navigateTo('/#home')}
              className="hover:text-yellow-400 transition"
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('/#about')}
              className="hover:text-yellow-400 transition"
            >
              Über uns
            </button>
            <a href="/members" className="hover:text-yellow-400 transition">Mitglieder</a>
            <a href="/matches" className="hover:text-yellow-400 transition">Matches</a>
            <a href="/events" className="hover:text-yellow-400 transition">Events</a>
            <a href="/erfolge" className="text-yellow-400 font-semibold">Erfolge</a>
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
              <button onClick={() => navigateTo('/#home')}>Home</button>
              <button onClick={() => navigateTo('/#about')}>Über uns</button>
              <a href="/members" className="hover:text-yellow-400">Mitglieder</a>
              <a href="/matches" className="hover:text-yellow-400">Matches</a>
              <a href="/events" className="hover:text-yellow-400">Events</a>
              <a href="/erfolge" className="text-yellow-400">Erfolge</a>
            </div>
          </div>
        )}
      </nav>

      {/* ERFOLGE CONTENT */}
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Unsere Erfolge</h1>
            <p className="text-xl text-gray-400">Was wir bisher erreicht haben</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="text-7xl mb-4">🏆</div>
                <CardTitle>1. Platz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-75">Regional Championship 2025</p>
                <p className="text-sm mt-4 text-yellow-400">Valorant</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-7xl mb-4">🔥</div>
                <CardTitle>Top 8</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-75">National League Spring 2025</p>
                <p className="text-sm mt-4 text-yellow-400">League of Legends</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-7xl mb-4">👥</div>
                <CardTitle>150+ Mitglieder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-75">Aktiver Clan seit 2024</p>
                <p className="text-sm mt-4 text-yellow-400">Community Growth</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}