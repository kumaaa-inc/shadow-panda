import { defineRecipe } from '@pandacss/dev'

export const tabsList = defineRecipe({
  name: 'tabsList',
  description: 'Styles for the TabsList component',
  base: {
    display: 'inline-flex',
    h: '9',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: 'lg',
    bg: 'muted',
    color: 'muted.foreground',
  },
})

export const tabsTrigger = defineRecipe({
  name: 'tabsTrigger',
  description: 'Styles for the TabsTrigger component',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    rounded: 'md',
    px: '3',
    py: '1',
    textStyle: 'sm',
    fontWeight: 'medium',
    transition: 'all',

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
})

export const tabsContent = defineRecipe({
  name: 'tabsContent',
  description: 'Styles for the TabsContent component',
  base: {
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
})
