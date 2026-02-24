import { Providers } from "./providers";
import "./globals.css";
import { Languages } from "./i18n/types";
import CleanupGrammarly from "./components/CleanupGrammarly";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={Languages.EN} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <CleanupGrammarly />
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
