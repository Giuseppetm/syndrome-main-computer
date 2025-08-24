import { useEffect, useState } from 'react'
import { Box, Button, Heading, Text, Link, HStack, VStack, IconButton } from '@chakra-ui/react'
import { Coffee, X } from 'lucide-react'

const DonationPopup = () => {
  const [visible, setVisible] = useState(false)
  const BMC_URL = 'https://buymeacoffee.com/giuseppetm'
  const hideTimeout = 15000

  useEffect(() => {
    setVisible(true)
    const timer = setTimeout(() => setVisible(false), hideTimeout)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <Box
      position="fixed"
      bottom="20px"
      left="50%"
      transform="translateX(-50%)"
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      shadow="xl"
      rounded="2xl"
      p={6}
      w={{ base: '90%', sm: '400px' }}
      zIndex={1400}
      fontFamily="sans-serif"
    >
      <IconButton
        aria-label="Close"
        size="sm"
        variant="plain"
        color="black"
        position="absolute"
        top="6px"
        right="6px"
        onClick={() => setVisible(false)}
      >
        <X />
      </IconButton>

      <VStack align="stretch" gap={4}>
        <HStack gap={3} align="start">
          <Coffee size={40} />
          <VStack align="start" gap={1}>
            <Heading size="md">
              Support{' '}
              <Box as="span" color="purple.600">
                syndromemaincomputer.app
              </Box>
            </Heading>
            <Text fontSize="sm" color="gray.600">
              If you like this project and have the financial possibility,{' '}
              <Box as="span" fontWeight="semibold">
                please consider buying me a coffee
              </Box>
              . Your support helps keep the project online.
            </Text>
          </VStack>
        </HStack>

        {/* @ts-expect-error Button as link here */}
        <Button as={Link} href={BMC_URL} isExternal colorScheme="purple" size="sm" rounded="xl" fontWeight="bold" leftIcon={<Coffee size={16} />}>
          Buy me a coffee
        </Button>
      </VStack>
    </Box>
  )
}

export default DonationPopup
