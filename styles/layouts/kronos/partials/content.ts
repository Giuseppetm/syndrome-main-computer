import { defineSlotRecipe } from '@chakra-ui/react'

export const kronosContentComponentRecipe = defineSlotRecipe({
  slots: ['container', 'idle', 'idleLeftText', 'idleRightText', 'activation'],
  base: {
    container: {
      pt: 4,
      px: 8,
    },
    idle: {
      pt: 24,
      pos: 'relative',
    },
    idleLeftText: {
      pos: 'absolute',
      top: '100px',
      left: '-30px',
      color: '{colors.background.quaternary}',
      fontSize: '12px',
      transform: 'scale(0.6, 1.3)',
      transformOrigin: 'center',
    },
    idleRightText: {
      pos: 'absolute',
      top: '102px',
      right: '-110px',
      color: '{colors.background.quaternary}',
      fontSize: '12px',
      transform: 'scale(0.6, 1.3)',
      transformOrigin: 'center',
    },
    activation: {
      pt: 36,
    },
  },
})
