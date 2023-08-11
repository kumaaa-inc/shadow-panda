import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function Example() {
  return (
    <div
      className={css({
        display: 'grid',
        w: 'full',
        gap: '2',
      })}
    >
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
