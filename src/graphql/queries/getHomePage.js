import { gql } from 'graphql-request'

import gqlClient from '../config/graphQLClient'

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
      header {
        link {
          label
          slug
          href
        }
        navigation {
          pages {
            title
            slug
          }
          slug
        }
      }
      footer {
        link {
          href
          label
        }
        navigation {
          pages {
            title
            slug
          }
        }
        socialLinks {
          label
          alt
          logo {
            url
          }
        }
      }
    }
  }
`

export async function getHomePage() {
  const data = await gqlClient.request(GET_HOME_PAGE_QUERY)
  return data
}
