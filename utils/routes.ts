import { encounters } from '@/data'

export enum ROUTES {
  AUTHENTICATION = '/',
  MENU = '/menu',
  ENCOUNTER = '/encounter',
  SEARCH_SUPER = '/search-super',
  SUPER_RESULT = '/super-result',
  ISLAND_OPERATIONS = '/island-operations',
  COUNTDOWN = '/countdown',
}

export const getEncounterRoute = (superSlug: string, omnidroidSlug: string) => `${ROUTES.ENCOUNTER}/${superSlug}/${omnidroidSlug}`

const firstEncounter = encounters[0]

export const getFirstEncounterRoute = () => `${ROUTES.ENCOUNTER}/${firstEncounter.superSlug}/${firstEncounter.omnidroidSlug}`
