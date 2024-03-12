import Footer from "@/components/uiComponent/Footer";
import Header from "@/components/uiComponent/Header";
import { Inter as FontSans } from "next/font/google";
import React from "react";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main className="bg-[#F6F7F9] dark:bg-transparent min-h-screen">
        <div>{children}</div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default layout;
