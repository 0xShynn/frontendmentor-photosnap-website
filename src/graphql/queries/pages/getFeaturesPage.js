import { gql } from 'graphql-request'

import gqlClient from '../../config/graphQLClient'
import GET_BANNER from '../components/getBanner'
import GET_FOOTER from '../components/getFooter'
import GET_HEADER from '../components/getHeader'

const GET_FEATURES_PAGE_QUERY = gql`
  query FeaturesPage {
  page(where: {slug: "features"}) {
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
        alt
      }
    }
    features {
        id
        title
        subtitle
        icon {
          url
          width
          height
          alt
        }
      }
    isBannerDisplayed
    ${GET_BANNER}
    ${GET_HEADER}
    ${GET_FOOTER}
  }
}


`

export async function getFeaturesPage() {
  const data = await gqlClient.request(GET_FEATURES_PAGE_QUERY)
  return data
}
