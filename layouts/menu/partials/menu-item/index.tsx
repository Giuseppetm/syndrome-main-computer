import { MenuItem } from '@/types'
import { MouseEventHandler } from 'react'
import { useSlotRecipe, HStack, BoxProps, Box, Text, TextProps, LinkProps } from '@chakra-ui/react'
import Link from 'next/link'

interface MenuItemProps {
  /**
   * The menu item data object.
   * Contains the label, icon, and navigation target (href).
   */
  item: MenuItem

  /**
   * Whether this menu item is currently active (highlighted/selected).
   * Used to determine visual styling via slot recipes.
   */
  isActive: boolean

  /**
   * Optional callback triggered when the user hovers over the menu item.
   */
  onMouseEnter?: MouseEventHandler<HTMLDivElement>

  /**
   * Optional callback triggered when the user clicks the menu item.
   */
  onClick?: () => void
}

/**
 * @name MenuItemComponent
 *
 * @description
 * A styled navigation item for use in a menu layout.
 *
 * Each menu item displays:
 * - An icon inside a styled wrapper.
 * - A label describing the menu action.
 *
 * If the menu item's `href` is an empty string, the cursor is set
 * to `"disabled"` and the item behaves as non-clickable.
 *
 * @example
 * ```tsx
 * <MenuItemComponent
 *   item={{
 *     label: "Supers",
 *     href: "/menu/supers",
 *     icon: <SuperIcon boxSize={14} color="black" />
 *   }}
 *   isActive={true}
 *   onMouseEnter={() => console.log("Hovered over Supers")}
 * />
 * ```
 *
 * @see {@link MenuItem} type definition for the shape of `item`
 *
 * @author
 * Giuseppe Del Campo
 */
const MenuItemComponent = ({ item, isActive, onMouseEnter, onClick }: MenuItemProps) => {
  const styles = useSlotRecipe({ key: 'menuItemComponent' })({
    state: isActive ? 'active' : 'inactive',
  }) as Record<string, BoxProps & TextProps & LinkProps>

  return (
    <HStack
      {...styles.wrapper}
      as={item.href !== '' ? Link : 'button'}
      gap={0}
      // @ts-expect-error HStack is used as Link here
      href={item.href ?? ''}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      cursor={item.href === '' && item.onClick === undefined ? 'disabled' : 'pointer'}
    >
      <Box {...styles.iconWrapper}>{item.icon}</Box>
      <Text {...styles.label}>{item.label}</Text>
    </HStack>
  )
}

export default MenuItemComponent
