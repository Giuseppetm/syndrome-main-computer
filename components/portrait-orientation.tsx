import { RotateSmartphoneIcon } from '@/assets/icons'
import { Box, Icon, IconButton, Text, VStack } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

interface PortraitOrientationOverlayProps {
  /** Visibility status. */
  isVisible: boolean
  /** Optional custom message to display below the icon. */
  message?: string
  /** Close overlay callback */
  onClose?: () => void
}

const MotionBox = motion(Box)

/**
 * @name PortraitOrientationBox
 *
 * @description
 * Fullscreen overlay component displayed when the device is in **portrait orientation**.
 * Shows an icon suggesting to rotate the device and a customizable message.
 *
 * @author Giuseppe Del Campo
 */
const PortraitOrientationOverlay = ({
  isVisible,
  onClose,
  message = 'Please rotate your device to landscape or use a desktop / tablet for the best experience.',
}: PortraitOrientationOverlayProps) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const hasBeenSeenRef = useRef(false)

  const handleClose = useCallback(() => {
    hasBeenSeenRef.current = true
    setShowOverlay(false)
    onClose?.()
  }, [onClose])

  useEffect(() => {
    if (!hasBeenSeenRef.current && isVisible) {
      setShowOverlay(true)
    }
  }, [isVisible])

  // Automtically closes after 2.5 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (showOverlay) {
      timer = setTimeout(() => {
        handleClose()
      }, 2500)
    }
    return () => clearTimeout(timer)
  }, [showOverlay, handleClose])

  return (
    <AnimatePresence>
      {showOverlay && (
        <MotionBox
          key="portrait-orientation-overlay"
          position="fixed"
          top={0}
          left={0}
          w="100vw"
          h="100vh"
          bg="rgba(0,0,0,0.9)"
          zIndex={9999}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color="white"
          p={4}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          fontFamily={'sans-serif'}
        >
          <IconButton variant="solid" aria-label="Close orientation notice" position="absolute" top={4} right={4} color="white" onClick={handleClose}>
            <Icon as={X} boxSize={5} />
          </IconButton>

          <VStack gap={4} color="white" textAlign="center">
            <RotateSmartphoneIcon />
            <Text fontSize="lg" maxW={400} px={4}>
              {message}
            </Text>
          </VStack>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default PortraitOrientationOverlay
