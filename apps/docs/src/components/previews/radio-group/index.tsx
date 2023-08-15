import { Flex } from '@shadow-panda/styled-system/jsx'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function Example() {
  return (
    <RadioGroup defaultValue="comfortable">
      <Flex alignItems="center" spaceX="2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </Flex>
      <Flex alignItems="center" spaceX="2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </Flex>
      <Flex alignItems="center" spaceX="2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </Flex>
    </RadioGroup>
  )
}
