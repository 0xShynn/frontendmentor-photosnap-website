import { Box, Flex, SimpleGrid } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'

import Feature from '../components/Feature'
import FeaturesContainer from '../components/FeaturesContainer'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Story from '../components/Story'
import { getHomePage } from '../graphql/queries/pages/getHomePage'

export const getStaticProps = async () => {
  const { page } = await getHomePage()

  return {
    props: {
      page,
    },
  }
}

export default function Home({ page }) {
  const heroes = page?.heroes ?? []
  const stories = page?.stories ?? []
  const features = page?.features ?? []

  return (
    <Layout
      data={{
        header: page.header,
        footer: page.footer,
      }}
    >
      <NextSeo
        title="Home"
        description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
      />

      <Flex direction="column">
        {heroes.length > 0 ? (
          <Box maxW="1920px" mx="auto" w="full">
            {heroes.map((hero, index) => (
              <Hero
                key={index}
                image={hero.image}
                themeColor={hero.theme}
                title={hero.title}
                subtitle={hero.subtitle}
                link={hero.link}
                contentSide={hero.contentSide}
                noGradient={index !== 0 ? true : false}
              />
            ))}
          </Box>
        ) : null}

        {stories.length > 0 ? (
          <SimpleGrid columns={{ base: 1, sm2: 2, md: 2, lg: 4 }} spacing="0">
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

        {features.length > 0 ? (
          <FeaturesContainer columns={{ base: 1, md: 1, lg: 3, xl: 3 }}>
            {features.map((feature) => (
              <Feature
                title={feature.title}
                subtitle={feature.subtitle}
                icon={feature.icon}
                key={feature.id}
              />
            ))}
          </FeaturesContainer>
        ) : null}
      </Flex>
    </Layout>
  )
}

Home.propTypes = {
  page: PropTypes.shape({
    footer: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired,
    heroes: PropTypes.arrayOf(PropTypes.object),
    stories: PropTypes.arrayOf(PropTypes.object),
    features: PropTypes.arrayOf(PropTypes.object),
  }),
}
