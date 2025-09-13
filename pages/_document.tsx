import { omnidroids, supers, supersResult } from '@/data'
import { soundMap } from '@/hooks/sound'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  // Collect all image paths from supers + omnidroids; also collect audio sounds.
  const preloadImages = [
    ...omnidroids.map((o) => `/images/omnidroids/${o.img}`),
    ...supers.map((s) => `/images/supers/${s.img}`),
    ...supersResult.map((s) => `/images/search-results/${s.img}`),
    ...Object.values(soundMap),
  ]

  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Giuseppe Del Campo" />

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
