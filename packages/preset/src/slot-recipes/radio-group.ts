import { defineSlotRecipe } from '@pandacss/dev'

export const radioGroup = defineSlotRecipe({
  className: 'radioGroup',
  description: 'Styles for the RadioGroup component',
  slots: ['root', 'item', 'indicator', 'icon'],
  base: {
    root: {
      display: 'grid',
      gap: '2',
    },
    item: {
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
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      h: '2.5',
      w: '2.5',
      fill: 'current',
      color: 'current',
    },
  },
})
