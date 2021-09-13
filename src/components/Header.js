import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Divider, Flex, HStack, VStack } from '@chakra-ui/layout'
import PropTypes from 'prop-types'

import PhotoSnapLogoBlack from '../assets/brand/PhotoSnapLogoBlack'
import CloseIcon from '../assets/ui/CloseIcon'
import HamburgerMenuIcon from '../assets/ui/HamburgerMenuIcon'

import CustomLink from './utils/CustomLink'

const Header = ({ data }) => {
  const { isOpen, onToggle } = useDisclosure()

  const navMenuSharedStyling = { fontSize: '15px', letterSpacing: '2.5px' }

  const navLinks = data?.navigation?.pages ?? []

  return (
    <Box bg="white" w="full">
      <Flex
        justify="space-between"
        align="center"
        maxW="container.lg2"
        mx="auto"
        py="4"
        px="6"
        boxSizing="content-box"
        pos="relative"
      >
        <CustomLink href="/" aria-label="Photosnap Logo">
          <Box w="170px">
            <PhotoSnapLogoBlack />
          </Box>
        </CustomLink>

        {navLinks.length > 0 ? (
          <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => (
              <CustomLink href={`/${link.slug}`} key={link.slug}>
                {link.title}
              </CustomLink>
            ))}
          </HStack>
        ) : null}

        <Box display={{ base: 'none', md: 'flex' }}>
          <CustomLink href="/" variant="lightBtn">
            Get an invite
          </CustomLink>
        </Box>

        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            colorScheme="whiteAlpha"
            aria-label="Open Menu"
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon color="primary.pureblack" boxSize="16px" />
              ) : (
                <HamburgerMenuIcon color="primary.pureblack" boxSize="20px" />
              )
            }
            zIndex="overlay"
          />
        </Box>
      </Flex>
      {isOpen ? (
        <Box
          w="full"
          bg="rgba(0,0,0,0.5)"
          h="100vh"
          pos="absolute"
          zIndex="overlay"
          display={{ md: 'none' }}
        >
          {navLinks.length > 0 ? (
            <Box bg="white" w="full" p="8">
              <VStack spacing="5">
                {navLinks.map((link) => (
                  <CustomLink
                    key={link.slug}
                    href={link.slug}
                    {...navMenuSharedStyling}
                  >
                    {link.title}
                  </CustomLink>
                ))}
                <Divider
                  borderColor="primary.pureblack"
                  opacity="0.25"
                  role="presentation"
                />
                <CustomLink
                  href="/"
                  variant="lightBtn"
                  w={{ base: 'full', sm: '300px' }}
                  py="4"
                  {...navMenuSharedStyling}
                >
                  Get an invite
                </CustomLink>
              </VStack>
            </Box>
          ) : null}
        </Box>
      ) : null}
    </Box>
  )
}

Header.propTypes = {
  data: PropTypes.shape({
    navigation: PropTypes.shape({
      pages: PropTypes.array,
    }),
  }).isRequired,
}

export default Header
