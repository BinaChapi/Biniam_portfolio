import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "../../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

const baseUrl = "https://biniamportfolio.vercel.app";

export const metadata: Metadata = {
  title: "Biniam Mulugeta | Full Stack Developer | Web3 & Blockchain",
  description:
    "Biniam Mulugeta is a Full Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, Web3 & Blockchain. Explore projects, skills, and experience.",
  keywords: [
    "Biniam Mulugeta",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web3 Developer",
    "Blockchain Developer",
    "Solidity Developer",
    "Ethereum Developer",
    "MERN Stack",
    "React Native",
    "Mulugeta",
    "Biniam",
    "Biniam Mulugeta",
    "Addis Ababa Developer",
    "Ethiopia Developer",
  ],
  openGraph: {
    title: "Biniam Mulugeta | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and Web3 & Blockchain.",
    url: baseUrl,
    siteName: "Biniam Mulugeta Portfolio",
    images: [
      {
        url: `${baseUrl}/images/Biniam.png`,
        width: 800,
        height: 800,
        alt: "Biniam Mulugeta Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biniam Mulugeta | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and Web3 & Blockchain.",
    images: [`${baseUrl}/images/Biniam.png`],
    creator: "@BinaChapi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="DVSsXWxUgICVwfFPkX5erhdFsOW141YclOQ5OHIFQdw"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Biniam Mulugeta",
              jobTitle: "Full Stack Developer",
              url: baseUrl,
              email: "bmulugeta452@gmail.com",
              telephone: "+251 939 69 1485",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Addis Ababa",
                addressCountry: "ET",
              },
              sameAs: [
                "https://github.com/BinaChapi",
                "https://linkedin.com/in/binachapi",
                "https://twitter.com/BinaChapi",
                "https://t.me/BinaChapi",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
