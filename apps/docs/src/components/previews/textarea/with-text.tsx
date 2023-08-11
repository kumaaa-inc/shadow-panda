import { css } from '@shadow-panda/styled-system/css'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Example() {
  return (
    <div
      className={css({
        display: 'grid',
        w: 'full',
        gap: '1.5',
      })}
    >
      <Label htmlFor="message-2">Email</Label>
      <Textarea id="message-2" placeholder="Type your message here." />
      <p className={css({ textStyle: 'sm', color: 'muted.foreground' })}>
        Your message will be copied to the support team.
      </p>
    </div>
  )
}
