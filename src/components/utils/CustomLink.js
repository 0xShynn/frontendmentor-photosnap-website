import { Box, Link } from '@chakra-ui/layout'
import NextLink from 'next/link'

import Arrow from '../../assets/arrow'

const CustomLink = (props) => {
  const { href, variant, arrow, arrowmargin } = props
  return (
    <NextLink href={href} passHref>
      <Link
        variant={variant}
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
        {...props}
      >
        <Box className="child">{props.children}</Box>
        {arrow && (
          <Box
            w="42px"
            ml={!arrowmargin ? 3 : arrowmargin}
            pt="1px"
            className="arrow"
            transition="transform 350ms"
            willChange="tranform"
          >
            <Arrow />
          </Box>
        )}
      </Link>
    </NextLink>
  )
}

export default CustomLink
