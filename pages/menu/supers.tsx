import { MenuItem } from '@/types'
import { getFirstEncounterRoute } from '@/utils/routes'
import { BoxProps, StackProps, useSlotRecipe, VStack } from '@chakra-ui/react'
import { SearchIcon, SuperIcon } from '@/assets/icons'
import MenuLayout from '../../layouts/menu'
import Head from 'next/head'

/**
 * @name MenuSupersPage
 *
 * @description
 * Page rendered for supers menu.
 *
 * @remarks
 * This page has been added and differs from the `Kronos Unveiled` movie sequence.
 *
 * @author Giuseppe Del Campo
 */
const MenuSupersPage = () => {
  const styles = useSlotRecipe({ key: 'menuPage' })({}) as Record<string, BoxProps & StackProps>

  const superMenuItems: Array<MenuItem> = [
    {
      label: 'Supers List',
      icon: <SuperIcon boxSize={14} color="black" />,
      href: getFirstEncounterRoute(),
    },
    {
      label: 'Search Super',
      icon: <SearchIcon color="black" />,
      href: '/search-super',
    },
  ]

  // TODO: Il click su /supers deve portare un argomento che abilita la navigazione automatica ai prossimi super

  return (
    <>
      <Head>
        <title>Menu Page</title>
        <meta name="description" content="" />
      </Head>

      <VStack {...styles.container}>
        <MenuLayout items={superMenuItems} page={'menu-supers'} />
      </VStack>
    </>
  )
}

export default MenuSupersPage
