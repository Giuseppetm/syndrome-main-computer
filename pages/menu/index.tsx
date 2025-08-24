import MenuLayout from '../../layouts/menu'
import { MenuItem } from '@/types'
import { BoxProps, StackProps, useSlotRecipe, VStack } from '@chakra-ui/react'
import { DollarIcon, MountainIcon, OmnidroidIcon, SuperIcon } from '@/assets/icons'
import { SITE_URL } from '@/data/metadata'
import { ROUTES } from '@/utils/routes'
import { NextSeo } from 'next-seo'

/**
 * @name MenuPage
 *
 * @description
 * Main navigation page of the **Syndrome Main Computer** interface.
 * Provides entry points to key system modules such as:
 * - **Island Operations**
 * - **Finances**
 * - **Omnidroid Metatraining**
 * - **Supers Database**
 *
 * @remarks
 * Delegates menu rendering to {@link MenuLayout}.
 *
 * @author Giuseppe Del Campo
 */
const MenuPage = () => {
  const styles = useSlotRecipe({ key: 'menuPage' })({}) as Record<string, BoxProps & StackProps>

  const title = `Main Menu | Syndrome Main Computer`
  const description = `Access the central control menu of Syndrome's main computer. Navigate to Island Operations, Finances, Omnidroid Metatraining, and Supers management.`

  /**
   * Main menu configuration.
   * Each item contains:
   * - `label`: Display text
   * - `icon`: Visual representation
   * - `href`: Navigation path
   */
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
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          url: `${SITE_URL}${ROUTES.MENU}`,
          images: [
            {
              url: `/images/kronos/omnidroid_v10.png`,
              alt: title,
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <VStack {...styles.container}>
        <MenuLayout items={menuItems} page={'menu'} />
      </VStack>
    </>
  )
}

export default MenuPage
