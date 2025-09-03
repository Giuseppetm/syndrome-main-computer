import React from 'react'
import { Button, ButtonProps, HStack, Stack, StackProps, Text, TextProps, useSlotRecipe } from '@chakra-ui/react'
import { KronosStep } from '../../index'
import { motion } from 'framer-motion'

const MotionStack = motion(Stack)

const fadeVariant = {
  hidden: { opacity: 0, filter: 'brightness(3)' },
  visible: {
    opacity: 1,
    filter: 'brightness(1)',
    transition: { delay: 0.5, duration: 0.5 },
  },
}

/**
 * Props for {@link KronosControls}.
 */
interface KronosControlsProps {
  /**
   * The current operational step of the Kronos system.
   */
  step: KronosStep

  /**
   * Function to update the current Kronos step.
   */
  setStep: React.Dispatch<React.SetStateAction<KronosStep>>
}

/**
 * @name KronosControls
 *
 * @description
 * Component that displays a UI for selecting Kronos operational steps.
 *
 * @author Giuseppe Del Campo
 */
const KronosControls: React.FC<KronosControlsProps> = ({ step, setStep }) => {
  const styles = useSlotRecipe({ key: 'kronosControlsComponent' })({}) as Record<string, StackProps & TextProps & ButtonProps>

  /**
   * Determines if a given step is currently active.
   *
   * @param {KronosStep} s - The step to check.
   * @returns {boolean} True if the step is active, false otherwise.
   */
  const isActive = (s: KronosStep): boolean => step === s

  return (
    /* @ts-expect-error Usual motion stuff */
    <MotionStack {...styles.container} gap={3} initial="hidden" animate="visible" variants={fadeVariant}>
      <Stack gap={0}>
        <Text {...styles.operationLabel}>Operation</Text>
        <Text {...styles.kronosLabel}>Kronos</Text>
      </Stack>
      <HStack {...styles.phaseContainer}>
        <Text {...styles.phaseLabel}>Phase:</Text>
        <HStack {...styles.stepButtonsContainer} gap={9}>
          <Button {...styles.stepButton} data-active={isActive(KronosStep.LOADING) ? 'true' : undefined} onClick={() => setStep(KronosStep.LOADING)}>
            1
          </Button>
          <Button
            {...styles.stepButton}
            data-active={isActive(KronosStep.DELIVERY) ? 'true' : undefined}
            onClick={() => setStep(KronosStep.DELIVERY)}
          >
            2
          </Button>
          <Button
            {...styles.stepButton}
            data-active={isActive(KronosStep.ACTIVATION) ? 'true' : undefined}
            onClick={() => setStep(KronosStep.ACTIVATION)}
          >
            3
          </Button>
        </HStack>
      </HStack>
    </MotionStack>
  )
}

export default KronosControls
