import { MenuItem } from '@/types'
import { getFirstEncounterRoute, ROUTES } from '@/utils/routes'
import { BoxProps, StackProps, useSlotRecipe, VStack } from '@chakra-ui/react'
import { SearchIcon, SuperIcon } from '@/assets/icons'
import MenuLayout from '../../layouts/menu'
import Head from 'next/head'
import { SITE_URL } from '@/data/metadata'

/**
 * @name MenuSupersPage
 *
 * @description
 * Supers-specific navigation page within the **Syndrome Main Computer** interface.
 * Provides access to:
 * - The complete **Supers List** (starting from the first available encounter).
 * - The **Search Super** tool for manually querying specific Supers.
 *
 * @remarks
 * This menu differs from the *Kronos Unveiled* movie sequence
 * and has been added for extended functionality in the web application.
 *
 * @see MenuPage For the main system menu.
 * @see getFirstEncounterRoute Utility function resolving the first super encounter route.
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

  return (
    <>
      <Head>
        <title>Supers Management Menu | Syndrome Main Computer</title>
        <meta
          name="description"
          content="Access the central control menu of Syndrome's main computer. Navigate to Supers management and Super search control."
        />
        <meta property="og:title" content="Supers Management Menu | Syndrome Main Computer" />
        <meta
          property="og:description"
          content="Access the central control menu of Syndrome's main computer. Navigate to Supers management and Super search control."
        />
        <meta property="og:url" content={`${SITE_URL}${ROUTES.MENU_SUPERS}`} />
      </Head>

      <VStack {...styles.container}>
        <MenuLayout items={superMenuItems} page={'menu-supers'} />
      </VStack>
    </>
  )
}

export default MenuSupersPage
