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
  keywords: ["taxi", "eskilstuna", "sweden", "sverige", "flygplatstaxi", "billig taxi", "stor taxi", "taxi i eskilstuna", "snabb taxi", "natt taxi", "taxi runt 24 timmar"],
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <head>
        {/* <!-- Fraud Blocker Tracker --> */}
        <Script id="fraudblocker-script-loader" type="text/javascript"
          strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `
                (function () {
                  var s = document.createElement("script");
                  var h = document.head;
                  s.async = true;
                  s.src = "https://monitor.fraudblocker.com/fbt.js?sid=gNd1rsNNeneUmQHp8MROG";
                  h.appendChild(s);
                })();
              `
          }} />
        {/* <!-- End Fraud Blocker Tracker --> */}
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
        {/* <!-- Fraud Blocker Tracker --> */}
        <noscript>
          <Link
            href="https://fraudblocker.com"
            rel="nofollow"
          >
            <Image
              src="https://monitor.fraudblocker.com/fbt.gif?sid=gNd1rsNNeneUmQHp8MROG"
              alt="Fraud Blocker"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              unoptimized
              priority
            />
          </Link>
        </noscript>
        {/* <!-- End Fraud Blocker Tracker --> */}
        {children}
      </body>
    </html>
  );
}
