import type { Metadata } from "next";
import "../shared/styles/global.css";
import { NavbarCmp } from '../features/navbar/navbar.cmp';
import { ThemeSwitcher } from "@/features/theme-switcher/ui";
import { ThemeProvider } from "@/shared/model/theme/provider";

export const metadata: Metadata = {
  title: "Kaikki Portal",
  description: "Kaikki portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[var(--color-bg)]`}
      >
        <ThemeProvider>
        <NavbarCmp />
        <ThemeSwitcher />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
