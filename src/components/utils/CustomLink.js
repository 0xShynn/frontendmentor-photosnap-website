import { Box, Flex, Link } from '@chakra-ui/layout'
import NextLink from 'next/link'
import PropTypes from 'prop-types'

import Arrow from '../../assets/arrow'

const CustomLink = (props) => {
  const { href, variant, arrow, arrowMargin, ...rest } = props
  return (
    <NextLink href={href} passHref>
      <Link variant={variant} {...rest}>
        <Flex
          direction="row"
          display="flex"
          justify="center"
          align="center"
          sx={{
            '&:hover > .arrow': {
              transform: 'translateX(5px)',
              transition: 'transform 125ms',
            },
          }}
        >
          <Box className="child" mx="auto">
            {props.children}
          </Box>
          {arrow && (
            <Box
              w="42px"
              ml={!arrowMargin ? 3 : arrowMargin}
              pt="1px"
              className="arrow"
              transition="transform 350ms"
              willChange="tranform"
            >
              <Arrow />
            </Box>
          )}
        </Flex>
      </Link>
    </NextLink>
  )
}

CustomLink.propTypes = {
  arrow: PropTypes.bool,
  arrowMargin: PropTypes.number,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default CustomLink
