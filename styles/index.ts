import { createSystem, defaultConfig } from '@chakra-ui/react'
import { menuLayoutRecipe } from './layouts/menu'
import { encounterLayoutRecipe } from './layouts/encounter'
import { authenticationPageRecipe } from './pages/authentication'
import { terminalInputComponentRecipe } from './components/terminal-input'
import { menuPageRecipe } from './pages/menu'
import { menuItemComponentRecipe } from './layouts/menu/partials/menu-item'
import { encounterFrameComponentRecipe } from './layouts/encounter/partials/frame'
import { islandOperationsPageRecipe } from './pages/island-operations'
import { searchSuperPageRecipe } from './pages/search-super'
import { searchResultLayoutRecipe } from './layouts/search-result'

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        text: {
          black: { value: '#181818' },
          white: { value: '#A6A8A8' },
          red: { value: '#AE0F0D' },
        },
        background: {
          primary: { value: '#4D7676' },
          secondary: { value: '#859E9D' },
          tertiary: { value: '#5E706E' },
          quaternary: { value: '#364F50' },
          gradient: { value: 'radial-gradient(circle at center, #5f8f92 0%, #2f4f4f 100%)' },
        },
        spacing: {
          '1': { value: '4px' },
          '2': { value: '8px' },
          '3': { value: '12px' },
          '4': { value: '16px' },
          '5': { value: '20px' },
          '6': { value: '24px' },
          '7': { value: '28px' },
          '8': { value: '32px' },
          '9': { value: '36px' },
          '10': { value: '40px' },
          '11': { value: '44px' },
          '12': { value: '48px' },
          '13': { value: '52px' },
          '14': { value: '56px' },
        },
      },
      fonts: {
        eurostile: { value: 'Eurostile, sans-serif' },
      },
    },
    semanticTokens: {
      colors: {
        bodyBg: { value: '{colors.background.gradient}' },
        bodyText: { value: '{colors.text.black}' },
      },
    },
    textStyles: {
      regular: {
        description: 'Body style with Eurostile Regular',
        value: { fontFamily: 'eurostile', fontWeight: 400 },
      },
      bold: {
        description: 'Heading style with Eurostile Bold',
        value: { fontFamily: 'eurostile', fontWeight: 700 },
      },
    },
    slotRecipes: {
      // Layouts
      menuLayout: menuLayoutRecipe,
      encounterLayout: encounterLayoutRecipe,
      searchResultLayout: searchResultLayoutRecipe,
      // Pages
      authenticationPage: authenticationPageRecipe,
      menuPage: menuPageRecipe,
      islandOperationsPage: islandOperationsPageRecipe,
      searchSuperPage: searchSuperPageRecipe,
      // Components
      terminalInputComponent: terminalInputComponentRecipe,
      menuItemComponent: menuItemComponentRecipe,
      encounterFrameComponent: encounterFrameComponentRecipe,
    },
  },
})

export default system
