import { starWarsCharacters } from './characters'

export * from './encounters'
export * from './characters'

export const starWarsPreloadImages = [...starWarsCharacters.map((o) => `/images/star-wars/entities/${o.img}`)]
