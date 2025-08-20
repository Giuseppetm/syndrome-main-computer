import localFont from 'next/font/local'

export const eurostile = localFont({
  src: [
    {
      path: '../fonts/Eurostile-BoldExtendedTwo.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Eurostile-ExtendedTwo.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-eurostile',
  display: 'fallback',
})
