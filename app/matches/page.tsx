'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const matches = [
  {
    id: 1,
    date: 'Samstag, 19. Juli',
    time: '20:00 Uhr',
    opponent: 'Shadow Legion',
    game: 'Valorant',
    type: 'Ranked',
    status: 'Upcoming',
  },
  {
    id: 2,
    date: 'Sonntag, 20. Juli',
    time: '18:00 Uhr',
    opponent: 'Neon Knights',
    game: 'League of Legends',
    type: 'Turnier',
    status: 'Upcoming',
  },
  {
    id: 3,
    date: 'Freitag, 25. Juli',
    time: '21:00 Uhr',
    opponent: 'Phoenix Esports',
    game: 'CS2',
    type: 'Friendly',
    status: 'Upcoming',
  },
];

export default function Matches() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('light-mode');
  };

  const navigateTo = (href: string) => {
    window.location.href = href;
    setIsMobileMenuOpen(false);
  };

  const filteredMatches = matches.filter((match) => {
    if (filter === 'all') return true;
    return match.game.toLowerCase() === filter;
  });

  return (
    <main
      className={`min-h-screen transition-all ${isLightMode ? 'light-mode' : 'bg-gradient-to-br from-[#110222] via-[#6b0080] to-[#b00677]'}`}
    >
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
            <button
              onClick={() => navigateTo('/members')}
              className="hover:text-yellow-400 transition"
            >
              Mitglieder
            </button>
            <button
              onClick={() => navigateTo('/matches')}
              className="hover:text-yellow-400 transition"
            >
              Matches
            </button>
            <button
              onClick={() => navigateTo('/events')}
              className="hover:text-yellow-400 transition"
            >
              Events
            </button>
            <button
              onClick={() => navigateTo('/erfolge')}
              className="hover:text-yellow-400 transition"
            >
              Erfolge
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-[#110222] to-[#b00677] flex items-center justify-center text-2xl shadow-lg border border-white/30 hover:scale-110 transition"
            >
              ⚡
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-3xl p-2"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 z-40 pt-20">
            <div className="flex flex-col items-center gap-10 text-2xl font-medium">
              <button onClick={() => navigateTo('/#home')}>Home</button>
              <button onClick={() => navigateTo('/#about')}>Über uns</button>
              <button onClick={() => navigateTo('/members')} className="text-yellow-400">Mitglieder</button>
              <button onClick={() => navigateTo('/matches')} className="text-yellow-400">Matches</button>
              <button onClick={() => navigateTo('/events')} className="text-yellow-400">Events</button>
              <button onClick={() => navigateTo('/erfolge')} className="text-yellow-400">Erfolge</button>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Matches</h1>
            <p className="text-xl text-gray-300">Unsere kommenden Spiele</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              Alle
            </Button>
            <Button
              variant={filter === 'valorant' ? 'default' : 'outline'}
              onClick={() => setFilter('valorant')}
            >
              Valorant
            </Button>
            <Button
              variant={filter === 'league of legends' ? 'default' : 'outline'}
              onClick={() => setFilter('league of legends')}
            >
              LoL
            </Button>
            <Button
              variant={filter === 'cs2' ? 'default' : 'outline'}
              onClick={() => setFilter('cs2')}
            >
              CS2
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMatches.map((match) => (
              <Card
                key={match.id}
                className="text-white hover:scale-105 transition-transform"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm opacity-70">{match.date}</p>
                      <p className="text-xl font-bold">{match.time}</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide">
                      {match.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-2xl mb-2">vs {match.opponent}</CardTitle>
                  <p className="text-yellow-400">
                    {match.game} • {match.type}
                  </p>
                  <Button className="w-full mt-6" variant="outline">
                    Mehr Infos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}