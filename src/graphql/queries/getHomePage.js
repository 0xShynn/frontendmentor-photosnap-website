import { gql } from 'graphql-request'

import gqlClient from '../config/graphQLClient'

import GET_HEADER_FOOTER from './getHeaderFooter'

const GET_HOME_PAGE_QUERY = gql`
  query HomePage {
    page(where: { slug: "home" }) {
      id
      title
      slug
      heroes {
        id
        title
        image {
          url
        }
      }
      ${GET_HEADER_FOOTER}
    }
  }
`

export async function getHomePage() {
  const data = await gqlClient.request(GET_HOME_PAGE_QUERY)
  return data
}
