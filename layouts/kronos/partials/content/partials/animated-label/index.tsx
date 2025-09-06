import React from 'react'
import { BoxProps, Text, TextProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionText = motion(Text)

interface AnimatedLabelProps extends TextProps {
  top: BoxProps['top']
  left: BoxProps['left']
  text: string[]
  delay?: number
}

/**
 * @name AnimatedLabel
 *
 * @description
 * Displays animated labels at key locations on the Kronos map.
 * Each label fades in with a delay and contains two lines of text.
 *
 * - Positioned absolutely with custom top/left values
 * - Supports text alignment and delay configuration
 *
 * @author Giuseppe Del Campo
 */
const AnimatedLabel: React.FC<AnimatedLabelProps> = ({ top, left, text, delay = 0, ...props }) => {
  return (
    <MotionText
      pos="absolute"
      top={top}
      left={left}
      textTransform="uppercase"
      color="{colors.background.quaternary}"
      fontSize="14px"
      letterSpacing="1px"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      /* @ts-expect-error Usual motion stuff */
      transition={{ duration: 0.5, delay }}
      {...props}
    >
      {text.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.length - 1 && <br />}
        </React.Fragment>
      ))}
    </MotionText>
  )
}

export default AnimatedLabel
