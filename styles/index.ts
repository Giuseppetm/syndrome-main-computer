import { createSystem, defaultConfig } from '@chakra-ui/react'
import { menuLayoutRecipe } from './layouts/menu'

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        text: {
          primary: { value: '#181818' },
        },
        background: {
          primary: { value: '#4D7676' },
          secondary: { value: '#859E9D' },
        },
      },
    },
    semanticTokens: {
      colors: {
        bodyBg: { value: '{colors.background.primary}' },
        bodyText: { value: '{colors.text.primary}' },
      },
    },
    slotRecipes: {
      menuLayout: menuLayoutRecipe,
    },
  },
})

export default system
