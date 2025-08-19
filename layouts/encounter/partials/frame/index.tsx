import { StackProps, useSlotRecipe, VStack } from '@chakra-ui/react'
import Image from 'next/image'

interface EncounterFrameProps {
  type: 'super' | 'omnidroid'
  threatRating?: number
  isTerminated: boolean
  name: string
  description: string
  image: string
}

const EncounterFrame = ({ type, threatRating, isTerminated, name, description, image }: EncounterFrameProps) => {
  const styles = useSlotRecipe({ key: 'encounterFrameComponent' })({}) as Record<string, StackProps>
  const imageFolder = type === 'super' ? 'supers' : 'omnidroids'

  return (
    <VStack {...styles.container}>
      {type} {threatRating} {isTerminated} {name} {description}
      <Image src={`/images/${imageFolder}/${image}`} alt={`${name}, ${description}`} width={300} height={200} />
    </VStack>
  )
}

export default EncounterFrame
