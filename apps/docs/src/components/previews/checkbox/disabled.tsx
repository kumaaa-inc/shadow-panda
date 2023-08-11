import { css } from '@shadow-panda/styled-system/css'
import { muted } from '@shadow-panda/styled-system/recipes'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export default function Example() {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'flex-start',
        spaceX: '2',
      })}
    >
      <Checkbox id="terms2" />
      <div
        className={css({
          display: 'grid',
          gap: '1.5',
          leading: 'none',
        })}
      >
        <Label htmlFor="terms2">Accept terms and conditions</Label>
        <p className={muted()}>
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}
