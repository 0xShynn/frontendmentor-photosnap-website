import { gql } from 'graphql-request'

const GET_HEADER_FOOTER = gql`
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
`

export default GET_HEADER_FOOTER
