import { css } from '@shadow-panda/styled-system/css'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export default function Example() {
  return (
    <div className={css({ display: 'flex', alignItems: 'center', spaceX: '2' })}>
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}
