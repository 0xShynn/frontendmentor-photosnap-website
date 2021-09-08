import { gql } from 'graphql-request'

import gqlClient from '../../config/graphQLClient'
import GET_BANNER from '../components/getBanner'
import GET_FOOTER from '../components/getFooter'
import GET_HEADER from '../components/getHeader'

const GET_PRICING_PAGE_QUERY = gql`
  query PricingPage {
  page(where: {slug: "pricing"}) {
    id
    title
    heroes {
      title
      theme
      subtitle
      contentSide
      image {
        url
        height
        width
      }
    }
    table {
      title
      items {
        itemTitle
        itemOption
      }
    }
    plan {
      planItems {
        pricePerYear
        pricePerMonth
        subtitle
        title
      }
      title
    }
    isBannerDisplayed
    ${GET_HEADER}
    ${GET_BANNER}
    ${GET_FOOTER}
  }
}


`

export async function getPricingPage() {
  const data = await gqlClient.request(GET_PRICING_PAGE_QUERY)
  return data
}
