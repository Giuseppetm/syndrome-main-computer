import { defineSlotRecipe } from '@chakra-ui/react'

export const terminalInputComponentRecipe = defineSlotRecipe({
  slots: ['wrapper', 'passwordInput', 'blinkUnderscore'],
  base: {
    wrapper: {
      color: '{colors.text.primary}',
      w: 'full',
      justifyContent: 'center',
      py: '3',
      h: 'full',
      display: 'inline-flex',
      gap: '1',
    },
    passwordInput: {
      zIndex: 10,
      h: 'auto',
      border: 'none',
      outline: 'none',
      textTransform: 'uppercase',
      textStyle: 'bold',
      fontSize: '60px',
      letterSpacing: '50px',
      caretColor: 'transparent',
      px: '0',
    },
    blinkUnderscore: {
      textStyle: 'bold',
      fontSize: '60px',
    },
  },
})
