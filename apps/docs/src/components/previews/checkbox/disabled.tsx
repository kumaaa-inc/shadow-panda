import { Flex } from '@shadow-panda/styled-system/jsx'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export default function Example() {
  return (
    <Flex alignItems="center" gap="2">
      <Checkbox id="terms2" disabled />
      <Label htmlFor="terms2">Accept terms and conditions</Label>
    </Flex>
  )
}
