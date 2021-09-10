import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import NextImage from 'next/image'
import PropTypes from 'prop-types'

import { photoSnapGradient } from '../constants/styleToken'

import CustomLink from './utils/CustomLink'

const Hero = ({
  image,
  themeColor,
  title,
  subtitle,
  link,
  contentSide,
  noGradient,
}) => {
  const imageLayout = useBreakpointValue({
    base: 'responsive',
    md: 'fill',
  })
  console.log(imageLayout)

  return (
    <Flex
      direction={{
        base: 'column',
        sm2: contentSide === 'left' ? 'row-reverse' : 'row',
      }}
    >
      {image && (
        <Box w="full" pos="relative">
          <NextImage
            src={image.url}
            layout={imageLayout}
            width={imageLayout === 'responsive' ? image.width : 0}
            height={imageLayout === 'responsive' ? image.height : 0}
            objectFit="cover"
            alt={image.alt}
          />
        </Box>
      )}

      <Box
        bg={themeColor === 'dark' ? 'primary.pureblack' : 'primary.purewhite'}
        px={{ base: 8, md: 0 }}
      >
        {!noGradient && (
          <Box
            h="6px"
            bgGradient={photoSnapGradient}
            w="126px"
            display={{ base: 'block', md: 'none' }}
          />
        )}
        <Flex py={{ base: 16, md: 40, xl: 44 }} direction="row">
          {!noGradient && (
            <Box
              bgGradient={photoSnapGradient}
              w={{ md: '12px', xl: '6px' }}
              display={{ base: 'none', md: 'block' }}
            />
          )}
          <Flex
            px={{ base: 0, md: 10, lg: 16, xl: 28 }}
            direction="column"
            w={{ xl: '387px' }}
            boxSizing="content-box"
          >
            <Heading
              as="h1"
              variant="h1"
              color={
                themeColor === 'dark'
                  ? 'primary.purewhite'
                  : 'primary.pureblack'
              }
              mb="5"
            >
              {title}
            </Heading>
            <Text
              color={themeColor === 'dark' ? 'primary.lightgrey' : '#666666'}
              mb="5"
            >
              {subtitle}
            </Text>
            {link && (
              <CustomLink
                href={link.href}
                variant={themeColor === 'dark' ? 'dark' : 'light'}
                arrow={true}
                alignSelf="flex-start"
              >
                {link.label}
              </CustomLink>
            )}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}

Hero.propTypes = {
  contentSide: PropTypes.oneOf(['left', 'right']),
  image: PropTypes.shape({
    alt: PropTypes.string,
    height: PropTypes.number,
    url: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
  link: PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string,
  }),
  noGradient: PropTypes.bool,
  subtitle: PropTypes.string,
  themeColor: PropTypes.oneOf(['light', 'dark']),
  title: PropTypes.string.isRequired,
}

export default Hero
