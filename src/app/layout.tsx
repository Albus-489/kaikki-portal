import type { Metadata } from "next";
import "../shared/styles/global.css";
import { NavbarCmp } from '../features/Navbar/Navbar.cmp';

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
        className={`antialiased`}
      >
        <NavbarCmp />
        {children}
      </body>
    </html>
  );
}
