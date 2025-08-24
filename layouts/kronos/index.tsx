import React, { useEffect, useState } from 'react'
import { Box, BoxProps, Center, Spinner } from '@chakra-ui/react'
import PortraitOrientationOverlay from '@/components/portrait-orientation'
import AboutHint from '@/components/about-hint'
import DonationPopup from '@/components/donation-hint'

interface KronosLayoutProps extends BoxProps {
  /**
   * The content to render inside the fixed 16:9 layout.
   */
  children: React.ReactNode

  /**
   * The base width of the design canvas (default: 1920).
   * This represents the reference width before scaling.
   */
  baseWidth?: number

  /**
   * The base height of the design canvas (default: 1080).
   * This represents the reference height before scaling.
   */
  baseHeight?: number

  /**
   * Background color used for letterboxing (default: "black").
   * This fills the space outside the scaled 16:9 area.
   */
  background?: string
}

/**
 * @name KronosLayout
 *
 * @description
 * A responsive layout container that enforces a **16:9 aspect ratio**
 * for its child content. The layout is scaled down or up to fit within
 * the current viewport while maintaining the correct proportions.
 *
 * - When the viewport does not match 16:9, black (or custom color) bands
 *   appear as letterbox/pillarbox areas.
 * - All UI elements inside the canvas are uniformly scaled using CSS
 *   `transform: scale(...)`.
 * - The layout automatically adapts to **window resize** and
 *   **orientation change** events.
 *
 * @remarks
 * Additionally, when the device is in **portrait orientation**, an overlay
 * is displayed prompting the user to rotate the device or use a desktop/tablet.
 *
 * @example
 * ```tsx
 * <KronosLayout>
 *   <Box>Content</Box>
 * </KronosLayout>
 * ```
 *
 * @author Giuseppe Del Campo
 */
const KronosLayout = ({
  children,
  baseWidth = 1920,
  baseHeight = 1080,
  background = 'radial-gradient(circle at center, #131414 0%, #131313 100%)',
  ...props
}: KronosLayoutProps) => {
  const [scale, setScale] = useState<number | null>(null)
  const [isPortrait, setIsPortrait] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [minimumDelayPassed, setMinimumDelayPassed] = useState(false)

  const SPINNER_TIMEOUT = 1500

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const s = Math.min(vw / baseWidth, vh / baseHeight)
      setScale(s)
      setIsPortrait(vh > vw)
      setIsReady(true)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [baseWidth, baseHeight])

  useEffect(() => {
    const t = setTimeout(() => setMinimumDelayPassed(true), SPINNER_TIMEOUT)
    return () => clearTimeout(t)
  }, [])

  const showSpinner = !isReady || !minimumDelayPassed

  return (
    <Box w="100dvw" h="100dvh" bg={background} backdropFilter="blur(10px)" overflow="hidden" position="relative" {...props}>
      {showSpinner && (
        <Center w="100%" h="100%">
          <Spinner size="xl" color="white" borderWidth="3px" animationDuration="0.6s" css={{ '--spinner-track-color': 'colors.gray.600' }} />
        </Center>
      )}

      <Box
        position="absolute"
        top="50%"
        left="50%"
        w={`${baseWidth}px`}
        h={`${baseHeight}px`}
        transform={`translate(-50%, -50%) scale(${scale})`}
        transformOrigin="center"
        bg="gray.900"
        boxShadow="lg"
        transition="opacity 0.5s ease"
        opacity={1}
      >
        {children}
      </Box>

      <AboutHint />

      <DonationPopup />

      <PortraitOrientationOverlay isVisible={isPortrait} onClose={() => setIsPortrait(false)} />
    </Box>
  )
}

export default KronosLayout
