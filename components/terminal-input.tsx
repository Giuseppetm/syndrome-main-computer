import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Box, BoxProps, HStack, Input, InputProps, StackProps, useSlotRecipe } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

/**
 * Animation keyframes for the blinking underscore cursor.
 */
const blink = keyframes`
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
`

interface TerminalInputProps extends Omit<InputProps, 'variant'> {
  value: string
  alignment?: 'center' | 'start'
  variant?: 'search'
}

/**
 * @name TerminalInput
 *
 * @description
 * Custom input component designed to simulate
 * the look and feel of a terminal value prompt.
 *
 * Features:
 * - Dynamically resizes based on the length of the `value`.
 * - Displays a blinking underscore cursor next to the input field.
 *
 * @example
 * ```tsx
 * <TerminalInput
 *   value={value}
 *   onChange={(e) => setvalue(e.target.value)}
 * />
 * ```
 *
 * @author Giuseppe Del Campo
 */
const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(({ value, alignment = 'center', variant, onChange, ...props }, ref) => {
  const styles = useSlotRecipe({ key: 'terminalInputComponent' })({ mode: variant }) as Record<string, BoxProps & StackProps>
  const measureRef = useRef<HTMLSpanElement>(null)
  const [textWidth, setTextWidth] = useState(0)

  useEffect(() => {
    if (measureRef.current) {
      setTextWidth(measureRef.current.offsetWidth)
    }
  }, [value])

  const blinkCharacter = '_'

  return (
    <HStack {...styles.wrapper} justifyContent={alignment === 'center' ? 'center' : 'flex-start'} position="relative">
      <Input
        {...styles.valueInput}
        {...props}
        ref={ref}
        autoFocus
        type="text"
        value={value}
        autoComplete="off"
        onChange={onChange}
        w={`${Math.max(textWidth, 1)}px`}
      />

      {value.length > 0 ? (
        <Box {...styles.blinkUnderscore} as="span" animation={`${blink} 1s step-start infinite`} lineHeight={1}>
          {blinkCharacter}
        </Box>
      ) : (
        <Box
          {...styles.blinkUnderscore}
          as="span"
          position="absolute"
          left={alignment === 'center' ? '50%' : '0'}
          transform={alignment === 'center' ? 'translateX(-50%)' : 'none'}
          animation={`${blink} 1s step-start infinite`}
          lineHeight={1}
        >
          {blinkCharacter}
        </Box>
      )}

      <Box ref={measureRef} visibility="hidden" whiteSpace="pre" position="absolute" {...styles.valueInput}>
        {value}
      </Box>
    </HStack>
  )
})

TerminalInput.displayName = 'TerminalInput'

export default TerminalInput
