import { defineRecipe } from '@pandacss/dev'

export const label = defineRecipe({
  name: 'label',
  description: 'Styles for the Label component',
  base: {
    fontSize: 'sm',
    leading: 'none',
    fontWeight: 'medium',

    _peerDisabled: {
      cursor: 'not-allowed',
      opacity: '0.7',
    },
  },
})
