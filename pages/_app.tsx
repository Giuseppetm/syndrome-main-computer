import { ChakraProvider } from '@chakra-ui/react'
import system from '@/styles'
import KronosLayout from '@/layouts/kronos'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <KronosLayout>
        <Component {...pageProps} />
      </KronosLayout>
    </ChakraProvider>
  )
}
