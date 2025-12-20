import { Dialog, Box, Text, SimpleGrid, Image, Button } from '@chakra-ui/react'
import { UNIVERSES } from '@/data'
import { useMainStore } from '@/store'
import { Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ROUTES } from '@/utils/routes'

const universeImagePath = '/images/universes/'

const UniverseModal = () => {
  const { universe, setUniverse } = useMainStore()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(universe.id)

  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (open) setSelectedId(universe.id)
  }, [open, universe.id])

  const handleConfirm = () => {
    const chosen = UNIVERSES.find((u) => u.id === selectedId)

    if (chosen) {
      router.push(ROUTES.MENU)
      setUniverse(chosen)
    }

    setOpen(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={(d) => setOpen(d.open)}>
      <Dialog.Trigger asChild>
        <Button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          variant="solid"
          size="md"
          rounded="full"
          shadow="lg"
          display="flex"
          alignItems="center"
          gap={2}
          px={4}
          opacity={hover ? 1 : 0.5}
          bg="blue.800"
        >
          <Globe size={18} />
          <Text>Change universe</Text>
        </Button>
      </Dialog.Trigger>

      <Dialog.Backdrop bg="rgba(0,0,0,0.6)" backdropFilter="blur(6px)" w="full" h="full" />

      <Dialog.Positioner w="full" h="full">
        <Dialog.Content bg="gray.900" color="white" borderRadius="lg" p={6} maxW="lg" w="90vw" boxShadow="0 0 30px rgba(0,0,0,0.6)" my="auto">
          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            Select universe theme
          </Text>

          <Text fontSize="sm" color="gray.300" mb={6}>
            Changing the universe updates characters, encounters and the overall visual mood of the experience.
          </Text>

          <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4} mb={6}>
            {UNIVERSES.map((u) => (
              <Box
                key={u.id}
                onClick={() => setSelectedId(u.id)}
                cursor="pointer"
                borderRadius="md"
                overflow="hidden"
                border={selectedId === u.id ? '3px solid #4D7676' : '2px solid #444'}
                transition="all 0.2s"
                _hover={{ transform: 'scale(1.02)', borderColor: '#4D7676' }}
              >
                <Image src={universeImagePath + u.img} alt={u.label} objectFit="cover" w="100%" h="120px" />

                <Box p={2} bg="gray.800">
                  <Text fontWeight="bold">{u.label}</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          <Button
            w="100%"
            bg="#4D7676"
            _hover={{ bg: '#364F50' }}
            _active={{ bg: '#364F50' }}
            color="white"
            size="md"
            rounded="md"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}

export default UniverseModal
