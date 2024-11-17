import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
{/*import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'*/}
import Script from "next/script";

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
  metadataBase: new URL("https://taxiieskilstuna.se"),
  keywords: ["taxi","eskilstuna","sweden","sverige","flygplatstaxi","billig taxi","stor taxi","taxi i eskilstuna","snabb taxi","natt taxi","taxi runt 24 timmar"],
};

export default function RootLayout( {children,}: Readonly<{children: React.ReactNode;}> ) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1 width=device-width, initial-scale=1.0, user-scalable=no" />

        {/* start google adsense */}
          <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11471828736"></Script>
          {/* {<GoogleTagManager gtmId="AW-11471828736" />} */}
          <Script id="script-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11471828736');`}
          </Script>
          <Script id="script-conversion" strategy="afterInteractive">
            {`gtag('event', 'conversion', {'send_to': 'AW-11471828736/9ZoLCMzbu-UZEIDumN4q'});`}
          </Script>
        {/* stend google adsense */}

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
          {children}

          {/* start google analysis */}
          {/* {<GoogleAnalytics gaId="AW-11471828736" /> } */}
          {/* start google analysis */}
          
      </body>
    </html>
  );

}
