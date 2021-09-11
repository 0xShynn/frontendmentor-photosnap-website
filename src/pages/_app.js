import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/700.css'
import { DefaultSeo } from 'next-seo'
import PropTypes from 'prop-types'

import SEO from '../../next-seo.config'
import overrides from '../theme/index'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={overrides}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

export default MyApp
