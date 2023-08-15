import { defineSlotRecipe } from '@pandacss/dev'

export const tabs = defineSlotRecipe({
  className: 'tabs',
  description: 'Styles for the Tabs component',
  slots: ['root', 'list', 'trigger', 'content'],
  base: {
    list: {
      display: 'inline-flex',
      h: '10',
      alignItems: 'center',
      justifyContent: 'center',
      rounded: 'md',
      bg: 'muted',
      p: '1',
      color: 'muted.foreground',
    },
    trigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      rounded: 'sm',
      px: '3',
      py: '1.5',
      textStyle: 'sm',
      fontWeight: 'medium',
      transition: 'all',
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
        pointerEvents: 'none',
        opacity: '50%',
      },

      '&[data-state=active]': {
        bg: 'background',
        color: 'foreground',
        shadow: 'sm',
      },
    },
    content: {
      mt: '2',
      focusRingOffsetColor: 'background',

      _focusVisible: {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        focusRingWidth: '2',
        focusRingColor: 'ring',
        focusRingOffsetWidth: '2',
      },
    },
  },
})
