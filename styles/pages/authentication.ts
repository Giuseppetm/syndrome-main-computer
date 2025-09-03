import { defineSlotRecipe } from '@chakra-ui/react'

export const authenticationPageRecipe = defineSlotRecipe({
  slots: ['container', 'terminalPasswordWrapper'],
  base: {
    container: {
      w: 'full',
      h: 'full',
      justifyContent: 'center',
      bg: 'bodyBg',
      color: 'bodyText',
    },
    terminalPasswordWrapper: {
      bg: '{colors.background.gradientSecondary}',
      w: 'full',
    },
  },
})
