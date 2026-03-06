import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Tanmay Manda — CS Student & AI Developer",
  description:
    "Portfolio of Tanmay Manda — Computer Science Student, AI & Data Enthusiast, and Web Developer. Building intelligent systems and modern web applications.",
  keywords: ["Tanmay Manda", "portfolio", "AI developer", "web developer", "computer science", "machine learning", "Next.js", "React"],
  authors: [{ name: "Tanmay Manda" }],
  openGraph: {
    title: "Tanmay Manda | Portfolio",
    description: "Passionate about building intelligent systems and solving real-world problems using AI and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
