import { defineSlotRecipe } from '@pandacss/dev'

export const accordion = defineSlotRecipe({
  className: 'accordion',
  description: 'Styles for the Accordion component',
  slots: ['root', 'item', 'header', 'trigger', 'content'],
  base: {
    item: {
      borderBottom: 'base',
    },
    header: {
      display: 'flex',
    },
    trigger: {
      display: 'flex',
      flex: '1',
      alignItems: 'center',
      justifyContent: 'space-between',
      py: '4',
      fontWeight: 'medium',
      transition: 'all',
      cursor: 'pointer',

      _hover: {
        textDecoration: 'underline',
      },

      '& > svg': {
        h: '4',
        w: '4',
        flexShrink: '0',
        transition: 'transform',
        transitionDuration: 'normal',
      },

      '&[data-state=open] > svg': {
        transform: 'rotate(180deg)',
      },
    },
    content: {
      overflow: 'hidden',
      textStyle: 'sm',
      transition: 'all',

      '&[data-state=closed]': {
        animation: 'accordion-up',
      },

      '&[data-state=open]': {
        animation: 'accordion-down',
      },

      '& > div': {
        pb: '4',
        pt: '0',
      },
    },
  },
})
