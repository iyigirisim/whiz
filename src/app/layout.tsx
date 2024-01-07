import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hiring from "@/components/Hiring";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whiz for Hire",
  description: "Hiring a whiz has never been easier!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex flex-col overflow-hidden">
          <Navbar />
          <div className="flex-1 overflow-auto px-8 md:px-16 py-4">
            <div className="flex md:flex-row flex-col">
              <div className="w-full md:w-1/2 lg:w-1/3 items-start justify-center mb-8">
                <div className="hiring-container overflow-auto">
                  <Hiring />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-2/3 items-start justify-center">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
