import { Entity } from '@/types'
import { theIncrediblesSupers, theIncrediblesSupersResult } from './supers'
import { theIncrediblesOmnidroids } from './omnidroids'

export * from './encounters'
export * from './omnidroids'
export * from './supers'

export const theIncrediblesCharacters: Array<Entity> = [...theIncrediblesSupers, ...theIncrediblesOmnidroids]

export const theIncrediblesPreloadImages = [
  ...theIncrediblesOmnidroids.map((o) => `/images/the-incredibles/entities/${o.img}`),
  ...theIncrediblesSupers.map((s) => `/images/the-incredibles/entities/${s.img}`),
  ...theIncrediblesSupersResult.map((s) => `/images/the-incredibles/search-results/${s.img}`),
]
