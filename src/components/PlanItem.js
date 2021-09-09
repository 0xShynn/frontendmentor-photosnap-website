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

  return (
    <Box>
      {isProPlan ? (
        <Box
          h="6px"
          bgGradient={photoSnapGradient}
          w="full"
          display={{ base: 'block', md: 'none' }}
        />
      ) : null}
      <Flex
        bg={isProPlan ? 'primary.pureblack' : '#F5F5F5'}
        px="8"
        py="8"
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
      >
        <Heading as="h2" variant="h2" mb="3" mt="4" color={headingColor}>
          {title}
        </Heading>
        <Text mb="8" maxW="270px" color={textColor}>
          {subtitle}
        </Text>
        <Box mb="8">
          <Heading as="p" variant="h1" fontSize="40px" color={headingColor}>
            ${isPlanYearly ? pricePerYear : pricePerMonth.toFixed(2)}
          </Heading>
          <Text color={textColor}>
            {isPlanYearly ? 'per year' : 'per month'}
          </Text>
        </Box>
        <Button variant={isProPlan ? 'darkBtn' : 'lightBtn'} w="full">
          Pick Plan
        </Button>
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
