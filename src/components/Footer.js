/* eslint-disable react/jsx-key */
import { Box, Flex, HStack, Link, Stack, Text } from '@chakra-ui/layout'
import NextImage from 'next/image'
import PropTypes from 'prop-types'

import PhotoSnapLogoWhite from '../assets/brand/PhotoSnapLogoWhite'

import CustomLink from './utils/CustomLink'

const Footer = ({ data }) => {
  const navLinks = data?.navigation?.pages ?? []
  const socialLinks = data?.socialLinks ?? []
  const callToAction = data?.link ?? {}

  return (
    <Box
      role="contentinfo"
      bg="primary.pureblack"
      py="16"
      px={{ base: 6, md: 10 }}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'stretch' }}
        justify={{ base: 'center', md: 'space-between' }}
        maxW="container.lg2"
        mx="auto"
      >
        <Flex direction="column" align={{ md: 'flex-start' }}>
          <CustomLink href="/" aria-label="Photosnap Logo">
            <Box w="170px" mb="10">
              <PhotoSnapLogoWhite />
            </Box>
          </CustomLink>

          {socialLinks || navLinks ? (
            <Flex direction={{ base: 'column', md: 'column-reverse' }}>
              {socialLinks ? (
                <HStack spacing="4" mb={{ base: 12, md: 0 }}>
                  {socialLinks.map((icon, index) => (
                    <Link href={icon.url} key={index} cursor="pointer">
                      <Box boxSize="20px">
                        <NextImage
                          src={icon.logo.url}
                          layout="responsive"
                          width={icon.logo.width}
                          height={icon.logo.height}
                          alt={icon.alt}
                        />
                      </Box>
                    </Link>
                  ))}
                </HStack>
              ) : null}

              {navLinks ? (
                <Stack
                  spacing="4"
                  mb={{ base: 12, md: 20 }}
                  direction={{ base: 'column', md: 'row' }}
                  display={{ base: 'flex', xl: 'none' }}
                >
                  {navLinks.map((link, index) => (
                    <CustomLink
                      key={index}
                      href={`/${link.slug === 'home' ? '' : link.slug}`}
                      color="white"
                    >
                      {link.title}
                    </CustomLink>
                  ))}
                </Stack>
              ) : null}
            </Flex>
          ) : null}
        </Flex>

        {navLinks ? (
          <Stack
            spacing="4"
            mb={{ base: 12, md: 20, xl: 0 }}
            direction="column"
            justify="flex-start"
            align="flex-start"
            flex="1"
            display={{ base: 'none', xl: 'flex' }}
            ml="110px"
          >
            {navLinks.map((link, index) => (
              <CustomLink
                key={index}
                href={`/${link.slug === 'home' ? '' : link.slug}`}
                color="white"
              >
                {link.title}
              </CustomLink>
            ))}
          </Stack>
        ) : null}

        <Flex
          direction="column"
          align={{ base: 'center', md: 'flex-end' }}
          justify={{ md: 'space-between' }}
        >
          {callToAction ? (
            <CustomLink
              href={callToAction.href}
              variant="dark"
              arrow={true}
              my={{ base: 6, md: 0 }}
              p={{ base: 2, md: 0 }}
            >
              {callToAction.label}
            </CustomLink>
          ) : null}
          <Text color="primary.lightgrey">
            Copyright 2019. All Rights Reserved
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

Footer.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.object,
    navigation: PropTypes.shape({
      pages: PropTypes.array,
    }),
    socialLinks: PropTypes.array,
  }).isRequired,
}

export default Footer
