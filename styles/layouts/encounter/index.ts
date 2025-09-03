import { defineSlotRecipe } from '@chakra-ui/react'
import { encounterFrameComponentRecipe } from './partials/frame'

const encounterLayoutRecipeBase = defineSlotRecipe({
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

const encounterLayoutRecipe = {
  ...encounterLayoutRecipeBase,
  ...encounterFrameComponentRecipe,
}

export { encounterLayoutRecipe }
