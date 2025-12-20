import { Encounter } from '@/types'

export const starWarsEncounters: Array<Encounter> = [
  // --- The Phantom Menace ---
  { entityA_slug: 'qui-gon-jinn-ep1', entityB_slug: 'darth-maul-ep1', entityA_defeated: true, entityB_defeated: false },
  { entityA_slug: 'obi-wan-kenobi-ep1', entityB_slug: 'darth-maul-ep1', entityA_defeated: false, entityB_defeated: true },

  // --- Attack of the Clones ---
  { entityA_slug: 'anakin-skywalker-ep2', entityB_slug: 'count-dooku-ep2', entityA_defeated: true, entityB_defeated: false },
  { entityA_slug: 'obi-wan-kenobi-ep2', entityB_slug: 'count-dooku-ep2', entityA_defeated: true, entityB_defeated: false },

  // --- Revenge of the Sith ---
  { entityA_slug: 'anakin-skywalker-ep3', entityB_slug: 'count-dooku-ep3', entityA_defeated: false, entityB_defeated: true },
  { entityA_slug: 'mace-windu-ep3', entityB_slug: 'darth-sidious-ep3', entityA_defeated: true, entityB_defeated: false },
  { entityA_slug: 'obi-wan-kenobi-ep3', entityB_slug: 'anakin-skywalker-ep3', entityA_defeated: false, entityB_defeated: true },
  { entityA_slug: 'yoda-ep3', entityB_slug: 'darth-sidious-ep3', entityA_defeated: true, entityB_defeated: false },

  // --- A New Hope ---
  { entityA_slug: 'obi-wan-kenobi-ep4', entityB_slug: 'darth-vader-ep4', entityA_defeated: true, entityB_defeated: false },

  // --- The Empire Strikes Back ---
  { entityA_slug: 'luke-skywalker-ep5', entityB_slug: 'darth-vader-ep5', entityA_defeated: true, entityB_defeated: false },

  // --- Return of the Jedi ---
  { entityA_slug: 'luke-skywalker-ep6', entityB_slug: 'darth-vader-ep6', entityA_defeated: false, entityB_defeated: true },
  { entityA_slug: 'darth-vader-ep6', entityB_slug: 'darth-sidious-ep6', entityA_defeated: true, entityB_defeated: true },
]
