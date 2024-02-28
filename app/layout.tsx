import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Luckiest_Guy } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const luckiest_guy = Luckiest_Guy({ weight: '400',subsets: ['latin'],display: 'swap', });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
        </style>
      </head>
      <body className={luckiest_guy.className}>{children}</body>
    </html>
  );
}
