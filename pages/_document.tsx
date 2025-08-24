import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/The-Incredibles-Logo.png" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Giuseppe Del Campo" />

        {/* Ads */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2626937566773847" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-2626937566773847" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
