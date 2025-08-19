import { defineSlotRecipe } from '@chakra-ui/react'

export const searchSuperPageRecipe = defineSlotRecipe({
  slots: ['container'],
  base: {
    container: {
      w: 'full',
      h: 'full',
      justifyContent: 'center',
      bg: 'bodyBg',
      color: 'bodyText',
      alignItems: 'center',
    },
  },
})
