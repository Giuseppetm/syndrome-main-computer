// import { Analytics as VercelAnalytics } from '@vercel/analytics/next'
// import { SpeedInsights } from '@vercel/speed-insights/next'
import system from '@/styles'
import MainLayout from '@/layouts/main'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { eurostile } from '@/assets/fonts'
import { useEffect, useState } from 'react'
import { soundMap } from '@/hooks/sound'
import { gaId, theIncrediblesPreloadImages } from '@/data'
import { UNIVERSE_IDS } from '@/types'
import { useMainStore } from '@/store'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { universe } = useMainStore()
  const [preloadImages, setPreloadImages] = useState<Array<string>>([])

  useEffect(() => {
    // Preload images when universe changes
    if (universe.id === UNIVERSE_IDS.THE_INCREDIBLES) {
      setPreloadImages([...theIncrediblesPreloadImages, ...Object.values(soundMap)])
    }
  }, [universe])

  return (
    <ChakraProvider value={system}>
      <Head>
        {preloadImages.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
      </Head>

      <MainLayout className={eurostile.className}>
        <Component {...pageProps} />
        <GoogleAnalytics gaId={gaId} />
        {/* <VercelAnalytics /> */}
        {/* <SpeedInsights /> */}
      </MainLayout>
    </ChakraProvider>
  )
}
