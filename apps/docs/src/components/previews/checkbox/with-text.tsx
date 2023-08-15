import { Flex } from '@shadow-panda/styled-system/jsx'
import { muted } from '@shadow-panda/styled-system/recipes'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export default function Example() {
  return (
    <Flex alignItems="flex-start" gap="2">
      <Checkbox id="terms1" />

      <Flex flexDirection="column" gap="1.5" leading="none">
        <Label htmlFor="terms1">Accept terms and conditions</Label>
        <p className={muted()}>You agree to our Terms of Service and Privacy Policy.</p>
      </Flex>
    </Flex>
  )
}
