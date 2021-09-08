import { SimpleGrid } from '@chakra-ui/layout'
import PropTypes from 'prop-types'

const FeaturesContainer = ({ columns, children }) => {
  return (
    <SimpleGrid
      bg="white"
      columns={columns}
      spacing="12"
      py={{ base: 20, lg: 28, xl: 40 }}
      px={{ base: 12, lg: 28, xl: 36, '2xl': 64 }}
      justifyContent="center"
      justifyItems="center"
    >
      {children}
    </SimpleGrid>
  )
}

FeaturesContainer.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.object,
}

export default FeaturesContainer
