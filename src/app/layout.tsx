import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackgroundFX from "@/components/BackgroundFX";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pabbathi.dev",
  description: "Venkat Pabbathi's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-50 relative">
        {/* Keep the decorative background fixed behind all page content. */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <BackgroundFX />
        </div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
