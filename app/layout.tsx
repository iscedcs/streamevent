import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Elder David Okoobo Ovienria JP | 1940 - 2024",
  description: "Created with love by family and friends",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
          <NavBar />
          <main className="container mx-auto px-4 py-8">{children}</main>
          {/* <FloatingElements initialWishes={initialWishes} /> */}
          <footer className="bg-white bg-opacity-90 mt-12 py-6">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>
                In loving memory of Elder David Okoobo Ovienria JP | 1940 - 2024
              </p>
              <p className="mt-2">Created with love by family and friends</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}


