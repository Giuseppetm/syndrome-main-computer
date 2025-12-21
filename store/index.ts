import { starWarsCharacters, starWarsEncounters, theIncrediblesCharacters, theIncrediblesEncounters, UNIVERSES } from '@/data'
import { harryPotterEntities } from '@/data/harry-potter'
import { harryPotterEncounters } from '@/data/harry-potter/encounters'
import { EncounterSet, Universe, UNIVERSE_IDS } from '@/types'
import { ROUTES } from '@/utils/routes'
import { create } from 'zustand'

const mapEncounterSet = (universeId: string): EncounterSet => {
  switch (universeId) {
    case UNIVERSE_IDS.STAR_WARS:
      return {
        encounters: starWarsEncounters,
        entities: starWarsCharacters,
      }
    case UNIVERSE_IDS.THE_INCREDIBLES:
      return {
        encounters: theIncrediblesEncounters,
        entities: theIncrediblesCharacters,
      }
    case UNIVERSE_IDS.HARRY_POTTER:
      return {
        encounters: harryPotterEncounters,
        entities: harryPotterEntities,
      }
    default:
      throw new Error(`Unknown universe ID: ${universeId}`)
  }
}

interface State {
  isContentReady: boolean
  enableContent: () => void

  // Current universe
  universe: Universe
  setUniverse: (universe: Universe) => void

  // Current encounter set
  encounterSet: EncounterSet
  setEncounterSet: (encounterSet: EncounterSet) => void

  // Helpers to get routes
  getEncounterRoute: (entityA: string, entityB: string) => string
  getFirstEncounterRoute: () => string
}

export const useMainStore = create<State>((set, get) => ({
  isContentReady: false,
  enableContent: () => set(() => ({ isContentReady: true })),

  universe: UNIVERSES[0],
  setUniverse: (universe: Universe) => {
    set({
      universe,
      encounterSet: mapEncounterSet(universe.id),
    })
  },

  encounterSet: {
    encounters: theIncrediblesEncounters,
    entities: theIncrediblesCharacters,
  },
  setEncounterSet: (encounterSet: EncounterSet) => set(() => ({ encounterSet })),

  getEncounterRoute: (entityA: string, entityB: string) => `${ROUTES.ENCOUNTER}/${entityA}/${entityB}`,
  getFirstEncounterRoute: () => {
    const { encounters } = get().encounterSet
    return `${ROUTES.ENCOUNTER}/${encounters[0].entityA_slug}/${encounters[0].entityB_slug}`
  },
}))
