import { useControlsStore } from '@/store/controls'
import { Box, Link, Text, HStack } from '@chakra-ui/react'
import { SquareCode } from 'lucide-react'
import { FC } from 'react'

const CreatorHint: FC = () => {
  const { enableControls } = useControlsStore()

  return (
    <Box
      position="fixed"
      top={enableControls ? '0.5rem' : -100}
      right="0.5rem"
      zIndex="overlay"
      bg="gray.700"
      color="white"
      px="3"
      py="1"
      borderRadius="md"
      fontSize="sm"
      opacity={0.8}
      boxShadow="md"
      fontFamily="sans-serif"
      as={Link}
      /* @ts-expect-error Usual chakra stuff */
      href="https://www.linkedin.com/in/giuseppe-del-campo/"
      target="_blank"
      textDecoration="none"
      _hover={{ textDecoration: 'underline', color: 'teal.200' }}
    >
      <HStack gap={2}>
        <SquareCode size={16} />
        <Text>
          Created by{' '}
          <Text
            as="span"
            fontWeight={700}
            style={{
              animation: 'pulseColor 2s ease-in-out infinite',
            }}
          >
            Giuseppe Del Campo
          </Text>
        </Text>
      </HStack>

      <style>
        {`
            @keyframes pulseColor {
                0% { color: white; }
                50% { color: teal; }
                100% { color: white; }
            }
        `}
      </style>
    </Box>
  )
}

export default CreatorHint
