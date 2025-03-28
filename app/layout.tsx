import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable:'--font-montserrat',
  weight:['400','600','700'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Triwizard Trivia",
  description: "Harry Potter themed PvP Quiz Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
