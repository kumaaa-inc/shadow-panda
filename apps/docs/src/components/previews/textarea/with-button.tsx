import { Grid } from '@shadow-panda/styled-system/jsx'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function Example() {
  return (
    <Grid w="full" gap="2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </Grid>
  )
}
