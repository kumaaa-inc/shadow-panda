import { css } from '@shadow-panda/styled-system/css'
import { Separator } from '@/components/ui/separator'

export default function Example() {
  return (
    <div>
      <div className={css({ spaceY: '1' })}>
        <h4
          className={css({
            textStyle: 'sm',
            fontWeight: 'medium',
            leading: 'none',
          })}
        >
          Radix Primitives
        </h4>
        <p
          className={css({
            textStyle: 'sm',
            color: 'muted.foreground',
          })}
        >
          An open-source UI component library.
        </p>
      </div>
      <Separator className={css({ my: '4' })} />
      <div
        className={css({
          display: 'flex',
          h: '5',
          alignItems: 'center',
          spaceX: '4',
          textStyle: 'sm',
        })}
      >
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}
