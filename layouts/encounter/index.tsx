import { Encounter, Omnidroid, Super } from '@/types'
import { BoxProps, Grid, GridItem, useSlotRecipe } from '@chakra-ui/react'
import EncounterFrame from './partials/frame'
import { GridProps } from '@chakra-ui/system'

interface EncounterLayoutProps {
  superData: Super
  omnidroidData: Omnidroid
  encounterData: Encounter
}

const EncounterLayout = ({ superData, omnidroidData, encounterData }: EncounterLayoutProps) => {
  const styles = useSlotRecipe({ key: 'encounterLayout' })({}) as Record<string, BoxProps & GridProps>

  return (
    <Grid {...styles.grid} templateColumns="1fr 2px 1fr">
      {/* Super */}
      <GridItem>
        <EncounterFrame name={superData.name} description={superData.description} type={'super'} isTerminated={encounterData.superDefeated} image={superData.img} />
      </GridItem>
      {/* Separator */}
      <GridItem bg={'{colors.text.white}'} />
      {/* Omnidroid */}
      <GridItem>
        <EncounterFrame name={omnidroidData.name} description={omnidroidData.description} type={'omnidroid'} isTerminated={encounterData.omnidroidDefeated} image={omnidroidData.img} />
      </GridItem>
    </Grid>
  )
}

export default EncounterLayout
