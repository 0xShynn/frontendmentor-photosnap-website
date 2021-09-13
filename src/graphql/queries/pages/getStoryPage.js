import { gql } from 'graphql-request'

import gqlClient from '../../config/graphQLClient'

const GET_STORY_PAGE = gql`
  query Story($slug: String!) {
    story(where: { slug: $slug }) {
      id
      title
      photo {
        url
      }
      author {
        name
        avatar {
          url
        }
      }
    }
    footer(where: { slug: "primary" }) {
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
        url
        logo {
          url
          width
          height
        }
      }
    }
    header(where: { slug: "primary" }) {
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
  }
`

export async function getStoryPage(variables) {
  const data = await gqlClient.request(GET_STORY_PAGE, variables)
  return data
}
