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
          Rework of several site sections is in progress. <br />
          Enjoy the menu, authentication and supers sections, they are already available.
        </Text>
      </Stack>
    </>
  )
}

export default Countdown
