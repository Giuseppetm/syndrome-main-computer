import { ChakraProvider } from '@chakra-ui/react'
import system from '@/styles'
import MainLayout from '@/layouts/main'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from '@next/third-parties/google'
import { eurostile } from '@/assets/fonts'

export default function MyApp({ Component, pageProps }: AppProps) {
  const gaId = 'G-220V3ZRLLS'

  return (
    <ChakraProvider value={system}>
      <MainLayout className={eurostile.className}>
        <Component {...pageProps} />
        <GoogleAnalytics gaId={gaId} />
      </MainLayout>
    </ChakraProvider>
  )
}
