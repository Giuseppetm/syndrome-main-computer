import Timer from '@/components/timer'
import FlashLayer from '@/layouts/kronos/partials/flash-layer'
import ControlsHint from '@/components/controls-hint'
import { Box, BoxProps, StackProps, Text, useSlotRecipe, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ROUTES } from '@/utils/routes'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { SITE_URL } from '@/data/metadata'

const MotionVStack = motion(VStack)

/**
 * @name CountdownPage
 *
 * @description
 * This page displays a countdown timer for the launch of Project Kronos.
 *
 * @author Giuseppe Del Campo
 */
const CountdownPage = () => {
  const router = useRouter()
  const styles = useSlotRecipe({ key: 'countdownPage' })({}) as Record<string, BoxProps & StackProps>

  const title = `Countdown to Activation | Syndrome Main Computer`
  const description = `The final countdown to the activation of Kronos Project. Monitor the launch sequence in real time and prepare for project deploy.`

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.push(ROUTES.ISLAND_OPERATIONS)
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [router])

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          url: `${SITE_URL}${ROUTES.COUNTDOWN}`,
          images: [
            {
              url: '/images/seo/countdown.png',
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

      <FlashLayer />

      {/* @ts-expect-error Usual motion stuff */}
      <MotionVStack
        {...styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Text {...styles.title}>Project Kronos Countdown</Text>

        <Box py={14} w="full">
          <Timer />
        </Box>

        <Text {...styles.title}>Until Launch</Text>
      </MotionVStack>

      <ControlsHint showNavButtons showControlsHint label={'This is the countdown for Project Kronos. If you are Mr. Incredible.. you better run.'} />
    </>
  )
}

export default CountdownPage
