import { defineRecipe } from '@pandacss/dev'

export const input = defineRecipe({
  name: 'input',
  description: 'Styles for the Input component',
  base: {
    display: 'flex',
    height: '10',
    width: 'full',
    rounded: 'md',
    border: 'input',
    bg: 'background',
    px: '3',
    py: '2',
    fontSize: 'sm',
    focusRingOffsetColor: 'background',

    _file: {
      border: 'none',
      bg: 'transparent',
      fontSize: 'sm',
      fontWeight: 'medium',
    },

    _placeholder: {
      color: 'muted.foreground',
    },

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
