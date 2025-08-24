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
        <meta name="author" content="Giuseppe Del Campo" />

        {/* Ads */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2626937566773847" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-2626937566773847"></meta>

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
