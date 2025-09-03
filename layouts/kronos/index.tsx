import { useState } from 'react'
import { Box, Grid, GridItem, Stack, useSlotRecipe, BoxProps, StackProps, HStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { GridProps } from '@chakra-ui/system'
import SideCharacters from './partials/side-characters'
import KronosControls from './partials/controls'
import KronosContent from './partials/content'

const MotionGrid = motion(Grid)

/**
 * @enum KronosStep
 *
 * @description
 * Represents the current step of Operation Kronos.
 * - LOADING: Loading sequence
 * - DELIVERY: Stage delivery
 * - ACTIVATION: Activation
 */
export enum KronosStep {
  IDLE = 0,
  LOADING = 1,
  DELIVERY = 2,
  ACTIVATION = 3,
}

export const stepLabel = {
  [KronosStep.LOADING]: 'Loading Sequence',
  [KronosStep.DELIVERY]: 'Stage Delivery',
  [KronosStep.ACTIVATION]: 'Activation',
}

/**
 * @name KronosLayout
 *
 * @description
 * A fixed 3x3 grid layout for `Kronos` project page.
 *
 * @remarks
 * The component keeps track of the current Kronos step using an enum (`KronosStep`).
 *
 * @example
 * ```tsx
 * <KronosLayout />
 * ```
 *
 * @author
 * Giuseppe Del Campo
 */
const KronosLayout = () => {
  const styles = useSlotRecipe({ key: 'kronosLayout' })({}) as Record<string, StackProps & BoxProps & GridProps>

  const [step, setStep] = useState<KronosStep>(KronosStep.IDLE)

  return (
    <Stack {...styles.container} gap={0}>
      {/* @ts-expect-error Usual motion stuff - First row */}
      <MotionGrid {...styles.fillerRow} templateColumns="1fr 1px 3.5fr 1px 1.5fr" templateRows="repeat(1, 1fr)">
        <Box />

        <GridItem bg={'{colors.text.white}'} />

        <HStack w="full" justify="center">
          <Text {...styles.sequenceLabel}>{step !== KronosStep.IDLE ? stepLabel[step] : 'This is a work in progress'}</Text>
        </HStack>

        <GridItem bg={'{colors.text.white}'} />

        <Box />
      </MotionGrid>

      {/* Second row */}
      <MotionGrid templateColumns="1fr 1px 3.5fr 1px 1.5fr" templateRows="repeat(1, 1fr)" flexGrow={1} bg={'{colors.background.gradientSecondary}'}>
        <SideCharacters position={'left'} />

        <GridItem bg={'{colors.text.white}'} />

        <KronosContent step={step} />

        <GridItem bg={'{colors.text.white}'} />

        <Stack>
          <SideCharacters position={'right'} />
          <KronosControls step={step} setStep={setStep} />
        </Stack>
      </MotionGrid>

      {/* @ts-expect-error Usual motion stuff - Third row */}
      <MotionGrid {...styles.fillerRow} templateColumns="1fr 1px 3.5fr 1px 1.5fr" templateRows="repeat(1, 1fr)">
        <Box />

        <GridItem bg={'{colors.text.white}'} />

        <Box />

        <GridItem bg={'{colors.text.white}'} />

        <Box />
      </MotionGrid>
    </Stack>
  )
}

export default KronosLayout
