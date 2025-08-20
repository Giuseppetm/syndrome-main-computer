import { SuperResult } from '@/types'
import { AspectRatio, Box, BoxProps, Grid, GridItem, GridProps, Stack, StackProps, Text, TextProps, useSlotRecipe } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const MotionGrid = motion<Omit<GridProps, 'transition'>>(Grid)
const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box)

/**
 * Props for {@link SearchResultLayout}.
 */
interface SearchResultLayoutProps {
  /**
   * Full data about a Super, including image, name,
   * description, location status, last record, and threat rating.
   */
  superData: SuperResult
}

/**
 * @name SearchResultLayout
 *
 * @description
 * Displays the search result layout for a given Super.
 * The layout is divided into three main sections:
 *
 * - **Left column**: Contains the Super’s image inside
 *   a fixed aspect ratio.
 * - **Middle column**: A vertical separator line.
 * - **Right column**: Shows the Super’s information:
 *   name, location status (animated), description,
 *   last active record, and threat rating.
 *
 * The entire grid fades in with a short animation,
 * and the *location status* text appears with a delayed fade-in.
 *
 * @example
 * ```tsx
 * <SearchResultLayout superData={super} />
 * ```
 *
 * @author Giuseppe Del Campo
 */
const SearchResultLayout = ({ superData }: SearchResultLayoutProps) => {
  const styles = useSlotRecipe({ key: 'searchResultLayout' })({}) as Record<string, BoxProps & GridProps & TextProps & StackProps>
  const imageFolder = 'search-results'

  return (
    <MotionGrid
      {...styles.grid}
      /* @ts-expect-error Usual motion stuff */
      templateColumns="1fr 1px 1fr"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <GridItem>
        <Box {...styles.spacer} />

        <AspectRatio ratio={6.5 / 5}>
          <Image
            src={`/images/${imageFolder}/${superData.img}`}
            width={1000}
            height={500}
            alt={`${superData.name} - ${superData.description}. ${superData.lastActiveRecord}, ${superData.threatRating}`}
          />
        </AspectRatio>
      </GridItem>

      {/* Separator */}
      <GridItem bg={'{colors.text.white}'} />

      <GridItem>
        <Box {...styles.spacer} />
        <Box {...styles.infoWrapper}>
          <Stack gap={'1px'}>
            <Text {...styles.superName}>{superData.name}</Text>
            <Text {...styles.locationLabel}>
              Location: {/* @ts-expect-error Usual motion stuff */}
              <MotionBox
                as="span"
                {...styles.locationStatus}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                {superData.locationKnown ? 'Known' : 'Unknown'}
              </MotionBox>
            </Text>
          </Stack>

          <Box {...styles.superDescription}>
            <Text>{superData.description}</Text>
            <Text>Last active record: {superData.lastActiveRecord}</Text>
          </Box>

          <Text {...styles.threatRating}>Threat Rating: {superData.threatRating}</Text>
        </Box>
      </GridItem>
    </MotionGrid>
  )
}

export default SearchResultLayout
