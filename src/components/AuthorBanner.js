import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const AuthorBanner = () => {
  const authorLinkStyle = {
    fontWeight: 'semibold',
    letterSpacing: '0',
    textTransform: 'unset',
    fontSize: 'unset',
  }

  return (
    <Flex justify="center" bg="secondary.blackdust">
      <Flex py="6" px="6" textAlign="center" align="center" rounded="lg">
        <Text color="white" mt="0.5">
          Code challenge by{' '}
          <Link
            href="https://www.frontendmentor.io"
            target="_blank"
            {...authorLinkStyle}
            _hover={{ textDecoration: 'underline' }}
          >
            Frontend Mentor
          </Link>{' '}
          | Made by{' '}
          <Link
            href="https://anhek.dev"
            target="_blank"
            {...authorLinkStyle}
            _hover={{ textDecoration: 'underline' }}
          >
            Antonin Nhek
          </Link>
        </Text>
        <Link
          href="https://github.com/anhek/frontendmentor-designo-website"
          target="_blank"
          aria-label="Link to the Github repo of the code challenge"
          ml="4"
        >
          <Icon
            as={FaGithub}
            boxSize="8"
            color="white"
            transition="0.2s"
            _hover={{ color: 'primary.peach' }}
          />
        </Link>
      </Flex>
    </Flex>
  )
}

export default AuthorBanner
