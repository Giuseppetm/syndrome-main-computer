import { motion } from 'framer-motion'
import { Image } from '@chakra-ui/react'

const MotionImage = motion(Image)

interface AnimatedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, width, height }) => {
  return (
    <MotionImage
      key={src + alt}
      src={src}
      alt={alt}
      width={width}
      height={height}
      initial={{ filter: 'invert(100%)' }}
      animate={{ filter: 'invert(0%)' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    />
  )
}

export default AnimatedImage
