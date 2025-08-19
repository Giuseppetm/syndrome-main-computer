import React, { useState, useEffect, useCallback } from 'react'
import { Box, Button, HStack, BoxProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { encounters } from '@/data'
import { ROUTES } from '@/utils/routes'

export interface NavigationControlsProps extends BoxProps {
  autoDelay?: number // ms tra una navigazione e l'altra (default: 5s)
}

/**
 * @name NavigationControls
 *
 * @description
 * Control bar for navigating between Super/Omnidroid pages
 * with support for autoplay, pause, skip, and back.
 *
 * @example
 * ```tsx
 * <NavigationControls />
 * ```
 *
 * @author Giuseppe Del Campo
 */
const NavigationControls: React.FC<NavigationControlsProps> = ({ autoDelay = 1000, ...props }) => {
  const router = useRouter()
  const { superSlug, omnidroidSlug } = router.query as {
    superSlug?: string
    omnidroidSlug?: string
  }

  const [isPlaying, setIsPlaying] = useState(true)

  const currentIndex = encounters.findIndex((e) => e.superSlug === superSlug && e.omnidroidSlug === omnidroidSlug)

  const goBackToMenu = useCallback(() => {
    router.push(ROUTES.MENU_SUPERS)
  }, [router])

  const goToIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index < encounters.length) {
        const next = encounters[index]
        router.push(`${ROUTES.ENCOUNTER}/${next.superSlug}/${next.omnidroidSlug}`)
      }
    },
    [router]
  )

  const goNext = useCallback(() => {
    setIsPlaying(false) // Stop autoplay when manually navigating
    goToIndex(currentIndex + 1)
  }, [currentIndex, goToIndex])

  const goPrev = useCallback(() => {
    setIsPlaying(false) // Stop autoplay when manually navigating
    goToIndex(currentIndex - 1)
  }, [currentIndex, goToIndex])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        goBackToMenu()
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < encounters.length - 1) goNext()
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) goPrev()
      } else if (e.key === ' ') {
        e.preventDefault() // evita lo scroll della pagina
        setIsPlaying((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [router, currentIndex, goNext, goPrev, goBackToMenu])

  // Navigation auto-play
  useEffect(() => {
    if (!isPlaying) return
    const timer = setTimeout(() => {
      if (currentIndex < encounters.length - 1) {
        goToIndex(currentIndex + 1)
      }
    }, autoDelay)
    return () => clearTimeout(timer)
  }, [isPlaying, currentIndex, goToIndex, autoDelay])

  return (
    <Box
      position="fixed"
      bottom="20px"
      left="50%"
      transform="translateX(-50%)"
      zIndex={1000}
      bg="gray.700"
      color="white"
      px={4}
      py={2}
      rounded="full"
      shadow="md"
      {...props}
    >
      <HStack gap={3}>
        {/* Go to previous route */}
        <Button size="sm" onClick={goBackToMenu} colorScheme="gray">
          Back to menu
        </Button>

        {/* Pause / Resume */}
        {isPlaying ? (
          <Button size="sm" onClick={() => setIsPlaying(false)} colorScheme="yellow">
            Pause
          </Button>
        ) : (
          <Button size="sm" onClick={() => setIsPlaying(true)} colorScheme="green">
            Resume
          </Button>
        )}

        {/* Prev encounter */}
        <Button size="sm" onClick={goPrev} disabled={currentIndex <= 0} colorScheme="gray">
          Previous
        </Button>

        {/* Next encounter */}
        <Button size="sm" onClick={goNext} disabled={currentIndex >= encounters.length - 1} colorScheme="gray">
          Forward
        </Button>
      </HStack>
    </Box>
  )
}

export default NavigationControls
