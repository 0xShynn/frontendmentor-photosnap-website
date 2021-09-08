import { gql } from 'graphql-request'

const GET_BANNER = gql`
  banner {
    title
      link {
        href
        label
      }
      backgroundImage {
        alt
        url
      }
  }

`

export default GET_BANNER
