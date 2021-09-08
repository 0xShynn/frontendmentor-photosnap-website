import { ChakraProvider } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/700.css'

import overrides from '../theme/index'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={overrides}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

export default MyApp
