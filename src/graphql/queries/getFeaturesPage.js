import { gql } from 'graphql-request'

import gqlClient from '../config/graphQLClient'

import GET_HEADER_FOOTER from './getHeaderFooter'

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
        }
      }
    ${GET_HEADER_FOOTER}
  }
}


`

export async function getFeaturesPage() {
  const data = await gqlClient.request(GET_FEATURES_PAGE_QUERY)
  return data
}
