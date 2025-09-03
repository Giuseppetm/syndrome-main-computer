import AnimatedImage from '@/components/animated-image'
import { AspectRatio, Box, HStack, StackProps, Text, TextProps, useSlotRecipe, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const MotionText = motion(Text)
const MotionVStack = motion(VStack)

interface EncounterFrameProps {
  /**
   * The type of encounter frame to render.
   * - `"super"`: Displays information about a superhero opponent.
   * - `"omnidroid"`: Displays information about an omnidroid prototype.
   */
  type: 'super' | 'omnidroid'

  /**
   * Optional threat rating value shown when the type is `"super"`.
   * If not provided, the threat rating section will not be displayed.
   */
  threatRating?: number

  /**
   * Indicates whether the subject (super or omnidroid) has been terminated.
   * When true, a "Terminated" label fades in over the image.
   */
  isTerminated: boolean

  /**
   * Name of the super or omnidroid.
   * Used in both the footer title and accessibility attributes.
   */
  name: string

  /**
   * Short description of the super's powers or the omnidroid's features.
   * Displayed in the footer and used for the image `alt` text.
   */
  description: string

  /**
   * Filename of the image to be displayed.
   * The component automatically resolves the folder based on {@link type}.
   */
  image: string
}

/**
 * @name EncounterFrame
 *
 * @description
 * A visual frame component used to display detailed information
 * about either a **Super** (opponent) or an **Omnidroid** (prototype).
 *
 * The frame is structured with:
 * - A header containing the title and optional threat rating.
 * - A central image area (animated with {@link AnimatedImage}).
 * - An optional `"Terminated"` overlay label that fades in when
 *   {@link EncounterFrameProps.isTerminated} is true.
 * - A footer showing the subject's name and description.
 *
 * @example
 * ```tsx
 * <EncounterFrame
 *   type="super"
 *   threatRating={8}
 *   isTerminated={false}
 *   name="Mr. Incredible"
 *   description="Super strength and durability"
 *   image="mr-incredible.png"
 * />
 *
 * <EncounterFrame
 *   type="omnidroid"
 *   isTerminated={true}
 *   name="Omnidroid v.9"
 *   description="Adaptive AI and rotating claws"
 *   image="omnidroid-v9.png"
 * />
 * ```
 *
 * @author
 * Giuseppe Del Campo
 */
const EncounterFrame: React.FC<EncounterFrameProps> = ({ type, threatRating, isTerminated, name, description, image }) => {
  const styles = useSlotRecipe({ key: 'encounterFrameComponent' })({}) as Record<string, StackProps & TextProps>

  const imageFolder = type === 'super' ? 'supers' : 'omnidroids'
  const headerTitle = type === 'super' ? 'Opponent' : 'Prototype'
  const footerSpecifications = type === 'super' ? 'powers' : 'features'

  const TERMINATED_DURATION = 0.2
  const TEXT_MODULE_DURATION = 0.5

  let footerTitle = name

  // Handle Omnidroid footer title format
  if (type === 'omnidroid') {
    const [label, ...rest] = footerTitle.split(' ')
    footerTitle = [label.toUpperCase(), ...rest].join(' ')
  } else {
    footerTitle = name.toUpperCase()
  }

  return (
    /* @ts-expect-error Usual motion stuff */
    <MotionVStack {...styles.container} gap={0} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
      <HStack {...styles.header}>
        <Text {...styles.headerTitle}>{headerTitle}</Text>

        {threatRating && (
          <HStack {...styles.threatRating} alignItems="flex-end">
            {/* @ts-expect-error Text props are okay here */}
            <MotionText
              {...styles.threatRatingLabel}
              key={`${name}-${description}-threatRatingLabel`}
              initial={{ filter: 'invert(100%)' }}
              animate={{ filter: 'invert(0%)' }}
              transition={{ duration: TEXT_MODULE_DURATION, ease: 'easeOut' }}
            >
              Threat rating:
            </MotionText>
            {/* @ts-expect-error Text props are okay here */}
            <MotionText
              {...styles.threatRatingValue}
              key={`${name}-${description}-threatRatingValue:${threatRating}`}
              initial={{ filter: 'invert(100%)' }}
              animate={{ filter: 'invert(0%)' }}
              transition={{ duration: TEXT_MODULE_DURATION, ease: 'easeOut' }}
            >
              {threatRating}
            </MotionText>
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
            transition={{ duration: TERMINATED_DURATION, delay: 0.3, ease: 'easeInOut' }}
          >
            Terminated
          </MotionText>
        )}
      </Box>

      <VStack {...styles.footer}>
        {/* @ts-expect-error Text props are okay here */}
        <MotionText
          {...styles.footerTitle}
          key={`${name}-${description}-footerTitle`}
          initial={{ filter: 'invert(100%)' }}
          animate={{ filter: 'invert(0%)' }}
          transition={{ duration: TEXT_MODULE_DURATION, ease: 'easeOut' }}
        >
          {footerTitle}
        </MotionText>
        {/* @ts-expect-error Text props are okay here */}
        <MotionText
          {...styles.footerDescription}
          key={`${name}-${description}-footerDescription`}
          initial={{ filter: 'invert(100%)' }}
          animate={{ filter: 'invert(0%)' }}
          transition={{ duration: TEXT_MODULE_DURATION, ease: 'easeOut' }}
        >
          {footerSpecifications}: {description}
        </MotionText>
      </VStack>
    </MotionVStack>
  )
}

export default EncounterFrame
