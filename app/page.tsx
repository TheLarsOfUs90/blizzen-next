'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  }, [isLightMode]);

  // Auto-hide success message after 6 seconds
  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  // Scroll to contact form
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <main className={`min-h-screen transition-all ${isLightMode ? 'light-mode' : 'bg-gradient-to-br from-[#110222] via-[#6b0080] to-[#b00677]'}`}>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 hover:scale-105 transition">
            <span className="text-3xl">⚡</span>
            <span className="text-2xl font-bold tracking-tight">BliZzen</span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('home')} className={`hover:text-yellow-400 transition ${activeSection === 'home' ? 'text-yellow-400' : ''}`}>Home</button>
            <button onClick={() => scrollToSection('about')} className={`hover:text-yellow-400 transition ${activeSection === 'about' ? 'text-yellow-400' : ''}`}>Über uns</button>
            <button onClick={() => scrollToSection('matches')} className={`hover:text-yellow-400 transition ${activeSection === 'matches' ? 'text-yellow-400' : ''}`}>Matches</button>
            <button onClick={() => scrollToSection('erfolge')} className={`hover:text-yellow-400 transition ${activeSection === 'erfolge' ? 'text-yellow-400' : ''}`}>Erfolge</button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="w-11 h-11 rounded-full bg-gradient-to-br from-[#110222] to-[#b00677] flex items-center justify-center text-2xl shadow-lg border border-white/30 hover:scale-110 transition">⚡</button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-3xl p-2">
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="home" className="pt-24 pb-24 md:pb-40 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">BliZzen eSport</h1>
          <img src="/logo_blizzen.jpg" alt="BliZzen Logo" className="mx-auto my-10 w-56 md:w-72 drop-shadow-2xl" />
          <p className="text-xl md:text-3xl max-w-md mx-auto opacity-90 mb-10">
            Der eSport Clan, der zusammen gewinnt.
          </p>
          
          {/* Button springt zum Kontaktformular */}
          <button 
            onClick={scrollToContact}
            className="px-12 py-5 bg-white text-black rounded-full text-xl font-semibold hover:bg-yellow-300 hover:scale-105 transition-all shadow-lg"
          >
            Jetzt dem Clan beitreten
          </button>
        </div>
      </header>

      {/* ÜBER UNS */}
      <section id="about" className="about-section py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title">Über BliZzen</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Wir sind ein leidenschaftlicher eSport Clan aus Deutschland. 
            Gemeinsam trainieren, spielen und wachsen wir in verschiedenen Games.
          </p>
        </div>
      </section>

      {/* MATCHES */}
      <section id="matches" className="py-20 bg-black/40">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="section-title">Nächste Matches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card text-center">
              <p className="text-sm opacity-70">Samstag • 20:00 Uhr</p>
              <p className="text-2xl font-bold mt-3">BliZzen vs Shadow Legion</p>
              <p className="mt-6 text-yellow-400">Valorant • Ranked</p>
            </div>
            <div className="card text-center">
              <p className="text-sm opacity-70">Sonntag • 18:00 Uhr</p>
              <p className="text-2xl font-bold mt-3">BliZzen vs Neon Knights</p>
              <p className="mt-6 text-yellow-400">League of Legends</p>
            </div>
          </div>
        </div>
      </section>

      {/* ERFOLGE */}
      <section id="erfolge" className="success-section py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="section-title">Unsere Erfolge</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="card text-center">
              <div className="text-7xl mb-6">🏆</div>
              <p className="text-4xl font-bold">1. Platz</p>
              <p className="opacity-75 mt-3">Regional Championship 2025</p>
            </div>
            <div className="card text-center">
              <div className="text-7xl mb-6">🔥</div>
              <p className="text-4xl font-bold">Top 8</p>
              <p className="opacity-75 mt-3">National League</p>
            </div>
            <div className="card text-center">
              <div className="text-7xl mb-6">👥</div>
              <p className="text-4xl font-bold">150+</p>
              <p className="opacity-75 mt-3">Aktive Mitglieder</p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT FORMULAR */}
      <section id="contact-form" className="py-20 bg-black/40">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="section-title">Jetzt beitreten</h2>
          <p className="text-center text-gray-400 mb-12">Schick uns eine Nachricht – wir melden uns schnell!</p>

          {formSubmitted ? (
            <div className="text-center py-16 animate-in fade-in duration-700">
              <div className="text-7xl mb-6">🎉</div>
              <h3 className="text-3xl font-bold mb-4">Vielen Dank!</h3>
              <p className="text-xl text-green-400">Deine Anfrage wurde erfolgreich gesendet.</p>
              <p className="mt-4 text-gray-400">Wir melden uns in den nächsten Tagen bei dir.</p>
            </div>
          ) : (
            <form 
              action="https://formspree.io/f/xvznlnge"
              method="POST"
              onSubmit={(e) => {
              // Formspree braucht kein preventDefault
                setTimeout(() => setFormSubmitted(true), 800);
              }}
              className="space-y-6"
            >
              <input type="text" name="name" placeholder="Dein Name" required className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:border-yellow-400 focus:outline-none text-white placeholder-gray-400" />
              <input type="email" name="email" placeholder="Deine E-Mail" required className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:border-yellow-400 focus:outline-none text-white placeholder-gray-400" />
              <textarea name="message" placeholder="Warum möchtest du bei BliZzen mitmachen?" rows={6} required className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:border-yellow-400 focus:outline-none text-white placeholder-gray-400"></textarea>
              
              <button type="submit" className="w-full py-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-2xl text-xl hover:scale-105 transition-all shadow-lg">
                Anfrage senden
              </button>
            </form>
            
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm opacity-70">&copy; 2026 BliZzen eSport Clan • Alle Rechte vorbehalten</p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm opacity-70">
            <a href="/impressum" className="hover:text-white">Impressum</a>
            <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
            <a href="/kontakt" className="hover:text-white">Kontakt</a>
          </div>
        </div>
      </footer>
    </main>
  );
}