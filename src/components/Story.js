import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import NextImage from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

import Arrow from '../assets/arrow'
import CustomLink from '../components/utils/CustomLink'
import { photoSnapGradient } from '../constants/styleToken'
import getFormattedDate from '../utils/formatDate'

const Story = ({ slug, photo, date, title, author }) => {
  const storyImageLayout = useBreakpointValue({
    base: 'fill',
    md: 'responsive',
  })

  return (
    <Box
      bg="secondary.blackdust"
      color="white"
      pos="relative"
      cursor="pointer"
      transition="transform 400ms"
      willChange="tranform"
      _hover={{
        transform: { base: null, md: 'translateY(-20px)' },
        transition: 'transform 200ms',
        _after: {
          content: `" "`,
          pos: 'absolute',
          bottom: '0',
          w: 'full',
          h: '6px',
          bgGradient: {
            base: null,
            md: photoSnapGradient,
          },
          transition: 'opacity 200ms',
        },
      }}
    >
      <Link href={slug} passHref>
        <Box w="full" zIndex="base" pos="relative" bg="black">
          <Box pos="relative" h={{ base: '375px', sm2: 'full', md: 'full' }}>
            <NextImage
              src={photo.url}
              layout={storyImageLayout}
              objectFit="cover"
              objectPosition="center"
              width={storyImageLayout === 'fill' ? 0 : photo.width}
              height={storyImageLayout === 'fill' ? 0 : photo.height}
              alt={title}
            />
          </Box>

          <Box
            w="full"
            zIndex="overlay"
            pos="absolute"
            bottom="0"
            px="10"
            py="40"
            pb="10"
            bgGradient="linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)"
          >
            <Text color="white" fontSize="13px">
              {getFormattedDate(date)}
            </Text>
            <Heading as="h2" variant="h3">
              {title}
            </Heading>
            <Text color="white" fontSize="13px">
              By {author}
            </Text>
            <Divider borderColor="white" opacity="0.2" my="4" />
            <Flex justify="space-between">
              <CustomLink href={slug}>Read story</CustomLink>
              <Box w="42px">
                <Arrow />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Link>
    </Box>
  )
}

Story.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  photo: PropTypes.shape({
    height: PropTypes.number,
    url: PropTypes.string.isRequired,
    width: PropTypes.number,
  }),
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Story
