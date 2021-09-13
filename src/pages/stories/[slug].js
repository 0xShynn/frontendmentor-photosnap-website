import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'
import NextImage from 'next/image'
import PropTypes from 'prop-types'

import Layout from '../../components/Layout'
import { getStoryPage } from '../../graphql/queries/pages/getStoryPage'
import { getStoriesPaths } from '../../graphql/queries/paths/getStoriesPaths'
import getFormattedDate from '../../utils/formatDate'

export const getStaticPaths = async () => {
  const { stories } = await getStoriesPaths()

  return {
    paths: stories.map((story) => ({ params: { slug: story.slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug

  const { story, header, footer } = await getStoryPage({ slug })

  if (!story) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      story: { ...story },
      header,
      footer,
      revalidate: 60 * 60,
    },
  }
}

export default function Story({ story, header, footer }) {
  return (
    <Layout
      data={{
        header,
        footer,
      }}
    >
      <NextSeo
        title={`${story.title} by ${story.author.name}`}
        description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
      />

      <Box w="full" bg="secondary.blackdust">
        <Box maxW="1110px" mx="auto" p="6" textAlign="center" py="16">
          <Text color="white" mb="3">
            {getFormattedDate(story.date)}
          </Text>
          <Heading as="h1" variant="h1" color="white">
            {story.title}
          </Heading>

          <Flex justify="center" align="center" mb="8">
            {/* <Box w="40px" h="40px" rounded="full" overflow="hidden" mr="3">
              <NextImage
                src={story.author.avatar.url}
                width={story.author.avatar.width}
                height={story.author.avatar.height}
              />
            </Box> */}
            <Heading as="h2" variant="h3" color="white" fontWeight="400">
              By {story.author.name}
            </Heading>
          </Flex>

          <Box pos="relative">
            <NextImage
              src={story.photo.url}
              width={story.photo.width}
              height={story.photo.height}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

Story.propTypes = {
  footer: PropTypes.object.isRequired,
  header: PropTypes.object.isRequired,
  story: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired,
    photo: PropTypes.shape({
      url: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    title: PropTypes.string.isRequired,
  }),
}
