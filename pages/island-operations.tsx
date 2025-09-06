import { SITE_URL } from '@/data/metadata'
import KronosLayout from '@/layouts/kronos'
import { ROUTES } from '@/utils/routes'
import { BoxProps, Stack, StackProps, useSlotRecipe } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

/**
 * @name IslandOperationsPage
 *
 * @description
 * Renders the final design page for Omnidroid v.10, part of the Kronos project.
 *
 * @author Giuseppe Del Campo
 */
const IslandOperationsPage = () => {
  const styles = useSlotRecipe({ key: 'islandOperationsPage' })({}) as Record<string, BoxProps & StackProps>

  const title = 'Omnidroid Final Design v.10 | Syndrome Main Computer'
  const description = `Explore the final iteration of the Omnidroid v.10, the core autonomous unit of the Kronos project. Engineered for strategic control and advanced AI operations within phase 1–3.`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          url: `${SITE_URL}${ROUTES.ISLAND_OPERATIONS}`,
          images: [
            {
              url: '/images/seo/kronos.png',
              alt: title,
              width: 1239,
              height: 630,
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Stack {...styles.container}>
        <KronosLayout />
      </Stack>
    </>
  )
}

export default IslandOperationsPage
