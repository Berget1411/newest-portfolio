"use client";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <ThemeProvider
        enableSystem={true}
        attribute="class"
        storageKey="theme"
        defaultTheme="system"
      >
        {children}
      </ThemeProvider>
    </>
  );
}
