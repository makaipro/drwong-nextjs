import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Hawaii Workers' Comp Doctor | Dr. Mankwan Wong MD | Honolulu & Kona",
  description: "Board-certified PM&R physician specializing in Workers' Compensation and auto accident injuries in Hawaii. Serving Honolulu and Kona. Call (808) 942-8727.",
  keywords: "workers comp doctor Hawaii, auto accident doctor Honolulu, IME Hawaii, PM&R specialist Hawaii, work injury doctor Kona",
  openGraph: {
    title: "Dr. Mankwan Wong MD | Hawaii Workers' Comp Specialist",
    description: "Board-certified PM&R physician. Workers' Comp & auto accident injuries. Honolulu & Kona. Call (808) 942-8727.",
    url: "https://www.drmankwanwong.com",
    siteName: "Dr. Mankwan Wong MD",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
