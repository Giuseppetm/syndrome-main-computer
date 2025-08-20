import { MenuItem } from '@/types'
import { ROUTES } from '@/utils/routes'
import { Box, BoxProps, HStack, Stack, StackProps, useSlotRecipe } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MenuItemComponent from '@/layouts/menu/partials/menu-item'
import ControlsHint from '@/components/controls-hint'
import { motion } from 'framer-motion'

const MotionHStack = motion(HStack)
const MotionBox = motion(Box)
const MotionStack = motion(Stack)

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
  const FIRST_SELECTION_DELAY = itemsCount * 200

  /**
   * Automatically select the first menu item after a short delay.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setNavItem(0)
    }, FIRST_SELECTION_DELAY)

    return () => clearTimeout(timer)
  }, [items, FIRST_SELECTION_DELAY])

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
    <>
      {/* @ts-expect-error Motion doesn't understand chakra props. */}
      <MotionBox
        {...styles.lateralLines}
        left={page === 'menu' ? '402px' : '584px'}
        h="100%"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformOrigin: 'center' }}
      />

      {/* @ts-expect-error Motion doesn't understand chakra props. */}
      <MotionHStack
        {...styles.wrapper}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformOrigin: 'center' }}
      >
        {/* @ts-expect-error Motion doesn't understand chakra props. */}
        <MotionStack
          as="nav"
          gap={6}
          {...styles.navigator}
          {...props}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2, // 0.2s one after the other
              },
            },
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, color: '#fff' },
                show: {
                  opacity: 1,
                  color: '#000',
                  transition: { duration: 0.1, ease: 'easeOut' },
                },
              }}
            >
              <MenuItemComponent item={item} isActive={index === navItem} onMouseEnter={() => setNavItem(index)} />
            </motion.div>
          ))}
        </MotionStack>
      </MotionHStack>

      <ControlsHint />
    </>
  )
}

export default MenuLayout
