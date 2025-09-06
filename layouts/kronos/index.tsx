import { useState } from 'react'
import { Box, Grid, GridItem, Stack, useSlotRecipe, BoxProps, StackProps, HStack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { GridProps } from '@chakra-ui/system'
import SideCharacters from './partials/side-characters'
import KronosControls from './partials/controls'
import KronosContent from './partials/content'
import KronosConsole from './partials/console'
import FlashLayer from './partials/flash-layer'

const MotionGrid = motion(Grid)
const MotionHStack = motion(HStack)

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

  const rowHeight = step === KronosStep.IDLE ? '90px' : '60px'
  const sideCharactersKey = step === KronosStep.IDLE ? 'IDLE' : 'IN_PROGRESS'

  return (
    <Stack {...styles.container} gap={0}>
      {/* First row */}
      <MotionGrid
        templateColumns="1fr 1px 3.5fr 1px 1.5fr"
        templateRows="repeat(1, 1fr)"
        animate={{ height: rowHeight }}
        transition={{ duration: 0.5 }}
      >
        <Box />

        <GridItem bg={'{colors.text.white}'} />

        <MotionHStack
          w="full"
          justify="center"
          key={step}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Text {...styles.sequenceLabel}>{step !== KronosStep.IDLE && stepLabel[step]}</Text>
        </MotionHStack>

        <GridItem bg={'{colors.text.white}'} />

        <Box />
      </MotionGrid>

      {/* Second row */}
      <MotionGrid templateColumns="1fr 1px 3.5fr 1px 1.5fr" templateRows="repeat(1, 1fr)" flexGrow={1} bg={'{colors.background.gradientSecondary}'}>
        <SideCharacters position={'left'} key={sideCharactersKey} />

        <GridItem bg={'{colors.text.white}'} />

        <KronosContent step={step} />

        <GridItem bg={'{colors.text.white}'} />

        <Stack>
          <SideCharacters position={'right'} key={sideCharactersKey} />
          <KronosControls step={step} setStep={setStep} />
        </Stack>
      </MotionGrid>

      {/* Third row */}
      <MotionGrid
        templateColumns="1fr 1px 3.5fr 1px 1.5fr"
        templateRows="repeat(1, 1fr)"
        animate={{ height: rowHeight }}
        transition={{ duration: 0.5 }}
      >
        <Box />

        <GridItem bg={'{colors.text.white}'} />

        <Box />

        <GridItem bg={'{colors.text.white}'} />

        <Box />
      </MotionGrid>

      <KronosConsole step={step} setStep={setStep} />

      <FlashLayer step={step} />
    </Stack>
  )
}

export default KronosLayout
