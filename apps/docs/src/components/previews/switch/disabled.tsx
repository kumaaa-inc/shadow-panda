import { Grid, Flex } from '@shadow-panda/styled-system/jsx'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export default function Example() {
  return (
    <Grid gap="2.5">
      <Flex alignItems="center" gap="2">
        <Switch id="airplane-mode-2" disabled />
        <Label htmlFor="airplane-mode-2">Airplane Mode</Label>
      </Flex>
      <Flex alignItems="center" gap="2">
        <Switch id="airplane-mode-3" checked disabled />
        <Label htmlFor="airplane-mode-3">Airplane Mode</Label>
      </Flex>
    </Grid>
  )
}
