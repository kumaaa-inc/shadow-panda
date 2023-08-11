import { css } from '@shadow-panda/styled-system/css'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export default function Example() {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        spaceX: '2',
      })}
    >
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
