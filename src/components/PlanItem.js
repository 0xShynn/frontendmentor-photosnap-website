import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import PropTypes from 'prop-types'

import { photoSnapGradient } from '../constants/styleToken'

const PlanItem = ({
  title,
  subtitle,
  pricePerMonth,
  pricePerYear,
  isPlanYearly,
}) => {
  const isProPlan = title === 'Pro'
  const headingColor = isProPlan ? 'primary.purewhite' : 'primary.pureblack'
  const textColor = isProPlan ? 'primary.purewhite' : 'gray.700'

  const PriceBox = () => (
    <Box>
      <Heading as="p" variant="h1" fontSize="40px" color={headingColor}>
        ${isPlanYearly ? pricePerYear : pricePerMonth}
      </Heading>
      <Text color={textColor}>{isPlanYearly ? 'per year' : 'per month'}</Text>
    </Box>
  )

  return (
    <Box pos="relative">
      {isProPlan ? (
        <>
          <Box
            h="6px"
            bgGradient={photoSnapGradient}
            w="full"
            display={{ base: 'block', md: 'none', lg: 'block' }}
            pos="absolute"
          />
          <Box
            h="full"
            bgGradient={photoSnapGradient}
            w="6px"
            display={{ base: 'none', md: 'block', lg: 'none' }}
            pos="absolute"
          />
        </>
      ) : null}
      <Flex
        bg={isProPlan ? 'primary.pureblack' : '#F5F5F5'}
        py={{ base: 8, lg: isProPlan ? 16 : 10 }}
        px={{ base: 8, lg: 10 }}
        mt={{ lg: !isProPlan ? 6 : 0 }}
        direction={{ base: 'column', md: 'row', lg: 'column' }}
        align={{ base: 'center', md: 'flex-start' }}
        justify={{ base: 'center', md: 'space-between' }}
        textAlign={{ base: 'center', md: 'left', lg: 'center' }}
      >
        <Flex flex="1" maxW="270px" direction="column">
          <Heading
            as="h2"
            variant="h2"
            mb="4"
            mt={{ base: 4, md: 0 }}
            color={headingColor}
          >
            {title}
          </Heading>
          <Text mb="8" maxW="270px" color={textColor} flex="1">
            {subtitle}
          </Text>
          <Box mb="8" display={{ base: 'block', md: 'none', lg: 'block' }}>
            <PriceBox />
          </Box>
          <Button variant={isProPlan ? 'darkBtn' : 'lightBtn'} w="full">
            Pick Plan
          </Button>
        </Flex>

        <Box
          mb="8"
          display={{ base: 'none', md: 'block', lg: 'none' }}
          textAlign="right"
        >
          <PriceBox />
        </Box>
      </Flex>
    </Box>
  )
}

PlanItem.propTypes = {
  pricePerMonth: PropTypes.number.isRequired,
  pricePerYear: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isPlanYearly: PropTypes.bool.isRequired,
}

export default PlanItem
