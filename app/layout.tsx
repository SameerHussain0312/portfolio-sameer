import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sameer Hussain | Portfolio",
  description: "Senior Full-Stack Developer & UI/UX Designer. BS Computer Science from NUST.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-accent/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
