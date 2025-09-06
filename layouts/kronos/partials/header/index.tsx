import React from 'react'
import Image from 'next/image'
import { KronosStep } from '../..'
import { HStack, Stack, Text, Flex, useSlotRecipe, StackProps, TextProps, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionText = motion(Text)
const MotionFlex = motion(Flex)
const MotionImage = motion(Image)
const MotionBox = motion(Box)

const fadeToBlackVariant = {
  hidden: { opacity: 0, filter: 'brightness(3)', color: '#ffffff' },
  visible: {
    opacity: 1,
    filter: 'brightness(1)',
    color: '#181818',
    transition: { duration: 0.4 },
  },
}

const fadeToGreenVariant = {
  hidden: { opacity: 0, filter: 'brightness(3)', color: '#ffffff' },
  visible: {
    opacity: 1,
    filter: 'brightness(1)',
    color: '#364F50',
    transition: { duration: 0.4 },
  },
}

interface KronosHeaderProps {
  /** Current phase of the Kronos operation */
  step: KronosStep
}

/**
 * @name KronosHeader
 *
 * @description
 * Renders the header section for the Kronos operation phases.
 * Displays dynamic content based on the current `KronosStep`, using structured data for modularity.
 *
 * @author Giuseppe Del Campo
 */
const KronosHeader: React.FC<KronosHeaderProps> = ({ step }) => {
  const styles = useSlotRecipe({ key: 'kronosHeaderComponent' })({}) as Record<string, StackProps & TextProps>

  interface PhaseContent {
    phaseNumber?: string
    title?: string
    steps?: string[]
  }

  const KRONOS_PHASES: Record<KronosStep, PhaseContent> = {
    [KronosStep.IDLE]: {},
    [KronosStep.LOADING]: {
      phaseNumber: 'Phase 1',
      title: 'Loading Sequence',
      steps: ['1> Omnidroid Delivery Mode', '2> Gantry Loading', '3> Launch Sequence'],
    },
    [KronosStep.DELIVERY]: {
      phaseNumber: 'Phase 2',
      title: 'Stage Delivery',
      steps: ['1> ICSM Deployment', '2> Glider Separation', '3> Omnidroid Activation'],
    },
    [KronosStep.ACTIVATION]: {
      phaseNumber: 'Phase 3',
      title: 'Activation',
      steps: ['1> Scan Target Zone', '2> Offensive Engagement', '3> Remote Override'],
    },
  }

  const renderIdle = () => (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
      <HStack align="flex-end">
        <Stack gap={0.5}>
          {/* @ts-expect-error Usual motion stuff */}
          <MotionText as="h1" {...styles.omnidroidLabel} initial="hidden" animate="visible" variants={fadeToBlackVariant}>
            Omnidroid
          </MotionText>
          {/* @ts-expect-error Usual motion stuff */}
          <MotionText as="h1" {...styles.finalDesignLabel} initial="hidden" animate="visible" variants={fadeToBlackVariant}>
            Final Design
          </MotionText>
        </Stack>
        <HStack gap={10}>
          <MotionFlex direction="row" align="flex-end" initial="hidden" animate="visible" variants={fadeToGreenVariant}>
            <Text as="h1" {...styles.versionLabel}>
              v.
            </Text>
            <Text as="h1" {...styles.versionNumber}>
              10
            </Text>
          </MotionFlex>

          <MotionImage
            src="/images/kronos/title-shape.png"
            width={90}
            height={90}
            alt="Decorative Shape for Omnidroid v.10"
            initial="hidden"
            animate="visible"
            variants={fadeToGreenVariant}
          />
        </HStack>
      </HStack>
    </MotionBox>
  )

  const renderPhase = (content: PhaseContent) => (
    <HStack align="flex-start" gap={9}>
      <Text {...styles.phaseNumberLabel}>{content.phaseNumber}</Text>
      <Stack {...styles.phaseDescriptionContainer}>
        <Text {...styles.phaseLabel}>{content.title}</Text>
        <Stack {...styles.phaseSteps} gap={1.5}>
          {content.steps?.map((stepText, index) => (
            <Text key={index} {...styles.phaseStepLabel}>
              {stepText}
            </Text>
          ))}
        </Stack>
      </Stack>
    </HStack>
  )

  const content = KRONOS_PHASES[step]

  return (
    <React.Fragment key={step + ' Header'}>
      {step === KronosStep.IDLE ? renderIdle() : content ? renderPhase(content) : <h2>❓ Unknown State</h2>}
    </React.Fragment>
  )
}

export default KronosHeader
