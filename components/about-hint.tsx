import React, { useEffect, useRef, useState } from 'react'
import { Box, Text, Link, BoxProps, IconButton, HStack } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Info, X } from 'lucide-react'

const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box)

/**
 * Props for {@link AboutHint}.
 */
export interface AboutHintProps extends BoxProps {
  /**
   * Distance from the top of the viewport where the hint should appear.
   * @default "20px"
   */
  top?: string | number
}

/**
 * @name AboutHint
 *
 * @description
 * A dismissible overlay banner that appears at the top of the screen
 * and provides information about the **Syndrome Main Computer** project.
 *
 * The banner:
 * - Fades and slides in on mount, and fades/slides out on dismiss.
 * - Automatically hides after 6 seconds unless hovered.
 * - Can be dismissed immediately with the close button.
 * - Displays project information.
 *
 * @example
 * ```tsx
 * <AboutHint top="30px" creatorProfileUrl="https://twitter.com/myprofile" />
 * ```
 */
const AboutHint: React.FC<AboutHintProps> = ({ top = '20px', ...props }) => {
  const [visible, setVisible] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const HIDE_TIMEOUT = 3000

  useEffect(() => {
    if (!isHovering && visible) {
      timerRef.current = setTimeout(() => setVisible(false), HIDE_TIMEOUT)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isHovering, visible])

  const handleClose = () => setVisible(false)

  return (
    <AnimatePresence>
      {visible && (
        <MotionBox
          position="fixed"
          top={top}
          insetX={0}
          mx="auto"
          zIndex={999}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          shadow="xl"
          rounded="2xl"
          p={6}
          w={{ base: '90%', sm: '500px' }}
          textAlign="left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          // @ts-expect-error Usual motion stuff
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          fontFamily={'sans-serif'}
          {...props}
        >
          <IconButton aria-label="Close" size="sm" variant="plain" color="black" position="absolute" top="6px" right="6px" onClick={handleClose}>
            <X />
          </IconButton>

          <HStack gap={3} align="start">
            <Info size={40} />

            <Text fontSize="sm">
              <b>Syndrome Main Computer</b> is a faithful recreation of Syndrome’s computer interface from <i>The Incredibles</i> (2004), built as a
              modern web app with React, Next.js and Chakra UI.{' '}
              <Link
                href="https://github.com/Giuseppetm/syndrome-main-computer"
                color="white"
                target="_blank"
                fontWeight="semibold"
                _hover={{ color: '#A6A8A8' }}
              >
                View on GitHub
              </Link>
            </Text>
          </HStack>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default AboutHint
