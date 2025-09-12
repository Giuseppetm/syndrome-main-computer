import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { Box, Button, HStack, Text } from '@chakra-ui/react'
import { Play, Pause, Timer, ArrowRight, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/router'
import { ROUTES } from '@/utils/routes'
import { useControlsStore } from '@/store/controls'

export enum KronosStep {
  IDLE = 0,
  LOADING = 1,
  DELIVERY = 2,
  ACTIVATION = 3,
}

/**
 * Props for {@link KronosConsole}
 */
interface KronosConsoleProps {
  /** The current step of the simulation, from `IDLE` to `ACTIVATION`. */
  step: KronosStep

  /** A function to update the simulation step. */
  setStep: (s: KronosStep) => void
}

/**
 * @name KronosConsole
 *
 * @description
 * A control console for the Kronos simulation, providing UI and keyboard shortcuts
 * to manage the simulation's state transitions.
 *
 * @remarks
 * This component handles the progression of the simulation through different
 * `KronosStep`s, including starting, pausing, and manually stepping forward or backward.
 * It also manages keyboard events for a more interactive user experience.
 *
 * @author Giuseppe Del Campo
 */
const KronosConsole: React.FC<KronosConsoleProps> = ({ step, setStep }) => {
  const [paused, setPaused] = useState(false)
  const router = useRouter()
  const { enableControls } = useControlsStore()

  const startOrResume = useCallback(() => {
    if (step === KronosStep.IDLE) {
      setStep(KronosStep.LOADING)
    }
    if (paused) {
      setPaused(false)
    }
  }, [paused, setStep, step])

  const stepForward = useCallback(() => {
    const next = Math.min(step + 1, KronosStep.ACTIVATION)
    setPaused(true)
    setStep(next)
  }, [step, setStep])

  const stepBackward = useCallback(() => {
    const prev = Math.max(step - 1, KronosStep.IDLE)
    setPaused(true)
    setStep(prev)
  }, [step, setStep])

  useEffect(() => {
    const stepTimeouts: Record<KronosStep, number> = {
      [KronosStep.IDLE]: 0,
      [KronosStep.LOADING]: 1500,
      [KronosStep.DELIVERY]: 1500,
      [KronosStep.ACTIVATION]: 1500,
    }

    if (paused || step === KronosStep.IDLE) return
    let timer: ReturnType<typeof setTimeout> | undefined

    if (step === KronosStep.LOADING) {
      timer = setTimeout(() => setStep(KronosStep.DELIVERY), stepTimeouts[KronosStep.LOADING])
    } else if (step === KronosStep.DELIVERY) {
      timer = setTimeout(() => setStep(KronosStep.ACTIVATION), stepTimeouts[KronosStep.DELIVERY])
    } else if (step === KronosStep.ACTIVATION) {
      timer = setTimeout(() => {
        router.push(ROUTES.COUNTDOWN)
      }, stepTimeouts[KronosStep.ACTIVATION])
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [step, paused, router, setStep])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'ArrowRight') {
        // Step forward
        if (step < KronosStep.ACTIVATION) stepForward()
      } else if (e.code === 'ArrowLeft') {
        // Step backward
        if (step > KronosStep.IDLE) stepBackward()
      } else if (e.code === 'Space') {
        // Pause / Resume
        e.preventDefault()
        if (step === KronosStep.IDLE || paused) {
          startOrResume()
        } else {
          setPaused(true)
        }
      } else if (e.code === 'Escape') {
        router.push(ROUTES.MENU)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [step, paused, router, stepForward, stepBackward, startOrResume])

  return (
    <Box
      position="fixed"
      bottom={enableControls ? '13px' : -100}
      left="50%"
      transform="translateX(-50%)"
      zIndex={1000}
      bg="gray.800"
      color="white"
      px={4}
      py={3}
      rounded="2xl"
      shadow="xl"
      fontFamily="sans-serif"
    >
      <HStack gap={2}>
        <HStack gap={2}>
          {/* Start / Resume */}
          {(step === KronosStep.IDLE || paused) && (
            <Button size="sm" onClick={startOrResume} colorScheme={step === KronosStep.IDLE ? 'green' : 'yellow'}>
              <Play size={16} style={{ marginRight: 6 }} />
              {step === KronosStep.IDLE ? 'Start Simulation' : 'Resume'}
            </Button>
          )}

          {/* Pause */}
          {step !== KronosStep.IDLE && !paused && (
            <Button size="sm" onClick={() => setPaused(true)} colorScheme="orange">
              <Pause size={16} style={{ marginRight: 6 }} />
              Pause
            </Button>
          )}
        </HStack>

        <HStack gap={2}>
          {/* Step Back */}
          <Button size="sm" onClick={stepBackward} colorScheme="purple" disabled={step === KronosStep.IDLE}>
            <ArrowLeft size={14} style={{ marginRight: 4 }} />
            Back
          </Button>

          {/* Step Forward */}
          <Button size="sm" onClick={stepForward} colorScheme="purple" disabled={step === KronosStep.ACTIVATION}>
            Forward
            <ArrowRight size={14} style={{ marginLeft: 4 }} />
          </Button>

          {/* Countdown */}
          <Link href="/countdown" passHref legacyBehavior>
            <Button as="a" size="sm" colorScheme="blue">
              <Timer size={14} style={{ marginRight: 4 }} />
              Countdown
            </Button>
          </Link>

          {/* Current step */}
          <Text fontSize="sm" ml={2}>
            Step: <b style={{ color: '#34a99f' }}>{KronosStep[step]}</b>
          </Text>
        </HStack>
      </HStack>
    </Box>
  )
}

export default KronosConsole
