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
          maxW: '7xl',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1',
          px: '4',
          h: '16',
          mx: 'auto',
          textStyle: 'sm',
          flexDirection: 'column-reverse',
          md: {
            h: '24',
            justifyContent: 'space-between',
            flexDirection: 'row',
          },
        })}
      >
        <span>Copyright &copy; {new Date().getFullYear()}</span>
        <span>
          Made with ❤️ by{' '}
          <Link className={link()} href="https://twitter.com/nanopx">
            @nanopx
          </Link>
        </span>
      </div>
    </footer>
  )
}
