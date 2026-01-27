import { Providers } from "./providers";
import "@/globals.css";
import { Languages } from "./i18n/types";
import CleanupGrammarly from "./components/CleanupGrammarly";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={Languages.EN}>
      <body>
        <Providers>
          <CleanupGrammarly />
          {children}
        </Providers>
      </body>
    </html>
  );
}
