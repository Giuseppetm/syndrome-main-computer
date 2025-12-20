import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
  Box,
  Text,
  SimpleGrid,
  Image,
  Button,
} from '@chakra-ui/react'
import { UNIVERSES } from '@/data'
import { useMainStore } from '@/store'
import { Globe } from 'lucide-react'

const UniverseModal = () => {
  const { universe, setUniverse } = useMainStore()

  const universeImagePath = '/images/universes/'

  return (
    <Dialog.Root>
      <DialogTrigger asChild>
        <Button variant="solid" size="md" rounded="full" shadow="lg" display="flex" alignItems="center" gap={2} px={4}>
          <Globe size={18} />
          <Text>Change universe</Text>
        </Button>
      </DialogTrigger>

      <DialogContent bg="gray.900" color="white" borderRadius="lg" p={6} maxW="lg">
        <DialogTitle fontSize="xl" fontWeight="bold">
          Select Universe Theme
        </DialogTitle>

        <DialogDescription fontSize="sm" color="gray.300" mt={2} mb={4}>
          Choose a visual and thematic universe. This will affect characters, encounters, and the overall experience.
        </DialogDescription>

        <SimpleGrid columns={UNIVERSES.length} row={2} gap={4}>
          {UNIVERSES.map((u) => (
            <Box
              key={u.id}
              onClick={() => setUniverse(u)}
              cursor="pointer"
              borderRadius="md"
              overflow="hidden"
              border={universe.id === u.id ? '4px solid #3182ce' : '4px solid #444'}
              transition="all 0.2s"
              _hover={{ transform: 'scale(1.02)', borderColor: '#3182ce' }}
            >
              <Image src={universeImagePath + u.img} alt={u.label} objectFit="cover" w="100%" h="120px" />

              <Box p={2} bg="gray.800">
                <Text fontWeight="bold">{u.label}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <DialogCloseTrigger />
      </DialogContent>
    </Dialog.Root>
  )
}

export default UniverseModal
