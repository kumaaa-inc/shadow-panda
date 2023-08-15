import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { css, cx } from '@shadow-panda/styled-system/css'

export interface CalloutProps {
  className?: string
  emoji?: string
  title?: string
  children?: React.ReactNode
}

export const Callout = ({ className, emoji, title, children }: CalloutProps) => (
  <Alert
    className={cx(
      css({
        '&:has(.emoji)': {
          pl: '11',
        },

        '& > .emoji + div': {
          transform: 'translate(0, -3px)',
        },

        '& > .emoji': {
          position: 'absolute',
          left: '4',
          top: '4',
          color: 'foreground',
          h: '4',
          w: '4',
        },
      }),
      className,
    )}
  >
    {emoji && (
      <div
        className={cx(
          'emoji',
          css({
            h: '4',
            w: '4',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          }),
        )}
      >
        {emoji}
      </div>
    )}
    {title && <AlertTitle>{title}</AlertTitle>}
    {children && <AlertDescription>{children}</AlertDescription>}
  </Alert>
)
