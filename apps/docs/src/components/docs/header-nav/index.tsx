'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { css } from '@shadow-panda/styled-system/css'
import { Icons } from '../icons'

export const HeaderNav = () => {
  const pathname = usePathname()

  return (
    <div
      className={css({
        width: 'full',
        mr: '4',
        display: 'none',
        md: {
          display: 'flex',
        },
      })}
    >
      <Link
        href="/"
        className={css({
          mr: '6',
          display: 'flex',
          alignItems: 'center',
        })}
      >
        <Icons.logoWithText className={css({ h: '6' })} />
        <span className={css({ srOnly: true })}>Shadow Panda</span>
      </Link>
      <nav
        className={css({
          ml: 'auto',
          display: 'none',
          alignItems: 'center',
          spaceX: '6',
          textStyle: 'sm',
          fontWeight: 'medium',
          sm: {
            display: 'flex',
          },
        })}
      >
        <Link
          href="/docs"
          className={css({
            transition: 'colors',
            color: 'foreground',
            opacity: pathname === '/docs' ? '1' : '0.6',

            _hover: {
              opacity: '0.8',
            },
          })}
        >
          Documentation
        </Link>
      </nav>
    </div>
  )
}
