import system from '@/styles'
import MainLayout from '@/layouts/main'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from '@next/third-parties/google'
import { eurostile } from '@/assets/fonts'
import { Analytics as VercelAnalytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function MyApp({ Component, pageProps }: AppProps) {
  const gaId = 'G-220V3ZRLLS'

  return (
    <ChakraProvider value={system}>
      <MainLayout className={eurostile.className}>
        <Component {...pageProps} />
        <GoogleAnalytics gaId={gaId} />
        <VercelAnalytics />
        <SpeedInsights />
      </MainLayout>
    </ChakraProvider>
  )
}
