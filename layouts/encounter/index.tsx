import { Encounter, Omnidroid, Super } from '@/types'
import { BoxProps, Grid, GridItem, useSlotRecipe } from '@chakra-ui/react'
import { GridProps } from '@chakra-ui/system'
import { motion } from 'framer-motion'
import EncounterFrame from './partials/frame'

const MotionGrid = motion(Grid)

interface EncounterLayoutProps {
  /**
   * Data object containing details about the Super (opponent).
   * Includes name, description, image, and threat rating.
   */
  superData: Super

  /**
   * Data object containing details about the Omnidroid (prototype).
   * Includes name, description, and image reference.
   */
  omnidroidData: Omnidroid

  /**
   * Data object describing the encounter itself.
   * Determines whether each participant (Super or Omnidroid) has been defeated.
   */
  encounterData: Encounter
}

/**
 * @name EncounterLayout
 *
 * @description
 * A layout component that visually displays a **battle encounter**
 * between a Super (opponent) and an Omnidroid (prototype).
 *
 * The layout is structured as a three-column grid:
 * - **Left column**: The Super's {@link EncounterFrame}.
 * - **Center column**: A thin separator line.
 * - **Right column**: The Omnidroid's {@link EncounterFrame}.
 *
 * Both participants are rendered using the shared {@link EncounterFrame} component,
 * with termination status and dynamic styling applied.
 *
 * @see {@link EncounterFrame} for the participant sub-component
 *
 * @author
 * Giuseppe Del Campo
 */
const EncounterLayout = ({ superData, omnidroidData, encounterData }: EncounterLayoutProps) => {
  const styles = useSlotRecipe({ key: 'encounterLayout' })({}) as Record<string, BoxProps & GridProps>

  return (
    /** @ts-expect-error Usual motion stuff */
    <MotionGrid
      {...styles.grid}
      templateColumns="1fr 1px 1fr"
      initial={{ opacity: 0, filter: 'invert(100%)' }}
      animate={{ opacity: 1, filter: 'invert(0%)' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Super */}
      <GridItem>
        <EncounterFrame
          name={superData.name}
          description={superData.description}
          threatRating={superData.threatRating}
          type={'super'}
          isTerminated={encounterData.superDefeated}
          image={superData.img}
        />
      </GridItem>

      {/* Separator */}
      <GridItem bg={'{colors.text.white}'} />

      {/* Omnidroid */}
      <GridItem>
        <EncounterFrame
          name={omnidroidData.name}
          description={omnidroidData.description}
          type={'omnidroid'}
          isTerminated={encounterData.omnidroidDefeated}
          image={omnidroidData.img}
        />
      </GridItem>
    </MotionGrid>
  )
}

export default EncounterLayout
