import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "../../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

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
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
