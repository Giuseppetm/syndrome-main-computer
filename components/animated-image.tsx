import { motion } from 'framer-motion'
import { Image } from '@chakra-ui/react'

const MotionImage = motion(Image)

interface AnimatedImageProps {
  /**
   * Source URL of the image.
   */
  src: string

  /**
   * Alternative text for the image.
   * Used for accessibility and SEO.
   */
  alt: string

  /**
   * Optional width of the image in pixels.
   */
  width?: number

  /**
   * Optional height of the image in pixels.
   */
  height?: number
}

/**
 * @name AnimatedImage
 *
 * @description
 * A wrapper around Chakra UI's `Image` component that uses Framer Motion
 * to animate a smooth invert filter transition effect.
 *
 * On initial render, the image is fully inverted (100%),
 * and then animates to normal colors (0%) over 0.5 seconds.
 *
 * @example
 * ```tsx
 * <AnimatedImage
 *   src="/images/hero.png"
 *   alt="Hero image"
 *   width={300}
 *   height={200}
 * />
 * ```
 *
 * @author
 * Giuseppe Del Campo
 */
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
