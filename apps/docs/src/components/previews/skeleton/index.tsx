import { Flex } from '@shadow-panda/styled-system/jsx'
import { Skeleton } from '@/components/ui/skeleton'

export default function Example() {
  return (
    <Flex align="center" gap="4">
      <Skeleton h="12" w="12" rounded="full" />
      <Flex direction="column" gap="2">
        <Skeleton h="4" w="250px" />
        <Skeleton h="4" w="200px" />
      </Flex>
    </Flex>
  )
}
