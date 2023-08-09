import * as React from 'react'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { css, cx } from '@shadow-panda/styled-system/css'
import { Button } from '@/components/ui/button'

export const copy = (value: string) => {
  navigator.clipboard.writeText(value)
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cx(
        css({
          position: 'relative',
          zIndex: '10',
          h: '6',
          w: '6',
          color: 'slate.50',
          _hover: {
            color: 'slate.50',
            bg: 'slate.700',
          },
        }),
        className,
      )}
      onClick={() => {
        copy(value)
        setHasCopied(true)
      }}
      {...props}
    >
      <span
        className={css({
          srOnly: true,
        })}
      >
        Copy
      </span>
      {hasCopied ? (
        <CheckIcon className={css({ h: '4', w: '4' })} />
      ) : (
        <CopyIcon className={css({ h: '4', w: '4' })} />
      )}
    </Button>
  )
}
