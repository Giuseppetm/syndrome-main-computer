import AnimatedImage from '@/components/animated-image'
import { AspectRatio, Box, HStack, StackProps, Text, TextProps, useSlotRecipe, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface EncounterFrameProps {
  type: 'super' | 'omnidroid'
  threatRating?: number
  isTerminated: boolean
  name: string
  description: string
  image: string
}

const MotionText = motion(Text)

const EncounterFrame = ({ type, threatRating, isTerminated, name, description, image }: EncounterFrameProps) => {
  const styles = useSlotRecipe({ key: 'encounterFrameComponent' })({}) as Record<string, StackProps & TextProps>

  const imageFolder = type === 'super' ? 'supers' : 'omnidroids'
  const headerTitle = type === 'super' ? 'Opponent' : 'Prototype'
  const footerSpecifications = type === 'super' ? 'powers' : 'features'

  let footerTitle = name

  // Handle Omnidroid footer title format
  if (type === 'omnidroid') {
    const [label, ...rest] = footerTitle.split(' ')
    footerTitle = [label.toUpperCase(), ...rest].join(' ')
  } else {
    footerTitle = name.toUpperCase()
  }

  return (
    <VStack {...styles.container} gap={0}>
      <HStack {...styles.header}>
        <Text {...styles.headerTitle}>{headerTitle}</Text>

        {threatRating && (
          <HStack {...styles.threatRating}>
            <Text {...styles.threatRatingLabel}>Threat rating:</Text>
            <Text {...styles.threatRatingValue}>{threatRating}</Text>
          </HStack>
        )}
      </HStack>
      <Box {...styles.imageWrapper}>
        <AspectRatio ratio={5.5 / 4}>
          <AnimatedImage src={`/images/${imageFolder}/${image}`} alt={`${name}, ${description}`} />
        </AspectRatio>
        {isTerminated && (
          /* @ts-expect-error Text props are okay here */
          <MotionText
            key={`${name}-${description}-isTerminated:${isTerminated}`}
            {...styles.terminatedLabel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Terminated
          </MotionText>
        )}
      </Box>
      <VStack {...styles.footer}>
        <Text {...styles.footerTitle}>{footerTitle}</Text>
        <Text {...styles.footerDescription}>
          {footerSpecifications}: {description}
        </Text>
      </VStack>
    </VStack>
  )
}

export default EncounterFrame
