import { useState } from 'react'

import { Box, Heading, Stack } from '@chakra-ui/layout'
import { Switch } from '@chakra-ui/switch'
import PropTypes from 'prop-types'

import PlanItem from './PlanItem'

const PlanForm = ({ data }) => {
  const monthly = 'Monthly',
    yearly = 'Yearly'
  const [planPeriodicity, setPlanPeriodicity] = useState(monthly)
  const isPlanYearly = planPeriodicity === yearly

  const onSubmit = () => {
    setPlanPeriodicity((prev) => (prev === monthly ? yearly : monthly))
  }

  return (
    <Box py="16" px="10">
      <Stack direction="row" spacing="6" px="6" justify="center" mb="8">
        <Heading
          as="h3"
          variant="h3"
          color={isPlanYearly ? '#808080' : 'primary.pureblack'}
        >
          Monthly
        </Heading>
        <Switch onChange={onSubmit} colorScheme="" size="lg" />
        <Heading
          as="h3"
          variant="h3"
          color={isPlanYearly ? 'primary.pureblack' : '#808080'}
        >
          Yearly
        </Heading>
      </Stack>

      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing="6"
        justify="center"
      >
        {data.map((plan, index) => (
          <PlanItem
            key={index}
            title={plan.title}
            subtitle={plan.subtitle}
            pricePerMonth={plan.pricePerMonth}
            pricePerYear={plan.pricePerYear}
            isPlanYearly={isPlanYearly}
          />
        ))}
      </Stack>
    </Box>
  )
}

PlanForm.propTypes = {
  data: PropTypes.array.isRequired,
}

export default PlanForm
