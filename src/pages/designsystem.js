import { Box, Heading, Text, VStack } from '@chakra-ui/layout'

const DesignSystem = () => {
  return (
    <Box p="6" maxW="600px" mx="auto">
      <VStack spacing="6" textAlign="left" align="flex-start">
        <Heading as="h1" variant="h1">
          H1. Create and share your photo stories.
        </Heading>
        <Heading as="h2" variant="h2">
          H2. Basic • Pro • Business
        </Heading>
        <Heading as="h3" variant="h3">
          H3. No Photo Upload Limit
        </Heading>
        <Heading as="h4" variant="h4">
          H4. View the stories
        </Heading>
        <Text>
          Text. We provide design templates to ensure your stories look
          terrific. Easily add photos, text, embed maps and media from other
          networks. Then share your story with everyone.
        </Text>
      </VStack>
    </Box>
  )
}

export default DesignSystem
