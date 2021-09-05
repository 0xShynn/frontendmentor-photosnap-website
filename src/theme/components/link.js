import { darkBtn, lightBtn, sharedBaseStyle } from './sharedStyleLinkButton'

const link = {
  baseStyle: {
    ...sharedBaseStyle,
    _hover: {
      // textDecoration: 'none',
    },
  },
  sizes: {
    sm: {},
    md: {},
    lg: {},
  },
  variants: {
    light: {
      color: 'primary.pureblack',
    },
    dark: {
      color: 'primary.purewhite',
    },
    ...lightBtn,
    ...darkBtn,
    // Add here the shared variants from the sharedStyleLinkButton.js
  },
  defaultProps: {
    // size: 'md',
    // variant: 'light',
  },
}

export default link
