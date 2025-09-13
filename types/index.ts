import { ReactElement } from 'react'

export type MenuItem = {
  label: string
  icon: ReactElement
  href: string | null
  onClick?: () => void
}

export interface Super {
  slug: string
  name: string
  description: string
  threatRating: number
  img: string
}

export interface Omnidroid {
  name: string
  slug: string
  description: string
  img: string
}

export interface Encounter {
  superSlug: string
  omnidroidSlug: string
  superDefeated: boolean
  omnidroidDefeated: boolean
}

export interface SuperResult {
  name: string
  slug: string
  img: string
  description: string
  lastActiveRecord: string
  locationKnown: boolean
  threatRating: string
}
