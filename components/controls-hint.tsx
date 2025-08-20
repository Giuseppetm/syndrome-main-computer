import React from 'react'
import { Box, Text, BoxProps } from '@chakra-ui/react'

export interface ControlsHintProps extends BoxProps {
  /**
   * Distance from the bottom (default: 20px)
   */
  bottom?: string | number
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
 * <ControlsHint />
 * ```
 *
 * @author Giuseppe Del Campo
 */
const ControlsHint: React.FC<ControlsHintProps> = ({ bottom = '20px', ...props }) => {
  return (
    <Box
      position="absolute"
      bottom={bottom}
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
      fontFamily={'sans-serif'}
      {...props}
    >
      <Text>
        Use <b>↑ ↓</b> to navigate — <b>Enter</b> to select — <b>Esc</b> to exit
      </Text>
    </Box>
  )
}

export default ControlsHint
