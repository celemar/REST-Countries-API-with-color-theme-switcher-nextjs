import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Container from "@/components/container";
import Header from "@/components/header";
import Providers from "./providers";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REST Countries API",
  description: "REST Countries API with color theme switcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.className} bg-zinc-100 text-zinc-900 min-h-screen`}
      >
        <Providers>
          <Container>
            <Header />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
