import React, { forwardRef, useMemo } from 'react'
import { Box, BoxProps, HStack, Input, InputProps, StackProps, useSlotRecipe } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

/**
 * Animation keyframes for the blinking underscore cursor.
 */
const blink = keyframes`
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
`

interface TerminalInputProps extends InputProps {
  password: string
  showCursor?: boolean // optional: allow disabling the blinking cursor
}

/**
 * @name TerminalInput
 *
 * @description
 * Custom input component designed to simulate
 * the look and feel of a terminal password prompt.
 *
 * Features:
 * - Dynamically resizes based on the length of the `password`.
 * - Displays a blinking underscore cursor next to the input field.
 *
 * @example
 * ```tsx
 * <TerminalInput
 *   password={password}
 *   onChange={(e) => setPassword(e.target.value)}
 * />
 * ```
 *
 * @author Giuseppe Del Campo
 */
const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(({ password, onChange, ...props }, ref) => {
  const styles = useSlotRecipe({ key: 'terminalInputComponent' })({}) as Record<string, BoxProps & StackProps & InputProps>

  const blinkCharacter = '_'
  const charWidth = 120
  const width = useMemo(() => (password.length > 0 ? password.length * charWidth : charWidth), [password, charWidth])

  return (
    <HStack {...styles.wrapper}>
      <Input {...styles.passwordInput} {...props} w={`${width}px`} ref={ref} autoFocus type="text" value={password} autoComplete="off" onChange={onChange} maxLength={20} />

      <Box {...styles.blinkUnderscore} as="span" ml={password.length === 0 ? '-120px' : 0} animation={`${blink} 1s step-start infinite`}>
        {blinkCharacter}
      </Box>
    </HStack>
  )
})

TerminalInput.displayName = 'TerminalInput'

export default TerminalInput
