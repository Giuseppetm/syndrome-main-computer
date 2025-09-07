import { defineSlotRecipe } from '@chakra-ui/react'

export const timerComponentRecipe = defineSlotRecipe({
  slots: ['wrapper', 'unitValue', 'unitSeparator', 'unitLabel'],
  base: {
    wrapper: {
      w: 'full',
      justifyContent: 'center',
      py: 8,
      bg: '{colors.background.gradientSecondary}',
      alignItems: 'center',
    },
    unitValue: {
      textStyle: 'bold',
      color: '{colors.text.black}',
      fontSize: '126px',
      lineHeight: 1,
      letterSpacing: '4px',
    },
    unitSeparator: {
      textStyle: 'bold',
      color: '{colors.text.black}',
      fontSize: '72px',
      lineHeight: 1,
      mb: '60px',
    },
    unitLabel: {
      textStyle: 'bold',
      color: '{colors.text.red}',
      textTransform: 'uppercase',
      fontSize: '22px',
      letterSpacing: '3px',
    },
  },
})
