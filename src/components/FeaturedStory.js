import { Box, Heading, Text, VStack } from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/system'
import NextImage from 'next/image'
import PropTypes from 'prop-types'

import getFormattedDate from '../utils/formatDate'

import CustomLink from './utils/CustomLink'

const FeaturedStory = ({ data, imageMobile, imageTablet, imageDesktop }) => {
  return (
    <Box pos="relative">
      <Box w="full" h={{ base: 'full', xl: 'full' }} pos="relative">
        {imageMobile && (
          <Box pos="relative" display={{ base: 'block', md: 'none' }}>
            <NextImage
              src={imageMobile.image.url}
              width={imageMobile.image.width}
              height={imageMobile.image.height}
              layout="responsive"
              alt={imageMobile.alt}
            />
          </Box>
        )}

        {imageTablet && (
          <Box
            pos="relative"
            display={{ base: 'none', md: 'block', xl: 'none' }}
            h={{ md: '650px', lg: '660px' }}
          >
            <NextImage
              src={imageTablet.image.url}
              width={imageTablet.image.width}
              height={imageTablet.image.height}
              layout="responsive"
              alt={imageTablet.alt}
            />
          </Box>
        )}

        {imageDesktop && (
          <Box pos="relative" display={{ base: 'none', xl: 'block' }}>
            <NextImage
              src={imageDesktop.image.url}
              width={imageDesktop.image.width}
              height={imageDesktop.image.height}
              layout="responsive"
              alt={imageDesktop.alt}
            />
          </Box>
        )}

        <VStack
          pos={{ base: 'relative', md: 'absolute' }}
          direction="column"
          top="0"
          zIndex="overlay"
          boxSizing="content-box"
          align="flex-start"
          py={{ base: 10, md: 28, lg: 32, xl: 32 }}
          px={{ base: 10, lg: 24, xl: 32 }}
          maxW={{ md: '387px' }}
          spacing="5"
          bg={{ base: 'primary.pureblack', md: 'transparent' }}
        >
          <Heading as="h4" variant="h4" color="primary.purewhite">
            Last month&apos;s featured story
          </Heading>
          <Heading
            as="h1"
            variant="h1"
            fontSize={{ base: 32, md: '40px' }}
            color="primary.purewhite"
          >
            {data.title}
          </Heading>
          <Text color="primary.lightgrey" fontSize="13px">
            {getFormattedDate(data.date)}
            <chakra.span ml="3" color="primary.purewhite">
              By {data.author.name}
            </chakra.span>
          </Text>
          <Text color="primary.lightgrey">{data.featuredText ?? null}</Text>
          <CustomLink
            href={`/stories/${data.slug}`}
            arrow={true}
            alignSelf="flex-start"
            variant="dark"
          >
            Read the story
          </CustomLink>
        </VStack>
      </Box>
    </Box>
  )
}

FeaturedStory.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    date: PropTypes.string.isRequired,
    featuredText: PropTypes.string,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  imageDesktop: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.shape({
      height: PropTypes.number,
      url: PropTypes.string,
      width: PropTypes.number,
    }).isRequired,
  }).isRequired,
  imageMobile: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.shape({
      height: PropTypes.number,
      url: PropTypes.string,
      width: PropTypes.number,
    }).isRequired,
  }),
  imageTablet: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    image: PropTypes.shape({
      height: PropTypes.number,
      url: PropTypes.string,
      width: PropTypes.number,
    }).isRequired,
  }),
}

export default FeaturedStory
