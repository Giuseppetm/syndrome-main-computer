import MenuLayout from '../../layouts/menu'
import { BoxProps, StackProps, useSlotRecipe, VStack } from '@chakra-ui/react'
import { SITE_URL } from '@/data/metadata'
import { ROUTES } from '@/utils/routes'
import { NextSeo } from 'next-seo'

/**
 * @name MenuPage
 *
 * @description
 * Main navigation page of the **Syndrome Main Computer** interface.
 *
 * Provides entry points to key system modules such as:
 * - **Island Operations**
 * - **Finances**
 * - **Omnidroid Metatraining**
 * - **Supers Database** (navigates into Supers submenu)
 *
 * Supers-specific navigation provides access to:
 * - The complete **Supers List** (starting from the first available encounter).
 * - The **Search Super** tool for manually querying specific Supers.
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
              url: `/images/seo/menu.png`,
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
        <MenuLayout />
      </VStack>
    </>
  )
}

export default MenuPage
