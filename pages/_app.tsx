import { ChakraProvider } from '@chakra-ui/react'
import system from '@/styles'
import KronosLayout from '@/layouts/kronos'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function MyApp({ Component, pageProps }: AppProps) {
  const gaId = 'G-220V3ZRLLS'

  return (
    <ChakraProvider value={system}>
      <KronosLayout>
        <Component {...pageProps} />
        <GoogleAnalytics gaId={gaId} />
      </KronosLayout>
    </ChakraProvider>
  )
}
