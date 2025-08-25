import { defineSlotRecipe } from '@chakra-ui/react'

export const menuItemComponentRecipe = defineSlotRecipe({
  slots: ['wrapper', 'label', 'iconWrapper'],
  base: {
    wrapper: {
      w: 'fit-content',
      py: '2',
      transition: `all 0.1s ease`,
    },
    label: {
      textStyle: 'regular',
      textTransform: 'uppercase',
      fontSize: '34px',
      letterSpacing: '8px',
      px: '12',
    },
    iconWrapper: {
      px: '16',
      maxWidth: '178px',
    },
  },
  variants: {
    state: {
      active: {
        wrapper: {
          bg: '{colors.background.tertiary}',
        },
        label: {
          color: '{colors.text.white}',
        },
        iconWrapper: {
          filter: 'invert(.95)',
        },
      },
      inactive: {},
    },
  },
  defaultVariants: {
    state: 'inactive',
  },
})
