import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
// import { URL } from "url";

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
        <meta name="viewport" content="width=device-width, initial-scale=1width=device-width, initial-scale=1.0, user-scalable=no" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11471828736">
          </script>
          <GoogleTagManager gtmId="AW-11471828736" />    
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
          {children}
          <GoogleAnalytics gaId="AW-11471828736" /> 
      </body>
    </html>
  );

}
