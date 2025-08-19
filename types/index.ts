import { ReactElement } from 'react'

export type MenuItem = {
  label: string
  icon: ReactElement
  href: string
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
