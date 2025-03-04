import type { Metadata } from "next";
import NavbarNav from "@/components/main/NavbarNav";
import "./globals.css";
import localFont from 'next/font/local'

const suisseIntl = localFont({ src: './fonts/Suisse-Intl-normal-300-100.otf' })

export const metadata: Metadata = {
  title: "Devedem",
  description: "Web Design & Custom Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${suisseIntl.className} antialiased`}
      >
        <NavbarNav />
        {children}
      </body>
    </html>
  );
}
