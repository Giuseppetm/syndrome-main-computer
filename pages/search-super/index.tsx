import { BoxProps, Stack, StackProps, Text, useSlotRecipe } from '@chakra-ui/react'
import Head from 'next/head'

const SearchSuperPage = () => {
  const styles = useSlotRecipe({ key: 'searchSuperPage' })({}) as Record<string, BoxProps & StackProps>

  return (
    <>
      <Head>
        <title>Search Super Page</title>
        <meta name="description" content="" />
      </Head>

      <Stack {...styles.container}>
        <Text textStyle="regular" color="{colors.text.white}" fontSize="48px" textAlign={'center'}>
          Rework of several site sections is in progress. <br />
          Enjoy the menu, authentication and supers sections, they are already available.
        </Text>
      </Stack>
    </>
  )
}

export default SearchSuperPage
