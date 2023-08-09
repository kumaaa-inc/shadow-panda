import { cx, css } from '@shadow-panda/styled-system/css'
import { lead } from '@shadow-panda/styled-system/recipes'

export function Lead({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <p
      className={cx(
        lead(),
        css({ display: 'block', fontSize: 'lg' }),
        className,
      )}
    >
      {children}
    </p>
  )
}
