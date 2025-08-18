import { MenuItem } from '@/types'
import Link from 'next/link'

interface MenuItemProps {
  item: MenuItem
}

const MenuItemComponent = ({ item }: MenuItemProps) => {
  return <Link href={item.href}>{item.label}</Link>
}

export default MenuItemComponent
