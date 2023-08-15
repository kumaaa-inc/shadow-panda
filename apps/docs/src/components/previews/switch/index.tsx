import { Flex } from '@shadow-panda/styled-system/jsx'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export default function Example() {
  return (
    <Flex alignItems="center" gap="2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </Flex>
  )
}
