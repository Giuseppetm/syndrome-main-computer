import { ReactElement } from 'react'

export type MenuItem = {
  label: string
  icon: ReactElement
  href: string | null
  onClick?: () => void
}

export interface Entity {
  slug: string
  name: string
  description: string
  threatRating?: number
  img: string
}

export interface EntityResult extends Entity {
  lastActiveRecord: string
  locationKnown: boolean
  threatRatingLabel: string
}

export const UNIVERSE_IDS = { STAR_WARS: 'star-wars', THE_INCREDIBLES: 'the-incredibles' } as const

export type UniverseId = (typeof UNIVERSE_IDS)[keyof typeof UNIVERSE_IDS]

export type Universe = {
  id: UniverseId
  label: string
  img?: string
}

export type EncounterSet = {
  entities: Array<Entity>
  encounters: Array<Encounter>
}

export interface Encounter {
  entityA_slug: string
  entityB_slug: string
  entityA_defeated: boolean
  entityB_defeated: boolean
}
