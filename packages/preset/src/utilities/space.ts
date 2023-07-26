import type { UtilityConfig } from '@pandacss/types'

export const space: UtilityConfig = {
  spaceY: {
    className: 'space_y',
    transform: (value: string) => {
      return {
        '& > * + *': {
          marginTop: value,
        },
      }
    },
    values: 'spacing',
  },
  spaceX: {
    className: 'space_x',
    transform: (value: string) => {
      return {
        '& > * + *': {
          marginLeft: value,
        },
      }
    },
    values: 'spacing',
  },
}
