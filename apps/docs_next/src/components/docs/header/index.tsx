import { css } from '@shadow-panda/styled-system/css'

export const Header = () => {
  return (
    <header
      className={css({
        position: 'sticky',
        top: '0',
        zIndex: 50,
        w: 'full',
        borderBottom: 'base',
        bga: 'background/95',
        backdropBlur: 'md',
      })}
    >
      <div
        className={css({
          container: true,
          display: 'flex',
          alignItems: 'center',
          h: '14',
          mx: 'auto',
          px: '2',
        })}
      >
        header
      </div>
    </header>
  )
}
