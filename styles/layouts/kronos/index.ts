import { defineSlotRecipe } from '@chakra-ui/react'

export const kronosLayoutRecipe = defineSlotRecipe({
  slots: ['container', 'sequenceLabel'],
  base: {
    container: {
      justifyContent: 'flex-start',
      w: 'full',
      h: 'full',
      gap: 0,
    },
    sequenceLabel: {
      color: '{colors.text.white}',
      textTransform: 'uppercase',
      fontSize: '24px',
      letterSpacing: '2px',
    },
  },
})
