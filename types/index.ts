import { ReactElement } from 'react'

export type MenuItem = {
  label: string
  icon: ReactElement
  href: string
}

export interface Super {
  name: string
  slug: string
  threatRating: number
  powers: string
  img: string
}

export interface Omnidroid {
  name: string
  features: string
  img: string
}

export interface Encounter {
  superSlug: string
  omnidroidName: string
  superDefeated: boolean
  omnidroidDefeated: boolean
}
