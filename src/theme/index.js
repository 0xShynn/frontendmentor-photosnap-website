// theme/index.js
import { extendTheme } from '@chakra-ui/react'

import breakpoints from './breakpoints'
import colors from './colors'
import Button from './components/button'
import Heading from './components/heading'
import Link from './components/link'
import Text from './components/text'
import config from './config'
import fonts from './fonts'
import global from './global'
import sizes from './sizes'
import textStyles from './textStyles'

const overrides = {
  styles: {
    global,
  },
  config,
  colors,
  breakpoints,
  fonts,
  sizes,
  textStyles,
  components: {
    Button,
    Heading,
    Link,
    Text,
  },
}

export default extendTheme(overrides)
