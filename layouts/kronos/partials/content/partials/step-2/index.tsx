import { KronosStep, stepLabel } from '@/layouts/kronos'
import { Box } from '@chakra-ui/react'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AnimatedLabel from '../animated-label'

const MotionBox = motion(Box)
const MotionSvg = motion('svg')
const MotionPath = motion('path')

/**
 * @name KronosStep2
 *
 * @description
 * Represents the second step in the Kronos Project animation sequence.
 *
 * Features:
 * - Displays the city hills background as the delivery context.
 * - Shows animated labels describing different points ("Launch Point", "Delivery Vehicle", "Slider Deployment", "Landing Point").
 * - Animates a semi-circular path representing the trajectory of the delivery vehicle.
 * - Animates a ship icon moving smoothly along the path with rotation adjustments.
 *
 * @author Giuseppe Del Campo
 */
const KronosStep2: React.FC = () => {
  const MOVEMENT_DURATION = 1.5
  const FADE_DURATION = 0.5

  const trackColor = 'transparent'
  const strokeWidth = 98
  const radius = 420
  const pathLength = Math.PI * radius

  const progress = useMotionValue(0)
  const centerX = 470 + radius
  const centerY = -251 + radius
  const verticalFactor = 0.78 // 1 = normale altezza, <1 = più “piatto”
  const horizontalFactor = 0.95 // 1 = normale larghezza, <1 = più “stretto” orizzontalmente

  const x = useTransform(progress, (t) => centerX + radius * Math.cos(Math.PI - Math.PI * t) * horizontalFactor - 35)
  const bottom = useTransform(progress, (t) => centerY + radius * Math.sin(Math.PI - Math.PI * t) * verticalFactor - 35)
  const rotation = useTransform(progress, [0, 1], [15, 160])

  useEffect(() => {
    animate(progress, 1, { duration: MOVEMENT_DURATION, delay: 0.3, ease: 'linear' })
  }, [progress])

  return (
    <MotionBox
      key={KronosStep.DELIVERY}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Box pos="absolute" bottom={61} left={330} zIndex={2}>
        <Image src={'/images/kronos/city-hills-v2.png'} width={1100} height={100} alt={stepLabel[KronosStep.DELIVERY] + ' - Ship'} />
      </Box>

      <AnimatedLabel top={720} left={350} text={['Launch', 'Point']} delay={0.3} />
      <AnimatedLabel top={450} left={630} text={['Delivery', 'Vehicle']} delay={0.5} />
      <AnimatedLabel top={450} left={1125} text={['Slider', 'Deployment']} delay={0.8} />
      <AnimatedLabel top={735} left={1330} text={['Landing', 'Point']} textAlign="right" delay={1} />

      <Box position="absolute" bottom={61} left={410}>
        <MotionSvg
          width={radius * 2 + strokeWidth}
          height={radius + strokeWidth / 2}
          viewBox={`0 0 ${radius * 2 + strokeWidth} ${radius + strokeWidth / 2}`}
          style={{ overflow: 'visible' }}
        >
          <path
            d={`M ${strokeWidth / 2} ${radius} A ${radius} ${radius} 0 0 1 ${radius * 2 + strokeWidth / 2} ${radius}`}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
          />

          <MotionPath
            d={`M ${strokeWidth / 2} ${radius} A ${radius} ${radius} 0 0 1 ${radius * 2 + strokeWidth / 2} ${radius}`}
            fill="none"
            stroke={'#A6A8A8'}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            strokeDasharray={pathLength}
            initial={{ strokeDashoffset: pathLength }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 0.5,
              ease: 'linear',
              delay: 0.2,
            }}
          />
        </MotionSvg>
      </Box>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: FADE_DURATION }}>
        <motion.div
          style={{
            position: 'absolute',
            left: x,
            bottom: bottom,
            rotate: rotation,
          }}
        >
          <Image src={'/images/kronos/mini-ship.png'} width={70} height={70} alt="Ship" />
        </motion.div>
      </motion.div>
    </MotionBox>
  )
}

export default KronosStep2
