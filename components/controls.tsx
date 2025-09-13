import { Button, VStack } from '@chakra-ui/react'
import { Eye, EyeOff, Volume2, VolumeOff } from 'lucide-react'
import { useControlsStore } from '@/store/controls'
import { useState } from 'react'

const Controls = () => {
  const { enableControls, toggleControls, enableAudio, toggleAudio } = useControlsStore()

  const [isSoundHovered, setIsSoundHovered] = useState(false)
  const [isControlsHovered, setIsControlsHovered] = useState(false)

  return (
    <VStack position="absolute" bottom="20px" left="20px" gap={2} zIndex={1000} fontFamily="sans-serif" align="start">
      <Button
        onClick={toggleAudio}
        onMouseEnter={() => setIsSoundHovered(true)}
        onMouseLeave={() => setIsSoundHovered(false)}
        variant="solid"
        size="md"
        rounded="full"
        shadow="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        px={isSoundHovered ? 4 : 2}
        opacity={enableAudio || isSoundHovered ? 1 : 0.5}
      >
        {isSoundHovered ? enableAudio ? 'Toggle audio' : 'Enable audio' : enableAudio ? <VolumeOff width={32} /> : <Volume2 size={16} />}
      </Button>

      <Button
        onClick={toggleControls}
        onMouseEnter={() => setIsControlsHovered(true)}
        onMouseLeave={() => setIsControlsHovered(false)}
        variant="solid"
        size="md"
        rounded="full"
        shadow="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        px={isControlsHovered ? 4 : 2}
        opacity={enableControls || isControlsHovered ? 1 : 0.5}
      >
        {isControlsHovered ? enableControls ? 'Hide controls' : 'Show controls' : enableControls ? <EyeOff width={32} /> : <Eye size={16} />}
      </Button>
    </VStack>
  )
}

export default Controls
