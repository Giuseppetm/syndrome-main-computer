// import { eurostileBold, eurostileRegular } from '@/styles/fonts'
import Fonts from '@/styles/fonts'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/The-Incredibles-Logo.png" />
      </Head>
      <body>
        <Fonts />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
