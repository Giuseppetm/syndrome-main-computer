import { MenuItem } from '@/types'
import { getFirstEncounterRoute, ROUTES } from '@/utils/routes'
import { Box, BoxProps, HStack, Stack, StackProps, useSlotRecipe } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { DollarIcon, MountainIcon, OmnidroidIcon, SuperIcon, SearchIcon } from '@/assets/icons'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import MenuItemComponent from '@/layouts/menu/partials/menu-item'
import ControlsHint from '@/components/controls-hint'
import useSoundPlayer, { SoundKey } from '@/hooks/sound'

const MotionHStack = motion(HStack)
const MotionBox = motion(Box)
const MotionStack = motion(Stack)

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
const MenuLayout = ({ ...props }) => {
  const styles = useSlotRecipe({ key: 'menuLayout' })({}) as Record<string, StackProps & BoxProps>
  const router = useRouter()
  const isLoaded = useRef<boolean>(false)
  const { play } = useSoundPlayer()

  const [activeMenu, setActiveMenu] = useState<'main' | 'supers'>('main')
  const [navItem, setNavItem] = useState<number | null>()

  const mainMenuItems: Array<MenuItem> = [
    {
      label: 'Island Operations',
      icon: <MountainIcon boxSize={14} color="black" />,
      href: '/island-operations',
    },
    {
      label: 'Finances',
      icon: <DollarIcon boxSize={14} color="black" />,
      href: null,
    },
    {
      label: 'Omnidroid Metatraining',
      icon: <OmnidroidIcon boxSize={14} color="black" />,
      href: null,
    },
    {
      label: 'Supers',
      icon: <SuperIcon boxSize={14} color="black" />,
      href: null,
      onClick: () => setActiveMenu('supers'),
    },
  ]

  const superMenuItems: Array<MenuItem> = [
    {
      label: 'Supers List',
      icon: <SuperIcon boxSize={14} color="black" />,
      href: getFirstEncounterRoute(),
    },
    {
      label: 'Search Super',
      icon: <SearchIcon color="black" />,
      href: '/search-super',
    },
    {
      label: 'Back to Main Menu',
      icon: <ArrowLeft size={47} color="black" />,
      href: null,
      onClick: () => setActiveMenu('main'),
    },
  ]

  const items = activeMenu === 'main' ? mainMenuItems : superMenuItems

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
  }, [FIRST_SELECTION_DELAY])

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
            } else if (currentItem && currentItem.onClick) {
              currentItem.onClick()
            }
          }
          break
        case 'Escape':
          if (activeMenu === 'main') {
            router.push(ROUTES.AUTHENTICATION)
          } else if (activeMenu === 'supers') {
            setActiveMenu('main')
          }
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [navItem, itemsCount, router, activeMenu, items])

  useEffect(() => {
    if (!isLoaded.current) {
      play(SoundKey.MENU_OPENING)
      isLoaded.current = true
    }
  }, [play])

  return (
    <>
      {/* @ts-expect-error Motion doesn't understand chakra props. */}
      <MotionBox
        {...styles.lateralLines}
        left={activeMenu === 'main' ? '405px' : '493px'}
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
        key={activeMenu}
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
              <MenuItemComponent item={item} isActive={index === navItem} onMouseEnter={() => setNavItem(index)} onClick={item.onClick} />
            </motion.div>
          ))}
        </MotionStack>
      </MotionHStack>

      <ControlsHint showNavButtons={true} />
    </>
  )
}

export default MenuLayout
