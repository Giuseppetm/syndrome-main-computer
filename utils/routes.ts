import { encounters } from '@/data'

export enum ROUTES {
  HOME = '/',
  AUTHENTICATION = '/authentication',
  MENU = '/menu',
  MENU_SUPERS = '/menu/supers',
  ENCOUNTER = '/encounter',
  SEARCH_SUPER = '/search-super',
  SUPER_RESULT = '/super-result',
  ISLAND_OPERATIONS = '/island-operations',
}

export const getEncounterRoute = (superSlug: string, omnidroidName: string) => `${ROUTES.ENCOUNTER}/${superSlug}/${omnidroidName}`

const firstEncounter = encounters[0]

export const getFirstEncounterRoute = () => `${ROUTES.ENCOUNTER}/${firstEncounter.superSlug}/${firstEncounter.omnidroidName}`
