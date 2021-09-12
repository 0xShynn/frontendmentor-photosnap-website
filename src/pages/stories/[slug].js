import { Box, Text } from '@chakra-ui/layout'
import { GraphQLClient, gql } from 'graphql-request'
import PropTypes from 'prop-types'

import Layout from '../../components/Layout'

const client = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API)

export const getStaticPaths = async () => {
  const query = gql`
    query Stories {
      stories {
        slug
      }
    }
  `

  const data = await client.request(query)

  return {
    paths: data.stories.map((story) => ({ params: { slug: story.slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug

  const query = gql`
    query Stories($slug: String!) {
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

  const data = await client.request(query, { slug })
  if (!data.story) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      story: { ...data.story },
      data,
      revalidate: 60 * 60,
    },
  }
}

export default function Story({ story, data }) {
  console.log(data)
  return (
    <Layout
      data={{
        header: data.header,
        footer: data.footer,
      }}
    >
      <Box w="full">
        <Text>{story.title}</Text>
        <Text>{story.author.name}</Text>
      </Box>
    </Layout>
  )
}

Story.propTypes = {
  data: PropTypes.shape({
    footer: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired,
  }),
  story: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
  }),
}
