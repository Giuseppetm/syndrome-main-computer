import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface SuperOmnidroidLayoutProps {
  children: ReactNode
}

const SuperOmnidroidLayout = ({ children }: SuperOmnidroidLayoutProps) => {
  return <Box style={{ backgroundColor: 'darkgreen' }}>{children}</Box>
}

export default SuperOmnidroidLayout
