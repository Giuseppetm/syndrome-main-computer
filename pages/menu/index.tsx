import MenuLayout from '../../layouts/menu'
import Head from 'next/head'
import { MenuItem } from '@/types'
import { BoxProps, StackProps, useSlotRecipe, VStack } from '@chakra-ui/react'
import { DollarIcon, MountainIcon, OmnidroidIcon, SuperIcon } from '@/assets/icons'

/**
 * @name MenuPage
 *
 * @description
 * Page rendered for main menu.
 *
 * @author Giuseppe Del Campo
 */
const MenuPage = () => {
  const styles = useSlotRecipe({ key: 'menuPage' })({}) as Record<string, BoxProps & StackProps>

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
        <title>Menu Page</title>
        <meta name="description" content="" />
      </Head>

      <VStack {...styles.container}>
        <MenuLayout items={menuItems} page={'menu'} />
      </VStack>
    </>
  )
}

export default MenuPage
