import { Box } from '@chakra-ui/layout'

import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
  return (
    <>
      <Box role="main">
        <Box>
          <Header data={props.data.header} />
          {props.children}
        </Box>
      </Box>
      <Footer data={props.data.footer} />
    </>
  )
}
