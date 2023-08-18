import * as React from 'react'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { css } from '@shadow-panda/styled-system/css'
import { icon } from '@shadow-panda/styled-system/recipes'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button, type ButtonProps } from '@/components/ui/button'

export const copy = (value: string) => {
  navigator.clipboard.writeText(value)
}

export interface CopyButtonProps extends ButtonProps {
  className?: string
  value: string
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className={className}
            zIndex="10"
            h="7"
            w="7"
            color="foreground"
            bga="background/40"
            _hover={{
              color: 'foreground',
              bga: 'background/80',
            }}
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
            {hasCopied ? <CheckIcon className={icon()} /> : <CopyIcon className={icon()} />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
