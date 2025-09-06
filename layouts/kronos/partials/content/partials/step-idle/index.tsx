import { Box, BoxProps, StackProps, Text, TextProps, useSlotRecipe } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const MotionBox = motion(Box)

const fadeTextVariant = {
  hidden: { opacity: 0, filter: 'brightness(3)', color: '#ffffff' },
  visible: {
    opacity: 1,
    filter: 'brightness(1)',
    color: '#364F50',
    transition: {
      duration: 0.4,
    },
  },
}

const fadeImageVariant = {
  hidden: { opacity: 0, filter: 'brightness(3)' },
  visible: {
    opacity: 1,
    filter: 'brightness(1)',
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
}

/**
 * @name KronosStepIdle
 *
 * @description
 * Represents the idle state in the Kronos Project workflow sequence.
 *
 * Features:
 * - Displays the final design of the Omnidroid with a fade-in effect.
 * - Shows two blocks of animated "dummy data" text on the left and right side,
 *   simulating cryptic or technical information being displayed.
 * - Texts and image use motion-based fade transitions to smoothly appear on screen.
 *
 * @author Giuseppe Del Campo
 */
const KronosStepIdle = () => {
  const styles = useSlotRecipe({ key: 'kronosContentComponent' })({}) as Record<string, StackProps & TextProps & BoxProps>

  return (
    <Box {...styles.idle}>
      <MotionBox initial="hidden" animate="visible" variants={fadeImageVariant}>
        <Image src={'/images/kronos/omnidroid_cut_upscale.png'} width={1000} height={500} alt={'Omnidroid Final Design v.10'} />
      </MotionBox>

      {/* @ts-expect-error Usual motion stuff */}
      <MotionBox {...styles.idleLeftText} initial="hidden" animate="visible" variants={fadeTextVariant}>
        <Text>8 347 54 83 893 D99 4478 485 43 23 92 37847 893</Text>
        <Text>93 4774 23 977 3 8712 367 4357 8 28 2537 344478</Text>
        <Text>4 334 4 24 32382 444 52 34587 78 2532 3 44478 4</Text>
        <Text>
          53&nbsp;&nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 89&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp; 8&nbsp;&nbsp;&nbsp;&nbsp;
          89&nbsp;&nbsp;&nbsp;&nbsp; 482874&nbsp;&nbsp; 4&nbsp;&nbsp;&nbsp;&nbsp; 34 &nbsp;&nbsp;&nbsp;3
        </Text>
      </MotionBox>

      {/* @ts-expect-error Usual motion stuff */}
      <MotionBox {...styles.idleRightText} initial="hidden" animate="visible" variants={fadeTextVariant}>
        <Text>7 346 52 78 575 577 44673 425 42 37 82 36746 752 4894</Text>
        <Text>25 773 3 5752 367 4356 52 8 12 78 4930 32232 671 1258</Text>
        <Text>37 395 39 32 761653 51 6461 783 83 75 68 5 46415 8350</Text>
        <Text>25 73834 73 247 58 25 4555 76 2332 21 44427 4 53 8956</Text>
        <Text>83 43376 42 3438375 44 52 3450 78 2532 34 44467 5343</Text>
        <Text>
          53&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 89&nbsp;&nbsp;&nbsp;
          5&nbsp;&nbsp;&nbsp; 8&nbsp;&nbsp;&nbsp;&nbsp; 89&nbsp;&nbsp;&nbsp;&nbsp; 482874&nbsp;&nbsp; 4&nbsp;&nbsp;&nbsp;&nbsp; 34 &nbsp;&nbsp;&nbsp;3
        </Text>
      </MotionBox>
    </Box>
  )
}

export default KronosStepIdle
