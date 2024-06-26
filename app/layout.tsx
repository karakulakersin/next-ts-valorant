import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from '@/redux/Provider';
import Navbar from "@/components/navbar"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valorant Agent List",
  description: "Valorant Agent List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className} >
      <Navbar/>
      <Providers>
        <div>
          {children}
        </div>
      </Providers>
      </body>
      </html>
  );
}
