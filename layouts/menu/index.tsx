import { MenuItem } from '@/types'
import { ROUTES } from '@/utils/routes'
import { Box, BoxProps, HStack, Stack, StackProps, useSlotRecipe } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MenuItemComponent from '@/layouts/menu/partials/menu-item'
import ControlsHint from '@/components/controls-hint'

interface MenuLayoutProps extends StackProps {
  /**
   * Array of menu items to render.
   * Each item should implement the {@link MenuItem} interface.
   */
  items: Array<MenuItem>

  /**
   * Defines the context in which the menu is used.
   * - `'menu'`: main menu
   * - `'menu-supers'`: submenu for supers
   *
   * This value affects navigation behavior, e.g. what happens on `Escape`.
   */
  page: 'menu' | 'menu-supers'
}

/**
 * @name MenuLayout
 *
 * @description
 * It is a navigation component that renders a vertical menu.
 * It supports both mouse and keyboard navigation.
 *
 * ### Features
 * - Keyboard navigation using:
 *   - `ArrowDown` / `ArrowUp` to move between items.
 *   - `Enter` to navigate to the selected item's route.
 *   - `Escape` to return to a parent route depending on `page`.
 * - Mouse hover to change the active item.
 *
 * @example
 * ```tsx
 * <MenuLayout
 *   page="menu"
 *   items={[
 *     { label: "Home", href: ROUTES.HOME },
 *     { label: "Supers", href: ROUTES.SUPERS }
 *   ]}
 * />
 * ```
 */
const MenuLayout = ({ items, page, ...props }: MenuLayoutProps) => {
  const styles = useSlotRecipe({ key: 'menuLayout' })({}) as Record<string, StackProps & BoxProps>
  const router = useRouter()

  const [navItem, setNavItem] = useState<number | null>()

  const itemsCount = items.length
  const FIRST_SELECTION_DELAY = 300

  /**
   * Automatically select the first menu item after a short delay.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setNavItem(0)
    }, FIRST_SELECTION_DELAY)

    return () => clearTimeout(timer)
  }, [items])

  /**
   * Keyboard navigation handler.
   * - Arrow keys: navigate through items.
   * - Enter: navigate to selected item.
   * - Escape: return to parent route.
   */
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (navItem === null) return

      switch (event.key) {
        case 'ArrowDown':
          setNavItem((prev) => {
            if (prev === null) return 0
            return (prev! + 1) % itemsCount
          })
          break
        case 'ArrowUp':
          setNavItem((prev) => {
            if (prev === null) return itemsCount - 1
            return (prev! - 1 + itemsCount) % itemsCount
          })
          break
        case 'Enter':
          if (navItem !== null) {
            const currentItem = items[navItem ?? 0]
            if (currentItem && currentItem.href) {
              router.push(currentItem.href)
            }
          }
          break
        case 'Escape':
          if (page === 'menu') {
            router.push(ROUTES.AUTHENTICATION)
          } else if (page === 'menu-supers') {
            router.push(ROUTES.MENU)
          }
          break
        default:
          break
      }
    }

    window.addEventListener('keyup', handler)
    return () => window.removeEventListener('keyup', handler)
  }, [navItem, itemsCount, router, items, page])

  return (
    <HStack {...styles.wrapper}>
      <Box {...styles.lateralLines} left={page === 'menu' ? '430px' : '603px'} />

      <Stack as="nav" gap={6} {...styles.navigator} {...props}>
        {items.map((item, index) => (
          <MenuItemComponent key={item.label} item={item} isActive={index === navItem} onMouseEnter={() => setNavItem(index)} />
        ))}
      </Stack>

      <ControlsHint />
    </HStack>
  )
}

export default MenuLayout
