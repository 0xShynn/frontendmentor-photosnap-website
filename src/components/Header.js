import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Divider, Flex, HStack, VStack } from '@chakra-ui/layout'

import PhotoSnapLogo from '../assets/brand/PhotosnapLogo'
import CloseIcon from '../assets/ui/CloseIcon'
import HamburgerMenuIcon from '../assets/ui/HamburgerMenuIcon'

import CustomLink from './utils/CustomLink'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navMenuSharedStyling = { fontSize: '15px', letterSpacing: '2.5px' }

  return (
    <Box bg="white" w="full">
      <Flex
        justify="space-between"
        align="center"
        maxW="1110px"
        mx="auto"
        py="4"
        px="4"
        boxSizing="content-box"
        pos="relative"
      >
        <CustomLink href="/">
          <Box w="170px">
            <PhotoSnapLogo />
          </Box>
        </CustomLink>

        <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>
          <CustomLink href="/">Stories</CustomLink>
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
            boxSize="10"
            onClick={isOpen ? onClose : onOpen}
            icon={
              isOpen ? (
                <CloseIcon color="primary.pureblack" />
              ) : (
                <HamburgerMenuIcon color="primary.pureblack" />
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
              <CustomLink href="/" {...navMenuSharedStyling}>
                Stories
              </CustomLink>
              <CustomLink href="/" {...navMenuSharedStyling}>
                Features
              </CustomLink>
              <CustomLink href="/" {...navMenuSharedStyling}>
                Pricing
              </CustomLink>
              <Divider borderColor="primary.pureblack" opacity="0.25" />
              <CustomLink
                href="/"
                variant="lightBtn"
                w="full"
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
