import React, { useState, useEffect, useCallback } from 'react'
import { Box, Button, HStack, BoxProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { encounters } from '@/data'
import { ROUTES } from '@/utils/routes'
import { ArrowLeft, ArrowRight, Home, Pause, Play } from 'lucide-react'
import { useControlsStore } from '@/store/controls'

export interface NavigationControlsProps extends BoxProps {
  autoDelay?: number // Auto navigation delay
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
  const { enableControls } = useControlsStore()

  const { superSlug, omnidroidSlug, autoplay } = router.query as {
    superSlug?: string
    omnidroidSlug?: string
    autoplay?: string
  }

  const [isPlaying, setIsPlaying] = useState(autoplay !== '0')

  const currentIndex = encounters.findIndex((e) => e.superSlug === superSlug && e.omnidroidSlug === omnidroidSlug)

  const goBackToMenu = useCallback(() => {
    router.push(ROUTES.MENU)
  }, [router])

  const goToIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index < encounters.length) {
        const next = encounters[index]
        router.push(`${ROUTES.ENCOUNTER}/${next.superSlug}/${next.omnidroidSlug}?autoplay=${isPlaying ? 1 : 0}`)
      }
    },
    [router, isPlaying]
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
        e.preventDefault()
        setIsPlaying((prev) => {
          const newValue = !prev
          router.replace(
            {
              pathname: router.pathname,
              query: { ...router.query, autoplay: newValue ? 1 : 0 },
            },
            undefined,
            { shallow: true }
          )
          return newValue
        })
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
      bottom={enableControls ? '20px' : -100}
      left="50%"
      transform="translateX(-50%)"
      zIndex={1000}
      bg="gray.700"
      color="white"
      px={4}
      py={2}
      rounded="full"
      shadow="md"
      fontFamily={'sans-serif'}
      {...props}
    >
      <HStack gap={3}>
        {/* Back to menu */}
        <Button size="sm" onClick={goBackToMenu} colorScheme="gray">
          <HStack>
            <Home size={16} />
            <span>Menu</span>
          </HStack>
        </Button>

        {/* Pause / Resume */}
        {isPlaying ? (
          <Button size="sm" onClick={() => setIsPlaying(false)} colorScheme="yellow">
            <HStack>
              <Pause size={16} />
              <span>Pause</span>
            </HStack>
          </Button>
        ) : (
          <Button size="sm" onClick={() => setIsPlaying(true)} colorScheme="green">
            <HStack>
              <Play size={16} />
              <span>Resume</span>
            </HStack>
          </Button>
        )}

        {/* Prev */}
        <Button size="sm" onClick={goPrev} disabled={currentIndex <= 0} colorScheme="gray">
          <HStack>
            <ArrowLeft size={16} />
            <span>Prev</span>
          </HStack>
        </Button>

        {/* Next */}
        <Button size="sm" onClick={goNext} disabled={currentIndex >= encounters.length - 1} colorScheme="gray">
          <HStack>
            <ArrowRight size={16} />
            <span>Next</span>
          </HStack>
        </Button>
      </HStack>
    </Box>
  )
}

export default NavigationControls
