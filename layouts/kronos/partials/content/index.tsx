import React from 'react'
import KronosHeader from '../header'
import KronosStep2 from './partials/step-2'
import KronosStep3 from './partials/step-3'
import KronosStep1 from './partials/step-1'
import KronosStepIdle from './partials/step-idle'
import { KronosStep } from '../..'
import { Box, BoxProps, StackProps, TextProps, useSlotRecipe } from '@chakra-ui/react'

interface KronosContentProps {
  step: KronosStep
}

const KronosContent: React.FC<KronosContentProps> = ({ step }) => {
  const styles = useSlotRecipe({ key: 'kronosContentComponent' })({}) as Record<string, StackProps & TextProps & BoxProps>

  return (
    <Box {...styles.container} key={step}>
      <KronosHeader step={step} />

      {step === KronosStep.IDLE && <KronosStepIdle />}

      {step === KronosStep.LOADING && <KronosStep1 />}

      {step === KronosStep.DELIVERY && <KronosStep2 />}

      {step === KronosStep.ACTIVATION && <KronosStep3 />}
    </Box>
  )
}

export default KronosContent
