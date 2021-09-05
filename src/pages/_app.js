import { ChakraProvider } from '@chakra-ui/react'
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

export default MyApp
