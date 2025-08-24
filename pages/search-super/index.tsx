import { BoxProps, Box, StackProps, useSlotRecipe, HStack, Text, TextProps, VStack } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import TerminalInput from '@/components/terminal-input'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { encounters, supers, supersResult } from '@/data'
import { ROUTES } from '@/utils/routes'
import ControlsHint from '@/components/controls-hint'
import { SITE_URL } from '@/data/metadata'
import { NextSeo } from 'next-seo'

const MotionBox = motion(Box)
const MotionHStack = motion(HStack)

/**
 * @name SearchSuperPage
 *
 * @description
 * Page that provides a **terminal-like interface** to search for Supers.
 *
 * The user types the Super's name into an input field and, based on the query:
 * - If the Super exists **and has been defeated by an Omnidroid**, they are redirected
 *   to the corresponding {@link Encounter} page.
 * - If the Super exists in the dataset but was **not defeated**, they are redirected
 *   to the {@link SuperResultPage}.
 * - If the Super does not exist in the datasets, an alert is shown ("Super not found.").
 *
 * @state
 * - `searchValue` — stores the current input value.
 * - `searchInput` — ref to the input element, used for auto-focus.
 *
 * @returns
 * Renders the Search Super page with an interactive terminal-like input.
 *
 * @see EncounterPage For Supers defeated by an Omnidroid.
 * @see SuperResultPage For Supers still active / not defeated.
 * @see TerminalInput Custom component used to render the styled input field.
 *
 * @author Giuseppe Del Campo
 */
const SearchSuperPage = () => {
  const styles = useSlotRecipe({ key: 'searchSuperPage' })({}) as Record<string, BoxProps & StackProps & TextProps>
  const router = useRouter()

  const title = 'Search Super | Syndrome Main Computer'
  const description =
    'Search for Supers in the Omnidroid database. Discover which Supers were defeated in encounters and which ones are still active.'

  const [searchValue, setSearchValue] = useState('')
  const searchInput = useRef<HTMLInputElement | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = () => {
    const query = searchValue.trim().toLowerCase()
    if (!query) return

    const superData = supers.find((s) => s.name.toLowerCase() === query)

    if (superData) {
      const completedEncounter = encounters.find((e) => e.superSlug.toLowerCase() === superData.slug && e.superDefeated)

      if (completedEncounter) {
        router.push(`${ROUTES.ENCOUNTER}/${completedEncounter.superSlug}/${completedEncounter.omnidroidSlug}?autoplay=0`)
        return
      }
    }

    const pendingSuper = supersResult.find((s) => s.slug.toLowerCase() === query)

    if (pendingSuper) {
      router.push(`${ROUTES.SEARCH_SUPER}/${pendingSuper.slug}`)
      return
    }

    alert('Super not found.')
  }

  useEffect(() => {
    searchInput.current?.focus()
  }, [])

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          url: `${SITE_URL}${ROUTES.SEARCH_SUPER}`,
          images: [
            {
              url: '/images/search-results/frozone.png',
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
        {/* Horizontal lines */}
        {/* @ts-expect-error Usual motion stuff. */}
        <MotionBox
          {...styles.horizontalLines}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Vertical lines */}
        {/* @ts-expect-error Usual motion stuff. */}
        <MotionBox
          {...styles.verticalLines}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          style={{ transformOrigin: 'center' }}
        />

        {/* @ts-expect-error Usual motion stuff. */}
        <MotionHStack
          {...styles.wrapper}
          gap={0}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
        >
          <VStack {...styles.searchLabelWrapper}>
            <Text {...styles.searchLabel}>Search:</Text>
          </VStack>

          <Box {...styles.inputWrapper}>
            <TerminalInput
              value={searchValue}
              ref={searchInput}
              autoFocus
              type="text"
              alignment="start"
              autoComplete="off"
              onChange={handleChange}
              variant="search"
              maxLength={14}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
          </Box>
        </MotionHStack>
      </VStack>

      <ControlsHint showControlsHint showNavButtons label={'Type the name of a super to proceed.'} />
    </>
  )
}

export default SearchSuperPage
