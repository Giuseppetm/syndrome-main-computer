import { MenuItem } from '@/types'
import MenuLayout from './layout'
import Link from 'next/link'

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
  const items: Array<MenuItem> = [
    {
      label: 'Supers List',
      icon: <></>,
      href: '/super-omnidroid/1', // TODO: First super slug here
    },
    {
      label: 'Search Super',
      icon: <></>,
      href: '/search-super',
    },
  ]

  // TODO: Il click su /supers deve portare un argomento che abilita la navigazione automatica ai prossimi super

  return (
    <MenuLayout>
      <ul>
        {items.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </ul>
    </MenuLayout>
  )
}

export default MenuSupersPage
