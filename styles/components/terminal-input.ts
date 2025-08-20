import { defineSlotRecipe } from '@chakra-ui/react'

export const terminalInputComponentRecipe = defineSlotRecipe({
  slots: ['wrapper', 'valueInput', 'blinkUnderscore'],
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
    valueInput: {
      zIndex: 10,
      h: 'auto',
      border: 0,
      outline: 'none',
      textTransform: 'uppercase',
      textStyle: 'bold',
      fontSize: '60px',
      letterSpacing: '50px',
      caretColor: 'transparent',
      px: '0',
      _focus: {
        border: 0,
        outline: 'none',
      },
    },
    blinkUnderscore: {
      textStyle: 'bold',
      fontSize: '60px',
    },
  },
  variants: {
    mode: {
      search: {
        wrapper: {
          py: 2,
        },
        valueInput: {
          letterSpacing: '5px',
        },
      },
    },
  },
})
