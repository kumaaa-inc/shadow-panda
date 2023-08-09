import Link from 'next/link'
import { css } from '@shadow-panda/styled-system/css'
import { link } from '@shadow-panda/styled-system/recipes'

export const Footer = () => {
  return (
    <footer
      className={css({
        w: 'full',
        color: 'muted.foreground',
        borderTop: 'base',
      })}
    >
      <div
        className={css({
          container: true,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '4',
          px: '2',
          md: {
            h: '24',
            flexDirection: 'row',
          },
        })}
      >
        <span
          className={css({
            ml: 'auto',
            textStyle: 'sm',
          })}
        >
          Made with ❤️ by{' '}
          <Link className={link()} href="https://twitter.com/nanopx">
            @nanopx
          </Link>
        </span>
      </div>
    </footer>
  )
}
