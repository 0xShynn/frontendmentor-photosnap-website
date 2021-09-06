import { gql } from 'graphql-request'

import gqlClient from '../config/graphQLClient'

const GET_STORIES_PAGE_QUERY = gql`
  query StoriesPage {
    page(where: { slug: "stories" }) {
      id
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
    stories: stories(where: { isFeatured: false }) {
      title
      slug
      photo {
        url
      }
      date
      id
      author {
        name
        avatar {
          url
        }
      }
    }
    featuredStory: stories(where: { isFeatured: true }) {
      title
      slug
      date
      id
      author {
        name
        avatar {
          url
        }
      }
      featuredText
      featuredPhoto {
        url
        width
        height
      }
    }
  }
`

export async function getStoriesPage() {
  const data = await gqlClient.request(GET_STORIES_PAGE_QUERY)
  return data
}
