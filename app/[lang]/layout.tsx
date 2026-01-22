import { Providers } from "../providers";
import { Languages } from "../i18n/types";
import type { Metadata } from "next";
import "@/index.module.css";

export const metadata: Metadata = {
  title: "ITGalkowski - Portfolio",
  description: "Professional portfolio showcasing experience, skills, and projects",
  keywords: ["portfolio", "developer", "projects", "experience"],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    title: "ITGalkowski - Portfolio",
    description: "Professional portfolio showcasing experience, skills, and projects",
  },
};

export default function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const initialLanguage =
    params.lang === Languages.PL ? Languages.PL : Languages.EN;

  return (
    <html lang={initialLanguage}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body
        style={{
          padding: 0,
          margin: 0,
          width: "100vw",
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
