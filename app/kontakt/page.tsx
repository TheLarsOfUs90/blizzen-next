'use client';

import { useState } from 'react';

export default function Kontakt() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4 text-center">Kontakt / Clan beitreten</h1>
        <p className="text-center text-lg mb-12 text-gray-400">
          Wir melden uns so schnell wie möglich bei dir.
        </p>

        {isSubmitted ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold mb-4">Vielen Dank!</h2>
            <p className="text-xl">Deine Nachricht wurde gesendet.<br />Wir melden uns bald bei dir.</p>
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
            <input 
              type="text" 
              name="name"
              placeholder="Dein Name" 
              required
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:border-yellow-400 focus:outline-none text-white placeholder-gray-400"
            />
            
            <input 
              type="email" 
              name="email"
              placeholder="Deine E-Mail Adresse" 
              required
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:border-yellow-400 focus:outline-none text-white placeholder-gray-400"
            />
            
            <textarea 
              name="message"
              placeholder="Deine Nachricht / Warum möchtest du beitreten?" 
              rows={8}
              required
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:border-yellow-400 focus:outline-none text-white placeholder-gray-400"
            ></textarea>

            <button 
              type="submit"
              className="w-full py-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-2xl text-xl hover:scale-105 transition-all shadow-lg"
            >
              Nachricht senden
            </button>
          </form>
        )}
      </div>
    </main>
  );
}