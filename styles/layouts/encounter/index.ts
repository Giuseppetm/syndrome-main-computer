import { defineSlotRecipe } from '@chakra-ui/react'

const encounterLayoutRecipe = defineSlotRecipe({
  slots: ['grid'],
  base: {
    grid: {
      w: 'full',
      h: 'full',
      bg: 'bodyBg',
      color: 'bodyText',
    },
  },
})

export { encounterLayoutRecipe }
