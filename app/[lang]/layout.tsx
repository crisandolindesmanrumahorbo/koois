import "../globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { allMessages } from "../appRouterI18n";
import { LinguiClientProvider } from "../LinguiClientProvider";
import { initLingui, PageLangParam } from "../initLingui";
import { PropsWithChildren } from "react";
import { ThemeProviders } from "../theme/theme-provider";
import TanstackProvider from "../utils/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koois",
  description: "Feel and Learn",
};

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<PageLangParam>) {
  const lang = (await params).lang;
  initLingui(lang);
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LinguiClientProvider
          initialLocale={lang}
          initialMessages={allMessages[lang]!}
        >
          <ThemeProviders>
            <TanstackProvider>{children}</TanstackProvider>
          </ThemeProviders>
        </LinguiClientProvider>
      </body>
    </html>
  );
}
