import { css } from '@shadow-panda/styled-system/css'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export default function Example() {
  return (
    <div
      className={css({
        display: 'grid',
        gap: '2.5',
      })}
    >
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          spaceX: '2',
        })}
      >
        <Switch id="airplane-mode-2" disabled />
        <Label htmlFor="airplane-mode-2">Airplane Mode</Label>
      </div>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          spaceX: '2',
        })}
      >
        <Switch id="airplane-mode-3" checked disabled />
        <Label htmlFor="airplane-mode-3">Airplane Mode</Label>
      </div>
    </div>
  )
}
