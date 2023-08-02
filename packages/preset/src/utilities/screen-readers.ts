import type { UtilityConfig } from '@pandacss/types'

export const screenReaders: UtilityConfig = {
  srOnly: {
    className: 'sr_only',
    values: { type: 'boolean' },
    transform: (value: boolean) => {
      if (!value) {
        return {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: 0,
          margin: 0,
          overflow: 'visible',
          clip: 'auto',
          whiteSpace: 'normal',
        }
      }

      return {
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: 0,
      }
    },
  },
}
