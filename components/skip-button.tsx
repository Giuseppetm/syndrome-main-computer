import React from 'react'
import { Button, ButtonProps, Box } from '@chakra-ui/react'
import { useControlsStore } from '@/store/controls'

export interface SkipButtonProps extends ButtonProps {
  /**
   * Text inside the button (default: "Skip")
   */
  label?: string

  /**
   * Distance from the bottom (default: 20px)
   */
  bottom?: string | number
}

/**
 * @name SkipButton
 *
 * @description
 * A button fixed at the bottom of the viewport,
 * commonly used to allow skipping onboarding/tutorials.
 *
 * @example
 * ```tsx
 * <SkipButton onClick={() => console.log("Skipped!")} />
 * ```
 *
 * @author Giuseppe Del Campo
 */
const SkipButton: React.FC<SkipButtonProps> = ({ label = 'Skip', bottom = '20px', ...props }) => {
  const { enableControls } = useControlsStore()

  return (
    <Box position="absolute" bottom={enableControls ? bottom : -100} left="50%" transform="translateX(-50%)" zIndex={1000} fontFamily="sans-serif">
      <Button colorScheme="gray" variant="solid" size="md" rounded="full" shadow="md" {...props}>
        {label}
      </Button>
    </Box>
  )
}

export default SkipButton
