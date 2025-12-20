import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Giuseppe Del Campo" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
