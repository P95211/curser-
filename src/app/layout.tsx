import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GlobalExport - Premium Indian Exports to Global Markets",
  description: "Leading Indian export company with 15+ years of experience delivering high-quality products to 50+ countries. ISO certified, competitive pricing, complete documentation support.",
  keywords: "Indian exports, global trade, export company, ISO certified, international business, Made in India, export services, global markets",
  authors: [{ name: "GlobalExport" }],
  openGraph: {
    title: "GlobalExport - Premium Indian Exports",
    description: "Your trusted partner for high-quality exports from India to global markets",
    url: "https://globalexport.com",
    siteName: "GlobalExport",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GlobalExport - Premium Indian Exports",
    description: "Your trusted partner for high-quality exports from India to global markets",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}