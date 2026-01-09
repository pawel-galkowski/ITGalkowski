import { ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import theme from "./theme";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "ITGalkowski - Portfolio",
  description: "Professional portfolio showcasing experience, skills, and projects",
  keywords: ["portfolio", "developer", "projects", "experience"],
  author: "ITGalkowski",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "ITGalkowski - Portfolio",
    description: "Professional portfolio showcasing experience, skills, and projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body style={{ padding: 0, margin: 0 }}>
        <ThemeProvider theme={theme}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

