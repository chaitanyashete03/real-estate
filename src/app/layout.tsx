import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dilip Bhandge | Premium Real Estate Agent in Maharashtra",
  description: "Find your dream home with Dilip Bhandge. Explore premium flats, villas, and commercial properties across Pune and Maharashtra.",
};

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrollProvider>
          <Header />
            {children}
          <Footer />
          <WhatsAppCTA />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
