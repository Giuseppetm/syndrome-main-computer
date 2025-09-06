import { Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'

const Countdown = () => {
  return (
    <>
      <Head>
        <title>Countdown Page</title>
        <meta name="description" content="" />
      </Head>
      <Stack>
        <Text textStyle="regular" color="{colors.text.white}" fontSize="48px" textAlign={'center'}>
          Countdown page is a work in progress. Enjoy the rest of the project in the meantime.
        </Text>
      </Stack>
    </>
  )
}

export default Countdown
