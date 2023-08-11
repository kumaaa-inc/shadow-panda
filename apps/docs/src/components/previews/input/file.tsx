import { css } from '@shadow-panda/styled-system/css'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function Example() {
  return (
    <div
      className={css({
        display: 'grid',
        w: 'full',
        maxW: 'sm',
        alignItems: 'center',
        gap: '1.5',
      })}
    >
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
}
