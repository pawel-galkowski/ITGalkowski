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
import LanguageInitializer from "../components/LanguageInitializer";

export default function LangLayout(
  props: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>
) {
  const { children } = props;
  const params = React.use(props.params);
  const initialLanguage = params.lang === Languages.PL ? Languages.PL : Languages.EN;

  return (
    <>
      <LanguageInitializer initialLanguage={initialLanguage} />
      {children}
    </>
  );
}
