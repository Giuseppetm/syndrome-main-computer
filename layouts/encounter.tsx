import { Encounter, Omnidroid, Super } from '@/types'
import { Box, BoxProps, useSlotRecipe } from '@chakra-ui/react'

interface EncounterLayoutProps {
  superData: Super
  omnidroidData: Omnidroid
  encounterData: Encounter
}

const EncounterLayout = ({ superData, omnidroidData, encounterData }: EncounterLayoutProps) => {
  const styles = useSlotRecipe({ key: 'encounterLayout' })({}) as Record<string, BoxProps>

  return (
    <Box {...styles.container}>
      {superData.name} vs {omnidroidData.name}
      {encounterData.superDefeated}
      {encounterData.superSlug} {encounterData.omnidroidName}
    </Box>
  )
}

export default EncounterLayout
