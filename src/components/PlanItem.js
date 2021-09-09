import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import PropTypes from 'prop-types'

const PlanItem = ({
  title,
  subtitle,
  pricePerMonth,
  pricePerYear,
  isPlanYearly,
}) => {
  return (
    <Flex
      bg="#F5F5F5"
      px="8"
      py="8"
      direction="column"
      align="center"
      justify="center"
      textAlign="center"
    >
      <Heading as="h2" variant="h2" mb="3" mt="4">
        {title}
      </Heading>
      <Text mb="8" maxW="270px">
        {subtitle}
      </Text>
      <Box mb="8">
        <Heading as="p" variant="h1" fontSize="40px">
          ${isPlanYearly ? pricePerYear : pricePerMonth.toFixed(2)}
        </Heading>
        <Text>{isPlanYearly ? 'per year' : 'per month'}</Text>
      </Box>
      <Button variant="lightBtn" w="full">
        Pick Plan
      </Button>
    </Flex>
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
