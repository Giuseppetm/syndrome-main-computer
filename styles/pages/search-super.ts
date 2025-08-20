import { defineSlotRecipe } from '@chakra-ui/react'

export const searchSuperPageRecipe = defineSlotRecipe({
  slots: ['container', 'wrapper', 'inputWrapper', 'searchLabelWrapper', 'searchLabel', 'horizontalLines', 'verticalLines'],
  base: {
    container: {
      w: 'full',
      h: 'full',
      justifyContent: 'center',
      bg: 'bodyBg',
      color: 'bodyText',
      alignItems: 'center',
      position: 'relative',
    },
    wrapper: {
      minW: '70%',
      zIndex: 1,
    },
    inputWrapper: {
      bg: '{colors.background.secondary}',
      flex: 1,
      px: 14,
    },
    searchLabelWrapper: {
      h: 'full',
      justifyContent: 'center',
      bg: '{colors.background.quaternary}',
      px: 4,
      maxWidth: '250px',
    },
    searchLabel: {
      textTransform: 'uppercase',
      textStyle: 'regular',
      color: '{colors.text.white}',
      letterSpacing: '4px',
      fontSize: '40px',
      transform: 'scale(0.8, 1.3)',
      transformOrigin: 'center',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      lineHeight: 1,
    },
    horizontalLines: {
      pos: 'absolute',
      borderTop: '1px solid',
      borderTopColor: '{colors.text.white}',
      borderBottom: '1px solid',
      borderBottomColor: '{colors.text.white}',
      h: '98px',
      w: 'full',
      zIndex: 10,
      pointerEvents: 'none',
    },
    verticalLines: {
      pos: 'absolute',
      borderRight: '1px solid',
      borderRightColor: '{colors.text.white}',
      borderLeft: '1px solid',
      borderLeftColor: '{colors.text.white}',
      h: 'full',
      w: '1346px',
    },
  },
})
