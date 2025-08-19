import MenuLayout from '../../layouts/menu'
import Head from 'next/head'
import MenuItemComponent from './partials/menu-item'
import { MenuItem } from '@/types'

/**
 * @name MenuPage
 *
 * @description
 * Page rendered for main menu.
 *
 * @author Giuseppe Del Campo
 */
const MenuPage = () => {
  const menuItems: Array<MenuItem> = [
    {
      label: 'Island Operations',
      icon: <></>,
      href: '/island-operations',
    },
    {
      label: 'Finances',
      icon: <></>,
      href: '',
    },
    {
      label: 'Omnidroid Metatraining',
      icon: <></>,
      href: '',
    },
    {
      label: 'Supers',
      icon: <></>,
      href: '/menu/supers',
    },
  ]

  return (
    <>
      <Head>
        <title>Menu Page</title>
        <meta name="description" content="" />
      </Head>

      <MenuLayout bg="bodyBg" color="bodyText">
        {menuItems.map((item) => (
          <MenuItemComponent key={item.label} item={item} />
        ))}
      </MenuLayout>
    </>
  )
}

export default MenuPage
