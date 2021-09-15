import { Box, Flex, SimpleGrid } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'

import FeaturedStory from '../components/FeaturedStory'
import Layout from '../components/Layout'
import Story from '../components/Story'
import { getStoriesPage } from '../graphql/queries/pages/getStoriesPage'

export const getStaticProps = async () => {
  const { page, stories, featuredStory } = await getStoriesPage()

  return {
    props: {
      page,
      stories,
      featuredStory,
    },
  }
}

export default function Stories({ page, stories = [], featuredStory }) {
  const featStory = featuredStory[0]

  const featStoryImageMobile = featStory.featPhotos.find(
    (photo) => photo.imageVersion === 'mobile'
  )

  const featStoryImageTablet = featStory.featPhotos.find(
    (photo) => photo.imageVersion === 'tablet'
  )

  const featStoryImageDesktop = featStory.featPhotos.find(
    (photo) => photo.imageVersion === 'desktop'
  )

  return (
    <Layout
      data={{
        header: page.header,
        footer: page.footer,
      }}
    >
      <NextSeo
        title="Stories"
        description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
      />

      <Flex direction="column" align="center">
        <Box maxW="1920px" w="full">
          {featStory && (
            <FeaturedStory
              imageMobile={featStoryImageMobile}
              imageTablet={featStoryImageTablet}
              imageDesktop={featStoryImageDesktop}
              data={featStory}
            />
          )}

          {stories.length > 0 ? (
            <SimpleGrid
              columns={{ base: 1, sm2: 2, md: 2, lg: 4 }}
              spacing="0"
              bg="secondary.blackdust"
            >
              {stories.map((story) => {
                const storySlug = `/stories/${story.slug}`
                return (
                  <Story
                    key={story.id}
                    slug={storySlug}
                    photo={story.photo}
                    date={story.date}
                    title={story.title}
                    author={story.author.name}
                  />
                )
              })}
            </SimpleGrid>
          ) : null}
        </Box>
      </Flex>
    </Layout>
  )
}

Stories.propTypes = {
  featuredStory: PropTypes.array.isRequired,
  page: PropTypes.shape({
    footer: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired,
  }).isRequired,
  stories: PropTypes.array,
}
