import { gql } from 'graphql-request'

const GET_FOOTER = gql`
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
      url
      logo {
        url
        width
        height
      }
    }
  }
`

export default GET_FOOTER
