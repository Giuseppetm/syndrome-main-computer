import React, { forwardRef, useMemo } from 'react'
import { Box, BoxProps, HStack, Input, InputProps, StackProps, useSlotRecipe } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

// Animation for the blinking underscore
const blink = keyframes`
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
`

interface TerminalInputProps extends InputProps {
  password: string
  showCursor?: boolean // optional: allow disabling the blinking cursor
}

const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(({ password, onChange, ...props }, ref) => {
  const styles = useSlotRecipe({ key: 'terminalInputComponent' })({}) as Record<string, BoxProps & StackProps & InputProps>

  const charWidth = 120
  const width = useMemo(() => (password.length > 0 ? password.length * charWidth : charWidth), [password, charWidth])

  return (
    <HStack {...styles.wrapper}>
      <Input {...styles.passwordInput} {...props} w={`${width}px`} ref={ref} autoFocus type="text" value={password} autoComplete="off" onChange={onChange} maxLength={20} />

      <Box {...styles.blinkUnderscore} as="span" ml={password.length === 0 ? '-72px' : 0} animation={`${blink} 1s step-start infinite`}>
        _
      </Box>
    </HStack>
  )
})

TerminalInput.displayName = 'TerminalInput'

export default TerminalInput
