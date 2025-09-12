import React from 'react'
import { Box, Text, BoxProps, HStack, IconButton } from '@chakra-ui/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useControlsStore } from '@/store/controls'

export interface ControlsHintProps extends BoxProps {
  /**
   * Distance from the bottom (default: 20px)
   */
  bottom?: string | number
  /**
   * Show browser navigation buttons (back/forward)
   */
  showNavButtons?: boolean
  /**
   * Show controls hint.
   */
  showControlsHint?: boolean
  /**
   * Custom label.
   */
  label?: string
}

/**
 * @name ControlsHint
 *
 * @description
 * A fixed hint box at the bottom of the viewport,
 * showing navigation instructions (arrows + enter/esc).
 *
 * @example
 * ```tsx
 * <ControlsHint showNavButtons />
 * ```
 *
 * @author Giuseppe Del Campo
 */
const ControlsHint: React.FC<ControlsHintProps> = ({ bottom = '20px', showControlsHint = true, showNavButtons = false, label, ...props }) => {
  const router = useRouter()
  const { enableControls } = useControlsStore()

  return (
    <Box
      position="absolute"
      bottom={enableControls ? bottom : -100}
      left="50%"
      transform="translateX(-50%)"
      zIndex={1000}
      bg="gray.700"
      color="white"
      px={4}
      py={2}
      rounded="full"
      shadow="md"
      fontSize="sm"
      textAlign="center"
      fontFamily="sans-serif"
      {...props}
    >
      <HStack gap={3}>
        {showNavButtons && (
          <HStack gap={1}>
            <IconButton
              size="sm"
              aria-label="Go back"
              onClick={() => router.back()}
              px={2}
              _disabled={{ bg: 'gray.600', color: 'gray.300', cursor: 'not-allowed', opacity: 1 }}
            >
              <ArrowLeft size={16} /> Page back
            </IconButton>
            <IconButton
              size="sm"
              aria-label="Go forward"
              onClick={() => router.forward()}
              px={2}
              _disabled={{ bg: 'gray.600', color: 'gray.300', cursor: 'not-allowed', opacity: 1 }}
            >
              <ArrowRight size={16} /> Page forward
            </IconButton>
          </HStack>
        )}
        {showControlsHint && (
          <Text
            whiteSpace="nowrap"
            dangerouslySetInnerHTML={{
              __html: label ?? 'Use <b>↑ ↓</b> to navigate — <b>Enter</b> to select — <b>Esc</b> to go back.',
            }}
          />
        )}
      </HStack>
    </Box>
  )
}

export default ControlsHint
