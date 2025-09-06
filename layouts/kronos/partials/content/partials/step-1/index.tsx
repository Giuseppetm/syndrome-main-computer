import AnimatedLabel from '../animated-label'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import { KronosStep, stepLabel } from '@/layouts/kronos'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

/**
 * @name KronosStep1
 *
 * @description
 * Represents the first animated visualization step in the Kronos Project animation sequence.
 *
 * Features:
 * - Displays a small omnidroid image and a ship image, positioned absolutely.
 * - Shows animated labels to identify objects ("Omnidroid", "Slider", "Delivery Vehicle").
 * - Draws an animated horizontal line expanding between objects.
 * - Highlights a connection point with a blinking circle animation.
 *
 * @author Giuseppe Del Campo
 */
const KronosStep1 = () => {
  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
      <Box pos="absolute" top={420} left={500} zIndex={2}>
        <Image
          src={'/images/kronos/small-omnidroid-upscale-v2.png'}
          width={230}
          height={100}
          alt={stepLabel[KronosStep.LOADING] + ' - Small Omnidroid'}
        />
      </Box>

      <Box pos="absolute" top={245} left={880} zIndex={2}>
        <Image src={'/images/kronos/ship-v2.png'} width={430} height={100} alt={stepLabel[KronosStep.LOADING] + ' - Ship'} />
      </Box>

      <AnimatedLabel top={290} left={570} text={['Omnidroid']} />
      <AnimatedLabel top={290} left={1200} text={['Omnidroid', 'Slider']} />
      <AnimatedLabel top={640} left={1205} text={['Delivery', 'Vehicle']} />

      {/* Animated Line */}
      <MotionBox
        pos="absolute"
        top={420}
        left={616}
        initial={{ width: 0 }}
        animate={{ width: 530 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }}
        height="108px"
        bg="{colors.text.white}"
        zIndex={1}
      />

      {/* Blinking Circle */}
      <MotionBox
        pos="absolute"
        top={415}
        left={1021}
        zIndex={3}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.7,
        }}
        w={115}
        h={115}
        bg="{colors.text.white}"
        borderRadius="full"
      />
    </MotionBox>
  )
}

export default KronosStep1
