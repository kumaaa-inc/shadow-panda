import { Grid } from '@shadow-panda/styled-system/jsx'
import { muted } from '@shadow-panda/styled-system/recipes'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Example() {
  return (
    <Grid w="full" gap="1.5">
      <Label htmlFor="message-2">Email</Label>
      <Textarea id="message-2" placeholder="Type your message here." />
      <p className={muted()}>Your message will be copied to the support team.</p>
    </Grid>
  )
}
