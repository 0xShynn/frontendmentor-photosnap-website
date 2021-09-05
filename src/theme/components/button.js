import { sharedBaseStyle, lightBtn, darkBtn } from './sharedStyleLinkButton'

const button = {
  baseStyle: {
    ...sharedBaseStyle,
    borderRadius: 0,
  },
  sizes: {
    sm: {},
    md: {},
    lg: {},
  },
  variants: {
    ...lightBtn,
    ...darkBtn,
    // Add here the shared variants from the sharedStyleLinkButton.js
  },
  defaultProps: {
    // size: 'md',
    // variant: 'light',
  },
}

export default button
