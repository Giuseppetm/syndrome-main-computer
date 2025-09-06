import { KronosStep, stepLabel } from '@/layouts/kronos'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const MotionBox = motion(Box)

/**
 * @name KronosStep3
 *
 * @description
 * Represents the third step in the Kronos Project animation sequence.
 *
 * Features:
 * - Swaps image after 0.5s to show destruction
 * - Renders a blinking triangle and a timed light burst
 * - Coordinates timing and layering of all visual elements
 *
 * @author Giuseppe Del Campo
 */
const KronosStep3 = () => {
  const [imageSrc, setImageSrc] = useState('/images/kronos/phase-3.png')

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageSrc('/images/kronos/phase-3-destroyed.png')
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Box pt={48}>
      <Box pos="relative" zIndex={2}>
        <Image src={imageSrc} width={1200} height={600} alt={stepLabel[KronosStep.ACTIVATION]} />
      </Box>

      <AnimatedTriangle />

      <LightBurstFinal />
    </Box>
  )
}

/**
 * @name AnimatedTriangle
 *
 * @description
 * Renders a triangle that grows vertically from zero height and then enters a perpetual blinking state.
 * The triangle is rotated and mirrored to fit the Kronos visual layout.
 *
 * - Grows from height 0 to 430px in 0.4s;
 * - After growth, blinks infinitely with opacity cycling between 1 and 0.2;
 * - Positioned precisely to align with the destruction sequence.
 *
 * @author Giuseppe Del Campo
 */
const AnimatedTriangle = () => {
  const [blink, setBlink] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlink(true)
    }, 400)

    return () => clearTimeout(timer)
  }, [])

  return (
    <MotionBox
      pos="absolute"
      zIndex={1}
      top={537}
      left={850}
      w={95}
      bg="text.white"
      clipPath="polygon(50% 0%, 0% 100%, 100% 100%)"
      transform="rotate(88deg) scaleY(-1)"
      transformOrigin="top"
      initial={blink ? { opacity: 1 } : { height: 0 }}
      animate={blink ? { opacity: [1, 0.2, 1] } : { height: 430 }}
      transition={
        blink
          ? {
              opacity: {
                duration: 0.17,
                repeat: Infinity,
                repeatType: 'loop',
              },
            }
          : {
              height: {
                duration: 0.4,
                ease: 'easeOut',
              },
            }
      }
    />
  )
}

/**
 * @name LightBurstFinal
 *
 * @description
 * Creates a radial light explosion effect that expands and fades out.
 * Simulates a high-energy burst with intense glow and smooth dissipation.
 *
 * - Starts after 0.4s delay
 * - Expands from scale 0 to 2 over 0.5s
 * - Uses radial gradient and layered box shadows for maximum luminosity
 *
 * @author Giuseppe Del Campo
 */

const LightBurstFinal = () => {
  return (
    <MotionBox
      pos="absolute"
      top={370}
      left={1100}
      transform="translate(-50%, -50%)"
      borderRadius="full"
      bg="radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.1) 80%, rgba(255,255,255,0) 100%)"
      boxShadow="0 0 80px 40px rgba(255,255,255,0.9), 0 0 160px 80px rgba(255,255,255,0.6)"
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: 2, opacity: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.5,
        ease: 'easeOut',
      }}
      w="300px"
      h="300px"
      pointerEvents="none"
      zIndex={3}
    />
  )
}

export default KronosStep3
