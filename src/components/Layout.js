import { Box } from '@chakra-ui/layout'
import PropTypes from 'prop-types'

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    footer: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired,
  }),
}
