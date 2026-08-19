import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Image from 'next/image';
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Taxi i Eskilstuna",
  description: "ett billigt Taxi företag i Eskiltuna i Sverige, cheaper taxi in Eskilstuna in Sweden",
  metadataBase: new URL("https://taxiieskilstuna.com"),
  keywords: [
    "taxi", "eskilstuna", "sweden", "sverige", "flygplats taxi", "billig taxi", "stor taxi",
     "taxi i eskilstuna", "snabb taxi", "natt taxi", "taxi runt 24 timmar", "Västerås flygplats",
      "Skavsta flygplats", "Arlanda flygplats", "Stockholm", "Bromma flygplats"
    ],
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="sv">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        {/* google-site-verification */}
        <meta name="google-site-verification" content="4JBMoAWxJqBBX5yDjYNmu7IAyx2ZJ_GYkmiX4Zbe5rs" />
        {/* show website's title on social media */}
        <meta property="og:title" content="Taxi i Eskilstuna" key="title" />

        {/* start Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-674459134"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-674459134');
          `}
        </Script>
        {/* end Google Ads */}

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
