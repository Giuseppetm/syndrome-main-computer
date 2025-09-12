import { Box, Button } from '@chakra-ui/react'
import { Eye, EyeOff } from 'lucide-react'
import { useControlsStore } from '@/store/controls'
import { useState } from 'react'

const ToggleControlsButton = () => {
  const { enableControls, toggleControls } = useControlsStore()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Box
      position="absolute"
      bottom="20px"
      left="20px"
      zIndex={1000}
      fontFamily="sans-serif"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        onClick={toggleControls}
        variant="solid"
        size="md"
        rounded="full"
        shadow="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
        px={isHovered ? 4 : 2}
        opacity={enableControls || isHovered ? 1 : 0.5}
      >
        {isHovered ? enableControls ? 'Hide controls' : 'Show controls' : enableControls ? <EyeOff width={32} /> : <Eye size={16} />}
      </Button>
    </Box>
  )
}

export default ToggleControlsButton
