import { defineSlotRecipe } from '@chakra-ui/react'

export const searchResultLayoutRecipe = defineSlotRecipe({
  slots: ['grid', 'spacer', 'infoWrapper', 'superName', 'locationLabel', 'locationStatus', 'superDescription', 'threatRating'],
  base: {
    grid: {
      w: 'full',
      h: 'full',
      bg: 'bodyBg',
      color: 'bodyText',
    },
    spacer: {
      h: '86px',
      w: 'full',
    },
    infoWrapper: {
      pt: 36,
      px: 7,
      bg: '{colors.background.secondary}',
      minHeight: 738,
    },
    superName: {
      textStyle: 'bold',
      fontSize: '56px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      lineHeight: 1,
    },
    locationLabel: {
      display: 'block',
      textStyle: 'bold',
      fontSize: '26px',
      textTransform: 'uppercase',
      mb: 3,
    },
    locationStatus: {
      color: '{colors.text.red}',
    },
    superDescription: {
      textTransform: 'uppercase',
      letterSpacing: '1px',
      textStyle: 'regular',
      fontSize: '17px',
      mb: 4,
    },
    threatRating: {
      bg: '{colors.text.red}',
      color: '{colors.text.white}',
      textTransform: 'uppercase',
      textStyle: 'regular',
      fontSize: '17px',
      px: 3,
      py: 2,
      lineHeight: 1,
      w: 'fit-content',
      letterSpacing: '2px',
    },
  },
})
