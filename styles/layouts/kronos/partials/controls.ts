import { defineSlotRecipe } from '@chakra-ui/react'

export const kronosControlsComponentRecipe = defineSlotRecipe({
  slots: ['container', 'operationLabel', 'kronosLabel', 'phaseContainer', 'phaseLabel', 'stepButtonsContainer', 'stepButton', 'stepButtonActive'],
  base: {
    container: {
      pb: '20px',
      px: '40px',
    },
    operationLabel: {
      textStyle: 'bold',
      textTransform: 'uppercase',
      fontSize: '43px',
      lineHeight: 1,
      letterSpacing: '3px',
    },
    kronosLabel: {
      textStyle: 'bold',
      textTransform: 'uppercase',
      color: '{colors.text.red}',
      fontSize: '62px',
      lineHeight: 1,
    },
    phaseContainer: {
      bg: '{colors.background.quaternary}',
      pl: '18px',
      pr: '28px',
      justifyContent: 'space-between',
    },
    phaseLabel: {
      color: '{colors.text.white}',
      textTransform: 'uppercase',
      fontSize: '25px',
      letterSpacing: '4px',
      mb: '2px',
    },
    stepButton: {
      bg: 'transparent',
      color: '{colors.text.white}',
      fontSize: '25px',
      px: '4px',
      minWidth: 'unset',
      borderRadius: 0,
      _active: {
        bg: '{colors.text.secondaryRed}',
        color: '{colors.text.black}',
      },
      _hover: {
        bg: '{colors.text.secondaryRed}',
        color: '{colors.text.black}',
      },
      '&[data-active=true]': {
        bg: '{colors.text.secondaryRed}',
        color: '{colors.text.black}',
      },
    },
  },
})
