import * as React from 'react'
import { css, cx } from '@shadow-panda/styled-system/css'

export type StepsProps = React.ComponentProps<'div'>

export const Steps = ({ children, className, ...props }: StepsProps) => {
  return (
    <div
      className={cx(
        css({
          ml: '4',
          mb: '12',
          borderLeft: 'base',
          pl: '6',
          counterReset: 'step',

          '& h3': {
            counterIncrement: 'step',

            _before: {
              content: 'counter(step)',
              position: 'absolute',
              w: '10',
              h: '10',
              borderWidth: '8px',
              borderStyle: 'solid',
              borderColor: 'background',
              rounded: 'full',
              bg: 'muted',
              color: 'muted.foreground',
              textStyle: 'md',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: '1',
              textAlign: 'center',
              mt: '-4px',
              ml: '-11',
            },
          },
        }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
