export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10">Impressum</h1>
        
        <div className="prose prose-invert max-w-none">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            BliZzen eSport Clan<br />
            Max Mustermann<br />
            Musterstraße 123<br />
            12345 Musterstadt
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 123 456789<br />
            E-Mail: info@blizzen.de<br />
          </p>

          <h2>Verantwortlich für den Inhalt</h2>
          <p>Max Mustermann</p>

          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
        </div>
      </div>
    </main>
  );
}