import { Providers } from "../providers";
import { Languages } from "../i18n/types";
import type { Metadata } from "next";
import "@/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://itgalkowski.pl'),
  title: {
    default: "ITGalkowski - Expert IT Solutions & Professional Portfolio",
    template: "%s | ITGalkowski",
  },
  description: "Professional IT portfolio showcasing innovative solutions, extensive experience, and cutting-edge projects. Specializing in web development, software engineering, and digital transformation.",
  keywords: [
    "portfolio",
    "developer",
    "IT solutions",
    "web development",
    "software engineer",
    "full-stack developer",
    "projects",
    "experience",
    "innovation",
    "technology",
    "digital transformation",
  ],
  authors: [{ name: "ITGalkowski" }],
  creator: "ITGalkowski",
  publisher: "ITGalkowski",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pl_PL"],
    url: "/",
    siteName: "ITGalkowski",
    title: "ITGalkowski - Expert IT Solutions & Professional Portfolio",
    description: "Professional IT portfolio showcasing innovative solutions, extensive experience, and cutting-edge projects. Specializing in web development, software engineering, and digital transformation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ITGalkowski Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITGalkowski - Expert IT Solutions & Professional Portfolio",
    description: "Professional IT portfolio showcasing innovative solutions, extensive experience, and cutting-edge projects.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      'en': '/en',
      'pl': '/pl',
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

import React from "react";

export default function LangLayout(
  props: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>
) {
  const { children } = props;
  const params = React.use(props.params);
  const initialLanguage = params.lang === Languages.PL ? Languages.PL : Languages.EN;

  return (
    <html lang={initialLanguage ?? Languages.EN} style={{ scrollBehavior: "smooth" }}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1F2629" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "ITGalkowski",
              "description": "Professional IT solutions and software development services",
              "url": process.env.NEXT_PUBLIC_SITE_URL || "https://itgalkowski.pl",
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
              "sameAs": [
                "https://linkedin.com/in/itgalkowski",
                "https://github.com/itgalkowski",
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PL"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Polish"]
              }
            })
          }}
        />
      </head>
      <body
        style={{
          padding: 0,
          margin: 0,
          width: "100vw",
          maxWidth: "100vw",
          boxSizing: "border-box",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
        suppressHydrationWarning
      >
        <Providers initialLanguage={initialLanguage}>{children}</Providers>
      </body>
    </html>
  );
}
