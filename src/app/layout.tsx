import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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
  metadataBase: new URL("https://taxiieskilstuna.com"),
  keywords: ["taxi","eskilstuna","sweden","sverige","flygplatstaxi","billig taxi","stor taxi","taxi i eskilstuna","snabb taxi","natt taxi","taxi runt 24 timmar"],
};

export default function RootLayout( {children,}: Readonly<{children: React.ReactNode;}> ) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        {/* google-site-verification */}
        <meta name="google-site-verification" content="4JBMoAWxJqBBX5yDjYNmu7IAyx2ZJ_GYkmiX4Zbe5rs" />
        {/* show website's title on social media */}
        <meta property="og:title" content="Taxi i Eskilstuna" key="title" />

        {/* start google adsense */}
          <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11471828736"></Script>
          <Script id="script-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11471828736');`}
          </Script>
          <Script id="script-conversion" strategy="afterInteractive">
            {`gtag('event', 'conversion', {'send_to': 'AW-11471828736/9ZoLCMzbu-UZEIDumN4q'});`}
          </Script>
        {/* end google adsense */}

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
          {/* Start Clixtell Tracking Code */}
          <Script id="clixtell-tracking" strategy="afterInteractive" dangerouslySetInnerHTML={{
              __html: `
                  var script=document.createElement('script');
                  var prefix=document.location.protocol;
                  script.async=true;script.type='text/javascript';
                  var target=prefix + '//scripts.clixtell.com/track.js';
                  script.src=target;var elem=document.head;
                  elem.appendChild(script);
              `
          }} />
          <noscript><img src='//tracker.clixtell.com/track/t.gif'/></noscript>
          {/* End Clixtell Tracking Code */}             
          {children}
      </body>
    </html>
  );

}
