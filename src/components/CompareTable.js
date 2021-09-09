import { Fragment } from 'react'

import { CheckIcon } from '@chakra-ui/icons'
import { Flex, Heading, Box } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/table'
import PropTypes from 'prop-types'

const CompareTable = ({ data, title, pricingEnum }) => {
  const variant = useBreakpointValue({ base: 'sm', md: 'md' })
  return (
    <Flex
      align="center"
      px="10"
      pb={{ base: 12, sm: 16, md: 28, xl: 36 }}
      direction="column"
    >
      <Heading
        as="h3"
        variant="h1"
        mb="10"
        display={{ base: 'none', md: 'block' }}
      >
        Compare
      </Heading>
      <Table
        variant="simple"
        maxW={{ base: '400px', md: '730px' }}
        size={variant}
      >
        <Thead
          sx={{
            Th: {
              color: 'primary.pureblack',
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            },
          }}
        >
          <Tr>
            <Th
              py="5"
              px={{ base: 0, md: 6 }}
              borderBottomColor="primary.pureblack"
            >
              {title}
            </Th>

            {pricingEnum.map((value, index) => (
              <Th
                py="5"
                key={index}
                textAlign="center"
                display={{ base: 'none', md: 'table-cell' }}
                borderBottomColor="primary.pureblack"
              >
                {value.name}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => {
            const basicOption = item.itemOption.find(
              (option) => option === 'Basic'
            )
            const proOption = item.itemOption.find((option) => option === 'Pro')
            const businessOption = item.itemOption.find(
              (option) => option === 'Business'
            )

            const basicCell = basicOption && <CheckIcon />
            const proCell = proOption && <CheckIcon />
            const businessCell = businessOption && <CheckIcon />

            return (
              <Fragment key={index}>
                <Tr key={index} display={{ base: 'none', md: 'table-row' }}>
                  <Td>
                    <Heading as="p" variant="h4">
                      {item.itemTitle}
                    </Heading>
                  </Td>
                  <Td textAlign="center">{basicCell}</Td>
                  <Td textAlign="center">{proCell}</Td>
                  <Td textAlign="center">{businessCell}</Td>
                </Tr>

                <Tr display={{ base: 'table-row', md: 'none' }}>
                  <Td py="5" px="0">
                    <Heading as="p" variant="h4" mb="4">
                      {item.itemTitle}
                    </Heading>
                    <Flex justify="space-between">
                      <Box mb="2">
                        <Heading as="h4" variant="h5" color="gray.600" mb="1">
                          Basic
                        </Heading>
                        {basicCell}
                      </Box>
                      <Box mb="2">
                        <Heading as="h4" variant="h5" color="gray.600" mb="1">
                          Pro
                        </Heading>
                        {proCell}
                      </Box>
                      <Box mb="2">
                        <Heading as="h4" variant="h5" color="gray.600" mb="1">
                          Business
                        </Heading>
                        {businessCell}
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
              </Fragment>
            )
          })}
        </Tbody>
      </Table>
    </Flex>
  )
}

CompareTable.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  pricingEnum: PropTypes.array.isRequired,
}

export default CompareTable
