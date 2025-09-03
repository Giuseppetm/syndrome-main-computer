import { defineSlotRecipe } from '@chakra-ui/react'

export const kronosLayoutRecipe = defineSlotRecipe({
  slots: ['container', 'fillerRow', 'sequenceLabel'],
  base: {
    container: {
      justifyContent: 'flex-start',
      w: 'full',
      h: 'full',
      gap: 0,
    },
    fillerRow: {
      minHeight: '90px',
    },
    sequenceLabel: {
      color: '{colors.text.white}',
      textTransform: 'uppercase',
      fontSize: '24px',
      letterSpacing: '2px',
    },
  },
})
