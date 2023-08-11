import { defineRecipe } from '@pandacss/dev'

export const radioGroup = defineRecipe({
  className: 'radioGroup',
  description: 'Styles for the RadioGroup component',
  base: {
    display: 'grid',
    gap: '2',
  },
})

export const radioGroupItem = defineRecipe({
  className: 'radioGroupItem',
  description: 'Styles for the RadioGroupItem component',
  base: {
    aspectRatio: 'square',
    h: '4',
    w: '4',
    rounded: 'full',
    border: 'primary',
    color: 'primary',
    cursor: 'pointer',
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
  className: 'radioGroupItemIndicator',
  description: 'Styles for the RadioGroupItem indicator',
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
