import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} ${greatVibes.variable} bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
