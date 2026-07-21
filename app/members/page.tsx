'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';

export default function Members() {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle('light-mode');
  };

  useEffect(() => {
    async function fetchMembers() {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) console.error(error);
      else setMembers(data || []);

      setLoading(false);
    }

    fetchMembers();
  }, []);

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
            <a href="/members" className="text-yellow-400 font-semibold">Mitglieder</a>
            <a href="/matches" className="hover:text-yellow-400 transition">Matches</a>
            <a href="/events" className="hover:text-yellow-400 transition">Events</a>
            <a href="/erfolge" className="hover:text-yellow-400 transition">Erfolge</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="w-11 h-11 rounded-full bg-gradient-to-br from-[#110222] to-[#b00677] flex items-center justify-center text-2xl shadow-lg border border-white/30 hover:scale-110 transition">⚡</button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-3xl p-2">
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* MEMBERS CONTENT */}
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Unser Clan</h1>
            <p className="text-xl text-gray-400">Die aktiven Mitglieder von BliZzen</p>
          </div>

          {loading ? (
            <p className="text-center">Lade Mitglieder...</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {members.map((member) => (
                <Card key={member.id} className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-5xl">
                      👤
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-yellow-400 text-sm mt-1">{member.role}</p>
                    <p className="text-sm opacity-70 mt-4">{member.game}</p>
                    <p className="text-xs mt-2">{member.status}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}