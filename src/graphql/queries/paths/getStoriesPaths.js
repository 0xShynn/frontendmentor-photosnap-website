import { gql } from 'graphql-request'

import gqlClient from '../../config/graphQLClient'

const GET_STORIES_PATHS = gql`
  query Stories {
    stories {
      slug
    }
  }
`

export async function getStoriesPaths() {
  const data = gqlClient.request(GET_STORIES_PATHS)
  return data
}
