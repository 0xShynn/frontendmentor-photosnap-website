import { Box } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'

import Banner from '../components/Banner'
import CompareTable from '../components/CompareTable'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import PlanContainer from '../components/PlanContainer'
import { getPricingPage } from '../graphql/queries/pages/getPricingPage'

export const getStaticProps = async () => {
  const { page, __type } = await getPricingPage()
  const pricingEnumValues = __type.enumValues
  return {
    props: {
      page,
      pricingEnumValues,
    },
  }
}

const Pricing = ({ page, pricingEnumValues }) => {
  const hero = page?.heroes[0] ?? {}
  const banner = page?.banner ?? {}
  const pricingPlans = page?.plan ?? {}
  const compareTableData = page?.table ?? {}
  const isBannerDisplayed = page?.isBannerDisplayed ?? false

  return (
    <Layout
      data={{
        header: page.header,
        footer: page.footer,
      }}
    >
      <NextSeo
        title="Pricing"
        description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
      />
      <Box bg="white">
        {hero ? (
          <Hero
            title={hero.title}
            subtitle={hero.subtitle}
            contentSide={hero.contentSide}
            themeColor={hero.theme}
            image={hero.image}
          />
        ) : null}

        {pricingPlans ? (
          <PlanContainer
            title={pricingPlans.title}
            data={pricingPlans.planItems}
          />
        ) : null}

        {compareTableData ? (
          <CompareTable
            data={compareTableData.items}
            title={compareTableData.title}
            pricingEnum={pricingEnumValues}
          />
        ) : null}

        {isBannerDisplayed ? (
          <Banner
            title={banner.title}
            link={banner.link}
            backgroundImage={banner.backgroundImage}
          />
        ) : null}
      </Box>
    </Layout>
  )
}

Pricing.propTypes = {
  page: PropTypes.shape({
    banner: PropTypes.object,
    footer: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired,
    heroes: PropTypes.array,
    isBannerDisplayed: PropTypes.bool.isRequired,
    plan: PropTypes.object,
    table: PropTypes.object,
  }),
  pricingEnumValues: PropTypes.array.isRequired,
}

export default Pricing
