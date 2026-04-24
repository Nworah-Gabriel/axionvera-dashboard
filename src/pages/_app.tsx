import type { AppProps } from "next/app";
import { Toaster } from 'sonner';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

import "@/styles/globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ThemeProvider as AppThemeProvider } from "@/contexts/ThemeContext";
import { WalletProvider } from "@/contexts/WalletContext";
import ThemeToggle from "@/components/ThemeToggle";

import { useEffect } from "react";
import { initTelemetry } from "@/utils/telemetry";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initTelemetry();
  }, []);

  return (
    <ErrorBoundary>
      <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AppThemeProvider>
          <WalletProvider>
            <Component {...pageProps} />
            <ThemeToggle />
            <Toaster
              position="top-right"
              richColors
              closeButton
              duration={4000}
            />
          </WalletProvider>
        </AppThemeProvider>
      </NextThemeProvider>
    </ErrorBoundary>
  );
}
