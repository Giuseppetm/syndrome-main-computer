import { defineSlotRecipe } from '@chakra-ui/react'

export const menuLayoutRecipe = defineSlotRecipe({
  slots: ['navigator'],
  base: {
    navigator: {
      bg: '{colors.background.primary}',
      color: '{colors.text.primary}',
      w: 'full',
      h: 'full',
    },
  },
})
