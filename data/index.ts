import { Universe } from '@/types'

export * from './the-incredibles'
export * from './star-wars'

export const UNIVERSES: Array<Universe> = [
  { id: 'the-incredibles', label: 'The Incredibles', img: 'the-incredibles.png', navigationDelay: 1100 },
  { id: 'star-wars', label: 'Star Wars', img: 'star-wars.png', navigationDelay: 1600 },
  { id: 'harry-potter', label: 'Harry Potter', img: 'harry-potter.png', navigationDelay: 1500 },
]

export const gaId = 'G-220V3ZRLLS'
