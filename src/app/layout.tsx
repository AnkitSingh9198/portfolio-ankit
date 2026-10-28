import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Singh — Full Stack Developer | React · Next.js · Node.js",
  description:
    "Full Stack Developer with ~2 years shipping production web & mobile apps — React.js, TypeScript, Node.js, Express.js, MongoDB. WebRTC healthcare platforms, insurance API integrations, e-commerce & booking systems.",
  keywords: [
    "Ankit Singh",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "TypeScript",
    "MongoDB",
    "WebRTC",
    "Noida",
  ],
  authors: [{ name: "Ankit Singh" }],
  creator: "Ankit Singh",
  metadataBase: new URL("https://ankitsingh.dev"),
  openGraph: {
    type: "website",
    title: "Ankit Singh — I build digital experiences that move people",
    description:
      "Full Stack Developer crafting performant, scalable, beautifully engineered web experiences. React · Next.js · Node · Express · MongoDB.",
    siteName: "Ankit Singh — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Singh — Full Stack Developer",
    description: "React · Next.js · Node.js · Express · MongoDB — healthcare, insurance, e-commerce.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#070809",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ankit Singh",
  jobTitle: "Full Stack Developer",
  address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  email: "mailto:ankitsingh110198@gmail.com",
  telephone: "+91 8586846184",
  url: "https://ankitsingh.dev",
  sameAs: ["https://linkedin.com/in/ankit-singh-32371a167", "https://drdermat.com", "https://zanifestinsurance.com"],
  knowsAbout: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "WebRTC", "React Native"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-[#070809] text-[#f4f1e8] antialiased selection:bg-[#d7ff3e]">
        {children}
      </body>
    </html>
  );
}
