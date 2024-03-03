import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/uiComponent/Header";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/uiComponent/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Welcome to EtCarWoW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <header>
          <Header />
        </header>
        <main className="bg-[#F6F7F9] min-h-screen">
          <div>{children}</div>
        </main>
        <footer>
          <Footer />
        </footer>
        <ToastContainer />
      </body>
    </html>
  );
}
