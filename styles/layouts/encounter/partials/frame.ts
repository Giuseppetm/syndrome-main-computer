import { defineSlotRecipe } from '@chakra-ui/react'

export const encounterFrameComponentRecipe = defineSlotRecipe({
  slots: ['container'],
  base: {
    container: {
      w: 'full',
      h: 'full',
      bg: 'transparent',
    },
  },
})
