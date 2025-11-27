import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AM Seafood | Premium American-Caught Seafood",
    template: "%s | AM Seafood",
  },
  description:
    "American Made Seafood - Premium, sustainably sourced seafood from American fisheries. Serving restaurants, distributors, and culinary professionals nationwide from Fernandina Beach, Florida.",
  keywords: [
    "seafood",
    "wholesale seafood",
    "American seafood",
    "Gulf shrimp",
    "fresh fish",
    "sustainable seafood",
    "Fernandina Beach",
    "Florida seafood",
  ],
  authors: [{ name: "American Made Seafood" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amseafood.com",
    siteName: "AM Seafood",
    title: "AM Seafood | Premium American-Caught Seafood",
    description:
      "American Caught. American Made. Premium seafood sourced directly from American fisheries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
