import { Box, Flex, Heading } from '@chakra-ui/layout'
import PropTypes from 'prop-types'

import { photoSnapGradient } from '../constants/styleToken'

import CustomLink from './utils/CustomLink'

const Banner = ({ title, link, backgroundImage }) => {
  return (
    <Flex
      px={{ base: 8, md: 0 }}
      direction={{ base: 'column', md: 'row' }}
      align={{ base: 'flex-start', md: 'stretch' }}
      bgImage={backgroundImage.url}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box bgGradient={photoSnapGradient} w="6px" />

      <Box
        h="6px"
        bgGradient={photoSnapGradient}
        w="126px"
        display={{ base: 'block', md: 'none' }}
      />
      <Flex
        py={{ base: 16 }}
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'flex-start', md: 'center' }}
        px={{ md: 8, lg: 16, xl: 40 }}
        w="full"
        justify="space-between"
      >
        {title && (
          <Heading
            as="h3"
            variant="h1"
            mb={{ base: 6, md: 0 }}
            color="white"
            maxW="400px"
          >
            {title}
          </Heading>
        )}

        {link && (
          <CustomLink href={link.href} arrow={true} variant="dark">
            {link.label}
          </CustomLink>
        )}
      </Flex>
    </Flex>
  )
}

Banner.propTypes = {
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.shape({
    alt: PropTypes.string,
    url: PropTypes.string.isRequired,
  }),
}

export default Banner
