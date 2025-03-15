import type { Metadata } from "next";
import NavbarNav from "@/components/main/NavbarNav";
import "./globals.css";
import localFont from 'next/font/local'

import { ReactLenis } from '@/utils/lenis'
import FooterNav from "@/components/main/FooterNav";

// import MagicCursor from "@/components/main/MagicCursor";

const suisseIntl = localFont({ src: './fonts/Suisse-Intl-normal-300-100.otf' })
// const sfProDisplay = localFont(
//   {
//     src: './fonts/sf/SFPRODISPLAYBOLD.otf',
//     variable: '--sf-pro-display-regular'
//   }
// )
const figtreeBold = localFont({ src: './fonts/figtree/Figtree-Bold.ttf' })

export const metadata: Metadata = {
  title: "Devedem",
  description: "Web Design & Custom Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const myFont = `${sfProDisplay.variable}`
  const footerFont = `${figtreeBold.className}`

  const lenisOptions = {
    lerp: 0.1,
    duration: 2.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  };

  return (
    <html lang="en">
      <ReactLenis root options={lenisOptions}>
        {/* <MagicCursor /> */}
        <body
          className={`${suisseIntl.className} antialiased`}
        >
          <NavbarNav parsedClass={footerFont} />
          {children}
          <FooterNav parsedClass={footerFont} />
        </body>
      </ReactLenis>
    </html>
  );
}
