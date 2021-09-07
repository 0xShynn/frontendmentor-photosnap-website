import { Box } from '@chakra-ui/layout'

import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
  return (
    <Box>
      <Box role="main">
        <Header data={props.data.header} />
        {props.children}
      </Box>
      <Footer data={props.data.footer} />
    </Box>
  )
}
