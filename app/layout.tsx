import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BliZzen – eSport Clan",
  description: "Offizielle Website des eSport Clans BliZzen",
  icons: {
    icon: "/favicon.png",           // ← Dein neues Favicon
    apple: "/favicon.png",          // Für iOS-Geräte
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="dark">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
