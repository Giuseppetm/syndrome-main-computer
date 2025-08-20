import { omnidroids, supers, supersResult } from '@/data'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  // Collect all image paths from supers + omnidroids
  const preloadImages = [
    ...omnidroids.map((o) => `/images/omnidroids/${o.img}`),
    ...supers.map((s) => `/images/supers/${s.img}`),
    ...supersResult.map((s) => `/images/search-results/${s.img}`),
  ]

  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/The-Incredibles-Logo.png" />
        <meta property="og:type" content="website" />

        {/* Preload fonts */}
        <link rel="preload" href="/fonts/Eurostile-BoldExtendedTwo.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Eurostile-ExtendedTwo.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Eurostile-BoldExtendedTwo.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Eurostile-ExtendedTwo.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Eurostile-BoldExtendedTwo.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Eurostile-ExtendedTwo.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />

        {/* Preload all static images */}
        {preloadImages.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
