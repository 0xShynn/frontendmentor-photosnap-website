import { CheckIcon } from '@chakra-ui/icons'
import { Flex, Heading } from '@chakra-ui/layout'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/table'
import PropTypes from 'prop-types'

const CompareTable = ({ data, title }) => {
  return (
    <Flex align="center" p="10" direction="column">
      <Heading as="h2" variant="h1" mb="10">
        Compare
      </Heading>
      <Table variant="simple" maxW="730px">
        <Thead
          sx={{
            Th: {
              color: 'primary.pureblack',
            },
          }}
        >
          <Tr>
            <Th>{title}</Th>
            <Th textAlign="center">Basic</Th>
            <Th textAlign="center">Pro</Th>
            <Th textAlign="center">Business</Th>
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
            return (
              <Tr key={index}>
                <Td>
                  <Heading as="p" variant="h4">
                    {item.itemTitle}
                  </Heading>
                </Td>
                <Td textAlign="center">
                  {typeof basicOption !== 'undefined' ? <CheckIcon /> : ''}
                </Td>
                <Td textAlign="center">
                  {typeof proOption !== 'undefined' ? <CheckIcon /> : ''}
                </Td>
                <Td textAlign="center">
                  {typeof businessOption !== 'undefined' ? <CheckIcon /> : ''}
                </Td>
              </Tr>
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
}

export default CompareTable
