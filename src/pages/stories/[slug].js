import { Box, Text } from '@chakra-ui/layout'
import PropTypes from 'prop-types'

import Layout from '../../components/Layout'
import { getStoryPage } from '../../graphql/queries/pages/getStoryPage'
import { getStoriesPaths } from '../../graphql/queries/paths/getStoriesPaths'

export const getStaticPaths = async () => {
  const { stories } = await getStoriesPaths()

  return {
    paths: stories.map((story) => ({ params: { slug: story.slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug

  const { story, header, footer } = await getStoryPage({ slug })

  if (!story) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      story: { ...story },
      header,
      footer,
      revalidate: 60 * 60,
    },
  }
}

export default function Story({ story, header, footer }) {
  return (
    <Layout
      data={{
        header,
        footer,
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
  footer: PropTypes.object.isRequired,
  header: PropTypes.object.isRequired,
  story: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
  }),
}
