import { cx, css } from '@shadow-panda/styled-system/css'
import { lead } from '@shadow-panda/styled-system/recipes'

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className={cx(lead(), css({ display: 'block', fontSize: 'lg' }))}>
      {children}
    </p>
  )
}
