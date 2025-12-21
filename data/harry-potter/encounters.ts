import { Encounter } from '@/types'

export const harryPotterEncounters: Array<Encounter> = [
  // --- Year 1 ---
  {
    entityA_slug: 'harry-potter-y1',
    entityB_slug: 'voldemort-y1',
    entityA_defeated: false,
    entityB_defeated: true,
  },

  // --- Year 2 ---
  {
    entityA_slug: 'harry-potter-y2',
    entityB_slug: 'voldemort-y2',
    entityA_defeated: false,
    entityB_defeated: true,
  },

  // --- Year 4 (Goblet of Fire) ---
  {
    entityA_slug: 'harry-potter-y4',
    entityB_slug: 'voldemort-y4',
    entityA_defeated: true, // Harry scappa, Voldemort domina
    entityB_defeated: false,
  },
  {
    entityA_slug: 'cedric-diggory-y4',
    entityB_slug: 'voldemort-y4',
    entityA_defeated: true, // Cedric viene ucciso
    entityB_defeated: false,
  },

  // --- Year 5 ---
  {
    entityA_slug: 'dumbledore-y5',
    entityB_slug: 'voldemort-y5',
    entityA_defeated: false,
    entityB_defeated: true, // Voldemort fugge
  },

  // --- Year 6 ---
  {
    entityA_slug: 'draco-malfoy-y6',
    entityB_slug: 'harry-potter-y5',
    entityA_defeated: true,
    entityB_defeated: false,
  },

  // --- Year 7 ---
  {
    entityA_slug: 'snape-y7',
    entityB_slug: 'voldemort-y7',
    entityA_defeated: true, // Snape muore
    entityB_defeated: false,
  },
  {
    entityA_slug: 'bellatrix-y7',
    entityB_slug: 'molly-weasley-y7',
    entityA_defeated: true,
    entityB_defeated: false,
  },
  {
    entityA_slug: 'harry-potter-y7',
    entityB_slug: 'voldemort-y7',
    entityA_defeated: false,
    entityB_defeated: true,
  },
]
