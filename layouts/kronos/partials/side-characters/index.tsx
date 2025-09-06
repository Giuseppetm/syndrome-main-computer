import React, { useEffect, useState } from 'react'
import { Box, BoxProps, Stack, Text, TextProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const fadeVariant = {
  hidden: { opacity: 0, filter: 'brightness(3)', color: '#ffffff' },
  visible: (i: number) => ({
    opacity: 1,
    filter: 'brightness(1)',
    color: '#364F50',
    transition: { duration: 0.3, delay: i * 0.05 },
  }),
}

const MotionText = motion(Text)

/**
 * Props for {@link SideCharacters} component.
 */
interface SideCharactersProps extends BoxProps {
  /** Position of rendering for side characters. */
  position: 'left' | 'right'
}

/**
 * @name SideCharacters
 *
 * @description
 * Generates random numbers to display in lateral columns of Kronos Project page.
 *
 * @author Giuseppe Del Campo
 */
const SideCharacters: React.FC<SideCharactersProps> = ({ position, ...props }) => {
  const [leftSideCharacters, setLeftSideCharacters] = useState<{ p1: string; p2: string }>()
  const [rightSideCharacters, setRightSideCharacters] = useState<Array<string>>()

  /**
   * Generates a string of `n` random digits (0–9) with random spaces and line breaks.
   * @param n - Number of digits to generate.
   * @returns A formatted string with digits, spaces, and line breaks.
   */
  function generateDigits(n: number, enableNewLines: boolean): string {
    const parts: string[] = []

    for (let i = 0; i < n; i++) {
      const digit = Math.floor(Math.random() * 10).toString()

      // Decide randomly to add space, line break, or nothing
      const rand = Math.random()
      if (rand < 0.4) {
        parts.push(digit + ' ')
      }

      if (rand < 0.1 && enableNewLines) {
        parts.push(digit + '\n')
      } else {
        parts.push(digit)
      }
    }

    return parts.join('')
  }

  /**
   * Generates a random integer between 5 and 10 (inclusive).
   * @returns A random number between 5 and 10.
   */
  function generateRightSideItemLength(): number {
    return Math.floor(Math.random() * (10 - 5 + 1)) + 5
  }

  const renderAnimatedText = (text: string) => {
    const lines = text.split('\n')
    return lines.map((line, i) => (
      <MotionText key={i} custom={i} initial="hidden" animate="visible" variants={fadeVariant}>
        {line}
      </MotionText>
    ))
  }

  /**
   * Initializes left and right side characters.
   */
  useEffect(() => {
    setLeftSideCharacters({ p1: generateDigits(150, true), p2: generateDigits(160, true) })
    const rightSideRes = []

    for (let i = 0; i < 17; i++) {
      const length = generateRightSideItemLength()
      const digits = generateDigits(length, false)
      rightSideRes.push(digits)
    }

    setRightSideCharacters(rightSideRes)
  }, [])

  const generatedDigitsStyles: TextProps = {
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textStyle: 'regular',
    fontSize: '8px',
    lineHeight: '16px',
    transform: 'scaleY(1.1)',
    transformOrigin: 'top',
    whiteSpace: 'pre-line',
  }

  return (
    <Box
      flexGrow={1}
      textAlign={position}
      w={'full'}
      maxW={position === 'left' ? '320px' : 'auto'}
      maxH={'787px'}
      py={'36px'}
      color={'{colors.background.quaternary}'}
      pl={position === 'left' ? '52px' : '200px'}
      pr={position === 'right' ? '52px' : '92px'}
      overflowY={'hidden'}
      {...generatedDigitsStyles}
      {...props}
    >
      {position === 'left' ? (
        <Stack gap={12}>
          <Text>{leftSideCharacters && renderAnimatedText(leftSideCharacters.p1)}</Text>
          <Text>{leftSideCharacters && renderAnimatedText(leftSideCharacters.p2)}</Text>
        </Stack>
      ) : (
        <Stack gap={4.5}>
          {rightSideCharacters?.map((ch, i) => (
            <MotionText key={`right-${i}`} custom={i} initial="hidden" animate="visible" variants={fadeVariant}>
              {ch}
            </MotionText>
          ))}
        </Stack>
      )}
    </Box>
  )
}

export default SideCharacters
