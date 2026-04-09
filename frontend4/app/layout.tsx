import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "NZLCS — NZ Laser Cleaning Solutions",
  description:
    "New Zealand's eco-friendly laser cleaning specialists. Rust, graffiti, and industrial surface prep — chemical-free, precise, and safe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.variable} h-full antialiased`}>
      <body className={`${josefin.className} min-h-full font-sans`}>
        {children}
      </body>
    </html>
  );
}
