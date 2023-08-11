import { Loader2 } from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'

export const LoadingText = () => (
  <div
    className={css({
      textStyle: 'sm',
      color: 'muted.foreground',
      display: 'flex',
      alignItems: 'center',
    })}
  >
    <Loader2
      className={css({
        mr: '2',
        height: '4',
        width: '4',
        animation: 'spin',
      })}
    />
    Loading...
  </div>
)
