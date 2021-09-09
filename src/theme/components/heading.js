const heading = {
  // style object for base or default style
  baseStyle: {
    fontWeight: '700',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    h1: {
      fontSize: ['24px', '32px', null, '40px'],
      lineHeight: { base: '40px', md: '48px' },
      letterSpacing: { base: '3.33px', md: '4.17px' },
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '24px',
      lineHeight: '25px',
    },
    h3: {
      fontSize: '18px',
      lineHeight: '25px',
    },
    h4: {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    h5: {
      fontSize: '10px',
      letterSpacing: '1.67px',
      textTransform: 'uppercase',
    },
  },
  // default values for `size` and `variant`
  defaultProps: {},
}

export default heading
