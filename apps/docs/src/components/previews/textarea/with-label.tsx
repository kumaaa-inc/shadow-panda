import { Grid } from '@shadow-panda/styled-system/jsx'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Example() {
  return (
    <Grid w="full" gap="1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </Grid>
  )
}
