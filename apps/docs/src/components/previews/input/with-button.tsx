import { css } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Example() {
  return (
    <div
      className={css({
        display: 'flex',
        w: 'full',
        maxW: 'sm',
        alignItems: 'center',
        spaceX: '2',
      })}
    >
      <Input type="email" id="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  )
}
