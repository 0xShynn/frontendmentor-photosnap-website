import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Divider, Flex, HStack, VStack } from '@chakra-ui/layout'

import PhotoSnapLogo from '../assets/brand/PhotosnapLogo'
import CloseIcon from '../assets/ui/CloseIcon'
import HamburgerMenuIcon from '../assets/ui/HamburgerMenuIcon'
import navLinks from '../constants/navLinks'

import CustomLink from './utils/CustomLink'

const Header = () => {
  const { isOpen, onToggle } = useDisclosure()

  const navMenuSharedStyling = { fontSize: '15px', letterSpacing: '2.5px' }

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
            <PhotoSnapLogo color="primary.pureblack" />
          </Box>
        </CustomLink>

        <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>
          <CustomLink href="/stories">Stories</CustomLink>
          <CustomLink href="/">Features</CustomLink>
          <CustomLink href="/">Pricing</CustomLink>
        </HStack>

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
          display={{ md: 'none' }}
        >
          <Box bg="white" w="full" p="8">
            <VStack spacing="5">
              {navLinks.slice(1).map((link, index) => (
                <CustomLink
                  key={index}
                  href={link.url}
                  {...navMenuSharedStyling}
                >
                  {link.label}
                </CustomLink>
              ))}
              <Divider borderColor="primary.pureblack" opacity="0.25" />
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
        </Box>
      ) : null}
    </Box>
  )
}

export default Header
