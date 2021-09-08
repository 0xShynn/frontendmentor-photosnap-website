import { gql } from 'graphql-request'

import gqlClient from '../config/graphQLClient'

import GET_FOOTER from './components/getFooter'
import GET_HEADER from './components/getHeader'

const GET_STORIES_PAGE_QUERY = gql`
  query StoriesPage {
    page(where: { slug: "stories" }) {
      id
      ${GET_HEADER}
      ${GET_FOOTER}
    }
    stories: stories(where: { isFeatured: false }) {
      title
      slug
      photo {
        url
        width
        height
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
      featPhotos {
        id
        alt
        image {
          url
          width
          height
        }
        imageVersion
      }
    }
  }
`

export async function getStoriesPage() {
  const data = await gqlClient.request(GET_STORIES_PAGE_QUERY)
  return data
}
