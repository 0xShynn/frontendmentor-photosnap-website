import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import NextImage from 'next/image'
import PropTypes from 'prop-types'

const Feature = ({ title, subtitle, icon }) => {
  return (
    <Flex
      align="center"
      direction="column"
      maxW={{ base: '350px', md: '380px', lg: '345px' }}
    >
      <Box boxSize="72px" pos="relative" mb="12">
        <NextImage
          src={icon.url}
          layout="responsive"
          width={icon.width}
          height={icon.height}
          objectFit="contain"
          alt={icon.alt}
        />
      </Box>
      <Heading as="h2" variant="h3" mb="4" textAlign="center">
        {title}
      </Heading>
      <Text textAlign="center">{subtitle}</Text>
    </Flex>
  )
}

Feature.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default Feature
