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

  // --- Clone Wars (duelli principali) ---
  { entityA_slug: 'anakin-skywalker-cw', entityB_slug: 'darth-maul-cw', entityA_defeated: false, entityB_defeated: true },
  { entityA_slug: 'ahsoka-tano-cw', entityB_slug: 'darth-maul-cw', entityA_defeated: false, entityB_defeated: true },

  // --- Rebels ---
  { entityA_slug: 'ahsoka-tano-rebels', entityB_slug: 'darth-vader-rebels', entityA_defeated: true, entityB_defeated: false },

  // --- A New Hope ---
  { entityA_slug: 'obi-wan-kenobi-ep4', entityB_slug: 'darth-vader-ep4', entityA_defeated: true, entityB_defeated: false },

  // --- The Empire Strikes Back ---
  { entityA_slug: 'luke-skywalker-ep5', entityB_slug: 'darth-vader-ep5', entityA_defeated: true, entityB_defeated: false },

  // --- Return of the Jedi ---
  { entityA_slug: 'luke-skywalker-ep6', entityB_slug: 'darth-vader-ep6', entityA_defeated: false, entityB_defeated: true },
  { entityA_slug: 'darth-vader-ep6', entityB_slug: 'darth-sidious-ep6', entityA_defeated: false, entityB_defeated: true },

  // --- The Force Awakens ---
  { entityA_slug: 'rey-tfa', entityB_slug: 'kylo-ren-tfa', entityA_defeated: false, entityB_defeated: true },

  // --- The Last Jedi ---
  { entityA_slug: 'luke-skywalker-ep8', entityB_slug: 'kylo-ren-ep8', entityA_defeated: false, entityB_defeated: true },

  // --- The Rise of Skywalker ---
  { entityA_slug: 'rey-tros', entityB_slug: 'kylo-ren-tros', entityA_defeated: false, entityB_defeated: true },
  { entityA_slug: 'rey-tros', entityB_slug: 'darth-sidious-tros', entityA_defeated: false, entityB_defeated: true },

  // --- Kenobi (2022) ---
  { entityA_slug: 'obi-wan-kenobi-kenobi', entityB_slug: 'darth-vader-kenobi', entityA_defeated: false, entityB_defeated: true },

  // --- Ahsoka (2023) ---
  { entityA_slug: 'ahsoka-tano-ahsoka', entityB_slug: 'baylan-skoll-ahsoka', entityA_defeated: true, entityB_defeated: false },

  // --- The Mandalorian ---
  { entityA_slug: 'din-djarin-mando', entityB_slug: 'moff-gideon-mando', entityA_defeated: false, entityB_defeated: true },

  // --- Jedi: Fallen Order ---
  { entityA_slug: 'cal-kestis-fo', entityB_slug: 'second-sister-fo', entityA_defeated: false, entityB_defeated: true },
]
