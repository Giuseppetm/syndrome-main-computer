import { MenuItem } from '@/types'
import { MouseEventHandler } from 'react'
import { useSlotRecipe, HStack, BoxProps, Box, Text, TextProps, LinkProps } from '@chakra-ui/react'
import Link from 'next/link'

interface MenuItemProps {
  item: MenuItem
  isActive: boolean
  onMouseEnter?: MouseEventHandler<HTMLDivElement>
}

const MenuItemComponent = ({ item, isActive, onMouseEnter }: MenuItemProps) => {
  const styles = useSlotRecipe({ key: 'menuItemComponent' })({
    state: isActive ? 'active' : 'inactive',
  }) as Record<string, BoxProps & TextProps & LinkProps>

  return (
    // @ts-expect-error HStack is used as Link here
    <HStack {...styles.wrapper} as={Link} gap={0} href={item.href} onMouseEnter={onMouseEnter} cursor={item.href === '' ? 'disabled' : 'pointer'}>
      <Box {...styles.iconWrapper}>{item.icon}</Box>
      <Text {...styles.label}>{item.label}</Text>
    </HStack>
  )
}

export default MenuItemComponent
