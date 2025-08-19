import { MenuItem } from '@/types'
import MenuLayout from '../../layouts/menu'
import Link from 'next/link'
import { getFirstEncounterRoute } from '@/utils/routes'

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
  const superMenuItems: Array<MenuItem> = [
    {
      label: 'Supers List',
      icon: <></>,
      href: getFirstEncounterRoute(),
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
        {superMenuItems.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </ul>
    </MenuLayout>
  )
}

export default MenuSupersPage
