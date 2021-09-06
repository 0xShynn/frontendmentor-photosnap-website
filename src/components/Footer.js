/* eslint-disable react/jsx-key */
import Icon from '@chakra-ui/icon'
import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/layout'

import PhotoSnapLogo from '../assets/brand/PhotosnapLogo'
import IconFacebook from '../assets/icons/socials/IconFacebook'
import IconInstagram from '../assets/icons/socials/IconInstagram'
import IconPinterest from '../assets/icons/socials/IconPinterest'
import IconTwitter from '../assets/icons/socials/IconTwitter'
import IconYoutube from '../assets/icons/socials/IconYoutube'
import navLinks from '../constants/navLinks'

import CustomLink from './utils/CustomLink'

const Footer = () => {
  const socialIcons = [
    <IconFacebook />,
    <IconYoutube />,
    <IconTwitter />,
    <IconPinterest />,
    <IconInstagram />,
  ]

  return (
    <Box role="contentinfo" bg="primary.pureblack" py="16" px="6">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'stretch' }}
        justify={{ base: 'center', md: 'space-between' }}
        maxW="1110px"
        mx="auto"
      >
        <Flex direction="column" align={{ md: 'flex-start' }}>
          <CustomLink href="/" aria-label="Photosnap Logo">
            <Box w="170px" mb="10">
              <PhotoSnapLogo color="primary.purewhite" />
            </Box>
          </CustomLink>

          <Flex direction={{ base: 'column', md: 'column-reverse' }}>
            <HStack spacing="4" mb={{ base: 12, md: 0 }}>
              {socialIcons.map((icon, index) => (
                <Icon
                  key={index}
                  boxSize="20px"
                  // width={{ base: '24px', sm: '30px', md: '20px' }}
                  color="white"
                  cursor="pointer"
                  _hover={{ color: 'red.100' }}
                >
                  {icon}
                </Icon>
              ))}
            </HStack>

            <Stack
              spacing="4"
              mb={{ base: 12, md: 20 }}
              direction={{ base: 'column', md: 'row' }}
            >
              {navLinks.map((link, index) => (
                <CustomLink key={index} href={link.url} color="white">
                  {link.label}
                </CustomLink>
              ))}
            </Stack>
          </Flex>
        </Flex>

        <Flex
          direction="column"
          align={{ base: 'center', md: 'flex-end' }}
          justify={{ md: 'space-between' }}
        >
          <CustomLink
            href="/"
            variant="dark"
            arrow="true"
            my={{ base: 6, md: 0 }}
            p={{ base: 2, md: 0 }}
          >
            Get an invite
          </CustomLink>
          <Text color="primary.lightgrey">
            Copyright 2019. All Rights Reserved
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
