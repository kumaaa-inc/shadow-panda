import { defineRecipe } from '@pandacss/dev'

export const label = defineRecipe({
  className: 'label',
  description: 'Styles for the Label component',
  base: {
    textStyle: 'sm',
    leading: 'none',
    fontWeight: 'medium',

    _peerDisabled: {
      cursor: 'not-allowed',
      opacity: '0.7',
    },
  },
})
