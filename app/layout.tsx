import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="de" className={cn("dark", "font-sans", geist.variable)}>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
