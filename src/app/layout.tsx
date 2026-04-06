import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingButtons } from "../components/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhandgerealty.com"),
  title: {
    default: "Dilip Bhandge | Premium Real Estate Agent in Pune",
    template: "%s | Dilip Bhandge Real Estate",
  },
  description:
    "Find your dream home in Pune with Dilip Bhandge — 15+ years of trust, transparency and premium real estate expertise. RERA certified. Buy, Sell & Rent properties in Wakad, Hinjewadi, Baner, Kothrud and more.",
  keywords: [
    "real estate agent pune",
    "flats in pune",
    "buy flat pune",
    "rent apartment pune",
    "sell property pune",
    "hinjewadi property",
    "wakad flats",
    "rera certified pune",
  ],
  authors: [{ name: "Dilip Bhandge" }],
  creator: "Dilip Bhandge Real Estate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bhandgerealty.com",
    siteName: "Dilip Bhandge Real Estate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className={inter.className}>
        <SmoothScrollProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:font-semibold"
          >
            Skip to main content
          </a>

          <Header />
          {children}
          <Footer />
          <FloatingButtons />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
