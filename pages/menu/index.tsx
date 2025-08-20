import MenuLayout from '../../layouts/menu'
import Head from 'next/head'
import { MenuItem } from '@/types'
import { BoxProps, StackProps, useSlotRecipe, VStack } from '@chakra-ui/react'
import { DollarIcon, MountainIcon, OmnidroidIcon, SuperIcon } from '@/assets/icons'
import { SITE_URL } from '@/data/metadata'
import { ROUTES } from '@/utils/routes'

/**
 * @name MenuPage
 *
 * @description
 * Main navigation page of the **Syndrome Main Computer** interface.
 * Provides entry points to key system modules such as:
 * - **Island Operations**
 * - **Finances**
 * - **Omnidroid Metatraining**
 * - **Supers Database**
 *
 * @remarks
 * Delegates menu rendering to {@link MenuLayout}.
 *
 * @author Giuseppe Del Campo
 */
const MenuPage = () => {
  const styles = useSlotRecipe({ key: 'menuPage' })({}) as Record<string, BoxProps & StackProps>

  /**
   * Main menu configuration.
   * Each item contains:
   * - `label`: Display text
   * - `icon`: Visual representation
   * - `href`: Navigation path
   */
  const menuItems: Array<MenuItem> = [
    {
      label: 'Island Operations',
      icon: <MountainIcon boxSize={14} color="black" />,
      href: '/island-operations',
    },
    {
      label: 'Finances',
      icon: <DollarIcon boxSize={14} color="black" />,
      href: '',
    },
    {
      label: 'Omnidroid Metatraining',
      icon: <OmnidroidIcon boxSize={14} color="black" />,
      href: '',
    },
    {
      label: 'Supers',
      icon: <SuperIcon boxSize={14} color="black" />,
      href: '/menu/supers',
    },
  ]

  return (
    <>
      <Head>
        <title>Main Menu | Syndrome Main Computer</title>
        <meta
          name="description"
          content="Access the central control menu of Syndrome's main computer. Navigate to Island Operations, Finances, Omnidroid Metatraining, and Supers management."
        />
        <meta property="og:title" content="Main Menu | Syndrome Main Computer" />
        <meta
          property="og:description"
          content="Navigate through Syndrome's central computer. Manage island operations, finances, Omnidroid systems, and Supers data."
        />
        <meta property="og:url" content={`${SITE_URL}${ROUTES.MENU}`} />
      </Head>

      <VStack {...styles.container}>
        <MenuLayout items={menuItems} page={'menu'} />
      </VStack>
    </>
  )
}

export default MenuPage
