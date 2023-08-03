import { defineRecipe } from '@pandacss/dev'

export const radioGroup = defineRecipe({
  name: 'radioGroup',
  description: 'Styles for the RadioGroup component',
  base: {
    display: 'grid',
    gap: '2',
  },
})

export const radioGroupItem = defineRecipe({
  name: 'radioGroupItem',
  description: 'Styles for the RadioGroupItem component',
  base: {
    aspectRatio: 'square',
    h: '4',
    w: '4',
    rounded: 'full',
    border: 'primary',
    color: 'primary',
    focusRingOffsetColor: 'background',

    _focusVisible: {
      outline: '2px solid transparent',
      outlineOffset: '2px',
      focusRingWidth: '2',
      focusRingColor: 'ring',
      focusRingOffsetWidth: '2',
    },

    _disabled: {
      cursor: 'not-allowed',
      opacity: '0.5',
    },
  },
})

export const radioGroupItemIndicator = defineRecipe({
  name: 'radioGroupItemIndicator',
  description: 'Styles for the RadioGroupItem indicator',
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
