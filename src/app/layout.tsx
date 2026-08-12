"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HangingCTA from "@/components/Common/HangingCTA";
import ScrollToTop from "@/components/ScrollToTop";
import { Sora } from "next/font/google";
import Script from "next/script";
import "../styles/index.css";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18223576133"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18223576133');
          `}
        </Script>
        <Script id="tel-click-conversion" strategy="afterInteractive">
          {`
            (function(){
                document.addEventListener('click', function(e){
                if(e.target.closest('a[href^="tel:"]')){
                    gtag('event', 'conversion', {'send_to': 'AW-18223576133/xuRYCLjQg9IcEMXo1vFD'});
                    CG.conversion();
                    initCCConvertion();
                }
                });
            })();
          `}
        </Script>
        <Script id="whatsapp-click-conversion" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e){
              if(e.target.closest('a[href^="https://wa.me/"]')){
                gtag('event', 'conversion', {'send_to': 'AW-18223576133/IABYCPi-idIcEMXo1vFD'});
                CG.conversion();
                initCCConvertion();
              }
            });
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18333851092"
          strategy="afterInteractive"
        />
        <Script id="gtag-init-2" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18333851092');
          `}
        </Script>
        <Script id="tel-click-conversion-2" strategy="afterInteractive">
          {`
            (function(){
                document.addEventListener('click', function(e){
                if(e.target.closest('a[href^="tel:"]')){
                    gtag('event', 'conversion', {'send_to': 'AW-18333851092/1XjSCPjyh9kcENS7oaZE'});
                    CG.conversion();
                    initCCConvertion();
                }
                });
            })();
          `}
        </Script>
        <Script id="whatsapp-click-conversion-2" strategy="afterInteractive">
          {`
            (function(){
                document.addEventListener('click', function(e){
                if(e.target.closest('a[href^="https://wa.me/"]')){
                    gtag('event', 'conversion', {'send_to': 'AW-18333851092/yA1nCOuqreAcENS7oaZE'});
                    CG.conversion();
                    initCCConvertion();
                }
                });
            })();
          `}
        </Script>
      </head>

      <body className={`bg-black ${sora.className}`}>
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <HangingCTA />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

