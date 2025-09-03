import { defineSlotRecipe } from '@chakra-ui/react'

export const menuLayoutRecipe = defineSlotRecipe({
  slots: ['wrapper', 'navigator', 'lateralLines'],
  base: {
    wrapper: {
      bg: '{colors.background.gradientSecondary}',
      w: 'full',
      justifyContent: 'center',
    },
    navigator: {
      color: '{colors.text.primary}',
      py: '5',
    },
    lateralLines: {
      position: 'absolute',
      borderRight: `1px solid`,
      borderRightColor: '{colors.text.white}',
      borderLeft: `1px solid`,
      borderLeftColor: '{colors.text.white}',
      h: 'full',
      zIndex: 10,
      left: '430px',
      width: '183px',
      pointerEvents: 'none',
    },
  },
})
