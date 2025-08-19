import { Box, BoxProps, useSlotRecipe } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface MenuLayoutProps extends BoxProps {
  children: ReactNode
}

const MenuLayout = ({ children, ...props }: MenuLayoutProps) => {
  const styles = useSlotRecipe({ key: 'menuLayout' })({}) as Record<string, BoxProps>

  return (
    <Box as="nav" {...styles.navigator} {...props}>
      {children}
    </Box>
  )
}

export default MenuLayout
