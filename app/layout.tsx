import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "ITGalkowski - Portfolio",
  description: "Professional portfolio showcasing experience, skills, and projects",
  keywords: ["portfolio", "developer", "projects", "experience"],
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
      <body style={{ padding: 0, margin: 0 }} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

