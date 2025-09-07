import { Super, SuperResult } from '@/types'

export const supers: Array<Super> = [
  { name: 'Universal Man', slug: 'universal-man', threatRating: 2.9, description: 'Atomic density manipulation', img: 'universal_man.png' },
  { name: 'Psycwave', slug: 'psycwave', threatRating: 1.6, description: 'Psychic foresight, thought control, telekinesis', img: 'psycwave.png' },
  { name: 'Everseer', slug: 'everseer', threatRating: 3.2, description: 'Telepathy, clairvoyance, magni-vision', img: 'everseer.png' },
  { name: 'Macroburst', slug: 'macroburst', threatRating: 5.9, description: 'High density force projection', img: 'macroburst.png' },
  { name: 'Phylange', slug: 'phylange', threatRating: 4.7, description: 'Sonic field projection', img: 'phylange.png' },
  { name: 'Blazestone', slug: 'blazestone', threatRating: 5.5, description: 'Pyrotechnic discharge, fire control', img: 'blazestone.png' },
  { name: 'Dynaguy', slug: 'dynaguy', threatRating: 6.2, description: 'Flight, disintegration ray', img: 'dynaguy.png' },
  { name: 'Downburst', slug: 'downburst', threatRating: 6.5, description: 'Flight, gaseous expulsion', img: 'downburst.png' },
  { name: 'Hyper shock', slug: 'hyper-shock', threatRating: 7.5, description: 'Seismic wave generation', img: 'hyper_shock.png' },
  { name: 'Apogee', slug: 'apogee', threatRating: 6.5, description: 'Gravity control, levitation', img: 'apogee.png' },
  { name: 'Tradewind', slug: 'tradewind', threatRating: 5.8, description: 'Elemental control of wind and storms', img: 'tradewind.png' },
  { name: 'Gazerbeam', slug: 'gazerbeam', threatRating: 6.3, description: 'Lazer vision', img: 'gazerbeam.png' },
  { name: 'Stormicide', slug: 'stormicide', threatRating: 6.7, description: 'Electrical discharge gale bursts', img: 'stormicide.png' },
  { name: 'Gamma jack', slug: 'gamma-jack', threatRating: 7.9, description: 'Controlled radiation burst', img: 'gamma_jack.png' },
  { name: 'Splashdown', slug: 'splashdown', threatRating: 7.4, description: 'Flight, aquatic respiration', img: 'splashdown.png' },
  { name: 'Plasmabolt', slug: 'plasmabolt', threatRating: 8.2, description: 'Flight, plasma wave emission', img: 'plasmabolt.png' },
  {
    name: 'Metaman',
    slug: 'metaman',
    threatRating: 8.9,
    description: 'Flight, super strength, x-ray vision, magnetic manipulation, teleportation, invisibility',
    img: 'metaman.png',
  },
  {
    name: 'Mr. Incredible',
    slug: 'mr-incredible',
    threatRating: 9.1,
    description: 'Superhuman strength, capable of lifting weight up to 55 tons, invulnerability to high levels of physical damage',
    img: 'mr_incredible.png',
  },
]

export const supersResult: Array<SuperResult> = [
  {
    name: 'Elastigirl',
    slug: 'elastigirl',
    img: 'elastigirl.png',
    description:
      'Full-body elasticity, body capable of stretching in extreme way up to three hundred feet, high durability to physical injuries, stretch assisted leaps span eighty feet. Can compress and expand shape limited to maintaining bodily volume.',
    lastActiveRecord: '13.11.55',
    locationKnown: false,
    threatRating: '6.2 Exercise moderate caution',
  },
  {
    name: 'Frozone',
    slug: 'frozone',
    img: 'frozone.png',
    description:
      'Spontaneous generation of ice from water sources, freeze surface areas in excess of five hundreds meters. Manipulation of water for the formation of ice in solid form and structures in this material. He can generate ice from his fingertips but is limited by the amount of moisture in the air and his body. ',
    lastActiveRecord: '17.12.56',
    locationKnown: true,
    threatRating: '8.0 Exercise moderate caution',
  },
]
