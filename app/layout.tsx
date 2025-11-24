import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/Footer";

// Keep this if you want to use the font
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Vinh Phu's Portfolio",
  description: "Portfolio website to showcase the projects and resume",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
