import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { KronosStep } from '../..'
import { Box } from '@chakra-ui/react'

const MotionBox = motion(Box)

/**
 * @name FlashLayer
 *
 * @description
 * Renders a temporary white flash overlay across the entire viewport
 * when the `step` changes in the Kronos workflow.
 *
 * Features:
 * - Listens to changes in the `step` prop.
 * - When the step is different from `IDLE`, triggers a short flash effect.
 * - Uses a radial white gradient overlay with animated opacity.
 * - Automatically fades out after a fixed timeout.
 *
 * @author Giuseppe Del Campo
 */
const FlashLayer: React.FC<{ step?: KronosStep }> = ({ step }) => {
  const [flash, setFlash] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const FLASH_TIMEOUT = 100

  useEffect(() => {
    if (step === KronosStep.IDLE) return

    setFlash(true)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setFlash(false)
      timeoutRef.current = null
    }, FLASH_TIMEOUT)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [step])

  return (
    <MotionBox
      position="absolute"
      top={0}
      left={0}
      w="full"
      h="full"
      pointerEvents="none"
      zIndex={1999}
      backgroundImage="radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0.1) 100%)"
      initial={{ opacity: 0 }}
      animate={{ opacity: flash ? 1 : 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    />
  )
}

export default FlashLayer
