import { defineSlotRecipe } from '@chakra-ui/react'

export const islandOperationsPageRecipe = defineSlotRecipe({
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
