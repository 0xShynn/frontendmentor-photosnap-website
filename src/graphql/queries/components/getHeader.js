import { gql } from 'graphql-request'

const GET_HEADER = gql`
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
`

export default GET_HEADER
