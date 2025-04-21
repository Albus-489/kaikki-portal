import type { Metadata } from 'next';
import '../shared/styles/global.css';
import { NavbarCmp } from '@/features/navbar/navbar.cmp';
import { ThemeProvider } from '@/shared/model/theme/provider';

export const metadata: Metadata = {
  title: 'Kaikki Portal',
  description: 'Kaikki portal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[var(--color-bg)] text-[var(--color-fg)]`}>
        <ThemeProvider>
          <NavbarCmp />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
