/* eslint-disable react/jsx-key */
import Icon from '@chakra-ui/icon'
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/layout'

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
    <Box role="contentinfo" bg="primary.pureblack" p="16">
      <Flex direction="column" align="center" justify="center">
        <Box w="170px" mb="10">
          <PhotoSnapLogo color="primary.purewhite" />
        </Box>

        <HStack spacing="4" mb="12">
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

        <VStack spacing="4" mb="12">
          {navLinks.map((link, index) => (
            <CustomLink key={index} href={link.url} color="white">
              {link.label}
            </CustomLink>
          ))}
        </VStack>

        <CustomLink href="/" variant="dark" arrow="true" my="6" p="2">
          Get an invite
        </CustomLink>

        <Text color="primary.lightgrey">
          Copyright 2019. All Rights Reserved
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
