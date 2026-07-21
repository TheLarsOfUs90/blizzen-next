'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const events = [
  {
    id: 1,
    title: "Clan-Treffen Sommer 2026",
    date: "15. August 2026",
    time: "18:00 Uhr",
    location: "Discord + LAN-Party",
    description: "Großes Sommer-Treffen mit Turnier und Community-Nacht.",
    type: "Community"
  },
  {
    id: 2,
    title: "Valorant Turnier",
    date: "22. August 2026",
    time: "19:00 Uhr",
    location: "Online",
    description: "Internes Clan-Turnier mit Preisgeld.",
    type: "Turnier"
  },
];

export default function Events() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('light-mode');
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

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => window.location.href = '/#home'} className="hover:text-yellow-400 transition">Home</button>
            <button onClick={() => window.location.href = '/#about'} className="hover:text-yellow-400 transition">Über uns</button>
            <a href="/members" className="hover:text-yellow-400 transition">Mitglieder</a>
            <a href="/matches" className="hover:text-yellow-400 transition">Matches</a>
            <a href="/events" className="text-yellow-400 font-semibold">Events</a>
            <a href="/erfolge" className="hover:text-yellow-400 transition">Erfolge</a>
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
              <a href="/members" className="hover:text-yellow-400">Mitglieder</a>
              <a href="/matches" className="hover:text-yellow-400">Matches</a>
              <a href="/events" className="text-yellow-400">Events</a>
              <a href="/erfolge" className="hover:text-yellow-400">Erfolge</a>
            </div>
          </div>
        )}
      </nav>

      {/* EVENTS CONTENT */}
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Events</h1>
            <p className="text-xl text-gray-400">Unsere kommenden Veranstaltungen</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map(event => (
              <Card key={event.id} className="hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm opacity-70">{event.date}</p>
                      <p className="text-xl font-bold">{event.time}</p>
                    </div>
                    <Badge variant="secondary">{event.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-2xl mb-3">{event.title}</CardTitle>
                  <p className="text-gray-400 mb-6">{event.description}</p>
                  <p className="text-sm opacity-70">Ort: {event.location}</p>
                  <Button className="w-full mt-6">Zusagen</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}