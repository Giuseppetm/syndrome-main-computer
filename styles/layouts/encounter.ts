import { defineSlotRecipe } from '@chakra-ui/react'

export const encounterLayoutRecipe = defineSlotRecipe({
  slots: ['container'],
  base: {
    container: {
      backgroundColor: 'yellow.400',
    },
  },
})
