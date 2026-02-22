import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UX Researcher | Human-Centered Design | VR & Emerging Tech",
  description: "Portfolio of a UX Researcher specializing in human-centered design, virtual reality, and emerging technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
