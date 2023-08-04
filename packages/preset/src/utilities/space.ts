import type { UtilityConfig } from '@pandacss/types'

export const space: UtilityConfig = {
  spaceY: {
    className: 'space_y',
    values: 'spacing',
    transform: (value: string) => {
      return {
        '& > * + *': {
          marginTop: value,
        },
      }
    },
  },
  spaceX: {
    className: 'space_x',
    values: 'spacing',
    transform: (value: string) => {
      return {
        '& > * + *': {
          marginLeft: value,
        },
      }
    },
  },
}
