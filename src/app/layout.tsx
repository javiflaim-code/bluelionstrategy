import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "AI-Powered Marketing Systems for Growing Businesses | Blue Lion Strategy",
    template: "%s | Blue Lion Strategy",
  },
  description:
    "Blue Lion Strategy deploys AI marketing agents that attract customers, create content, and accelerate growth — without increasing headcount. Get your free Growth Assessment.",
  openGraph: {
    type: "website",
    siteName: "Blue Lion Strategy",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-space-indigo">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
