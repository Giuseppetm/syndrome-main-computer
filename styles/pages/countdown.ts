import { defineSlotRecipe } from '@chakra-ui/react'

export const countdownPageRecipe = defineSlotRecipe({
  slots: ['container', 'title'],
  base: {
    container: {
      w: 'full',
      h: 'full',
      justifyContent: 'center',
      bg: 'bodyBg',
      color: 'bodyText',
      alignItems: 'center',
    },
    title: {
      textStyle: 'bold',
      color: '{colors.text.white}',
      fontSize: '70px',
      lineHeight: 1,
      letterSpacing: '4px',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
})
