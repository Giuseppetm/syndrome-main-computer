import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Eurostile';
        src: url('../public/fonts/Eurostile-BoldExtendedTwo.eot');
        src: url('../public/fonts/Eurostile-BoldExtendedTwo.eot?#iefix') format('embedded-opentype'),
          url('../public/fonts/Eurostile-BoldExtendedTwo.woff2') format('woff2'),
          url('../public/fonts/Eurostile-BoldExtendedTwo.woff') format('woff'),
          url('../public/fonts/Eurostile-BoldExtendedTwo.ttf') format('truetype'),
          url('../public/fonts/Eurostile-BoldExtendedTwo.svg#Eurostile-BoldExtendedTwo') format('svg');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Eurostile';
        src: url('../public/fonts/EuroStyle-RegularExtended2/Eurostile-ExtendedTwo.eot');
        src: url('../public/fonts/EuroStyle-RegularExtended2/Eurostile-ExtendedTwo.eot?#iefix') format('embedded-opentype'),
          url('../public/fonts/EuroStyle-RegularExtended2/Eurostile-ExtendedTwo.woff2') format('woff2'),
          url('../public/fonts/EuroStyle-RegularExtended2/Eurostile-ExtendedTwo.woff') format('woff'),
          url('../public/fonts/EuroStyle-RegularExtended2/Eurostile-ExtendedTwo.ttf') format('truetype'),
          url('../public/fonts/EuroStyle-RegularExtended2/Eurostile-ExtendedTwo.svg#Eurostile-ExtendedTwo') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
)

export default Fonts
