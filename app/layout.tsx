import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/site/Footer";
import Navbar from "@/components/site/Navbar";
import WhatsAppButton from "@/components/site/WhatsAppButton";
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
  title: {
    default: "Travel With North | Explore Northern Pakistan",
    template: "%s | Travel With North",
  },
  description:
    "Modern tourism website base structure for Northern Pakistan tours, destinations, and travel planning.",
  keywords: [
    "Northern Pakistan tours",
    "Hunza tour packages",
    "Skardu travel",
    "Naran Kaghan trips",
    "Pakistan tourism",
  ],
  openGraph: {
    title: "Travel With North | Explore Northern Pakistan",
    description:
      "Book curated tours for Hunza, Skardu, Naran Kaghan, and more with trusted local guides.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel With North | Explore Northern Pakistan",
    description:
      "Book curated tours for Hunza, Skardu, Naran Kaghan, and more with trusted local guides.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 pb-24 sm:px-6 sm:py-12 sm:pb-14 lg:px-8 lg:py-14">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
