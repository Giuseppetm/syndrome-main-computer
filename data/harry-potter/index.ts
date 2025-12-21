import { harryPotterEntities } from './characters'

export * from './characters'
export * from './encounters'

export const harryPotterPreloadImages = [...harryPotterEntities.map((o) => `/images/harry-potter/entities/${o.img}`)]
