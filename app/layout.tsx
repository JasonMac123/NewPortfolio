import "./globals.css";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/activeSectionContext";

import { Toaster } from "react-hot-toast";
import Footer from "@/components/Sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jason Mac | Web Developer",
  description: "Jason Mac's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#f0f1ef] text-gray-950 relative pt-24 sm:pt-28 lg:pt-32`}
      >
        <div className="bg-[#d7eafb] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#e2fbf9] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Toaster />
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
