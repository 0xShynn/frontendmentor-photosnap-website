import { Box } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'

import Banner from '../components/Banner'
import Feature from '../components/Feature'
import FeaturesContainer from '../components/FeaturesContainer'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { getFeaturesPage } from '../graphql/queries/pages/getFeaturesPage'

export const getStaticProps = async () => {
  const { page } = await getFeaturesPage()

  return {
    props: {
      page,
    },
  }
}

const Features = ({ page }) => {
  const features = page?.features ?? []
  const hero = page?.heroes[0] ?? {}
  const banner = page?.banner ?? {}
  const isBannerDisplayed = page?.isBannerDisplayed ?? false

  return (
    <Layout
      data={{
        header: page.header,
        footer: page.footer,
      }}
    >
      <NextSeo
        title="Features"
        description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
      />

      <Box>
        {hero && (
          <Hero
            title={hero.title}
            subtitle={hero.subtitle}
            contentSide={hero.contentSide}
            themeColor={hero.theme}
            image={hero.image}
          />
        )}

        {features.length > 0 ? (
          <FeaturesContainer columns={{ base: 1, md: 2, xl: 3 }}>
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
      </Box>

      {isBannerDisplayed && (
        <Banner
          title={banner.title}
          link={banner.link}
          backgroundImage={banner.backgroundImage}
        />
      )}
    </Layout>
  )
}

Features.propTypes = {
  page: PropTypes.shape({
    features: PropTypes.array,
    footer: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired,
    heroes: PropTypes.array,
    banner: PropTypes.object,
    isBannerDisplayed: PropTypes.bool.isRequired,
  }),
}

export default Features
