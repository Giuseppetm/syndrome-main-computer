import { BoxProps, HStack, StackProps, Text, TextProps, useSlotRecipe, VStack } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'

interface TimerProps {
  /**
   * Starting hours (default: 8)
   */
  initialHours?: number

  /**
   * Starting minutes (default: 10)
   */
  initialMinutes?: number

  /**
   * Starting seconds (default: 42)
   */
  initialSeconds?: number

  /**
   * Optional callback invoked when the countdown reaches 0
   */
  onComplete?: () => void
}

/**
 * @name Timer
 *
 * @description
 * Displays a countdown in HH:MM:SS format starting from the given initial time.
 * Calls `onComplete` when the countdown reaches 00:00:00.
 *
 * @author Giuseppe Del Campo
 */
const Timer: React.FC<TimerProps> = ({ initialHours = 8, initialMinutes = 10, initialSeconds = 42, onComplete }) => {
  const styles = useSlotRecipe({ key: 'timerComponent' })({}) as Record<string, BoxProps & StackProps & TextProps>

  const initialTime: number = initialHours * 3600 + initialMinutes * 60 + initialSeconds

  const [time, setTime] = useState<number>(initialTime)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          onComplete?.()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [onComplete])

  const hours: number = Math.floor(time / 3600)
  const minutes: number = Math.floor((time % 3600) / 60)
  const seconds: number = time % 60

  return (
    <HStack {...styles.wrapper} gap={24}>
      <VStack gap={8}>
        <Text {...styles.unitValue}>{hours.toString().padStart(2, '0')}</Text>
        <Text {...styles.unitLabel}>Hours</Text>
      </VStack>
      <Text {...styles.unitSeparator}>:</Text>
      <VStack mx={14} gap={8}>
        <Text {...styles.unitValue}>{minutes.toString().padStart(2, '0')}</Text>
        <Text {...styles.unitLabel}>Minutes</Text>
      </VStack>
      <Text {...styles.unitSeparator}>:</Text>
      <VStack gap={8}>
        <Text {...styles.unitValue}>{seconds.toString().padStart(2, '0')}</Text>
        <Text {...styles.unitLabel}>Seconds</Text>
      </VStack>
    </HStack>
  )
}

export default Timer
