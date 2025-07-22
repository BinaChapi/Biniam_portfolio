import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Biniam Mulugeta | Portfolio",
  description: "Web & Mobile App Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}