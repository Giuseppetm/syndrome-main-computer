import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

interface KronosLayoutProps {
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
 * @example
 * ```tsx
 * <KronosLayout>
 *   <Box>Content</Box>
 * </KronosLayout>
 * ```
 */
const KronosLayout = ({ children, baseWidth = 1920, baseHeight = 1080, background = 'black' }: KronosLayoutProps) => {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const s = Math.min(vw / baseWidth, vh / baseHeight)
      setScale(s)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [baseWidth, baseHeight])

  return (
    <Box w="100vw" h="100vh" bg={background} overflow="hidden" position="relative">
      <Box position="absolute" top="50%" left="50%" w={`${baseWidth}px`} h={`${baseHeight}px`} transform={`translate(-50%, -50%) scale(${scale})`} transformOrigin="center" bg="gray.900" boxShadow="lg">
        {children}
      </Box>
    </Box>
  )
}

export default KronosLayout
