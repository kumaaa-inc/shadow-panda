import Link from 'next/link'
import { css } from '@shadow-panda/styled-system/css'
import { Icons } from '../icons'

export const MobileHeaderNav = () => {
  return (
    <div
      className={css({
        mr: '4',
        display: 'flex',
        md: {
          display: 'none',
        },
      })}
    >
      <Link
        href="/"
        className={css({
          display: 'flex',
          alignItems: 'center',
        })}
      >
        <Icons.logo className={css({ h: '6', w: '6' })} />
        <span className={css({ srOnly: true })}>Shadow Panda</span>
      </Link>
    </div>
  )
}
