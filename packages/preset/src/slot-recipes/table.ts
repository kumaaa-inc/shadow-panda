import { defineSlotRecipe } from '@pandacss/dev'

export const table = defineSlotRecipe({
  className: 'table',
  description: 'Styles for the Table component',
  slots: ['container', 'root', 'header', 'body', 'footer', 'row', 'head', 'cell', 'caption'],
  base: {
    container: {
      w: 'full',
      overflow: 'auto',
    },
    root: {
      w: 'full',
      captionSide: 'bottom',
      textStyle: 'sm',
    },
    header: {
      '& tr': {
        borderBottom: 'base',
      },
    },
    body: {
      '& tr': {
        _last: {
          borderBottom: 'transparent',
        },
      },
    },
    footer: {
      bg: 'primary',
      fontWeight: 'medium',
      color: 'primary.foreground',
    },
    row: {
      borderBottom: 'base',
      transition: 'colors',

      _hover: {
        bga: 'muted/50',
      },

      '&[data-state=selected]': {
        bga: 'muted/100',
      },
    },
    head: {
      h: '12',
      px: '4',
      textAlign: 'left',
      verticalAlign: 'middle',
      fontWeight: 'medium',
      color: 'muted.foreground',

      '&:has([role=checkbox])': {
        pr: '0',
      },
    },
    cell: {
      p: '4',
      verticalAlign: 'middle',

      '&:has([role=checkbox])': {
        pr: '0',
      },
    },
    caption: {
      mt: '4',
      textStyle: 'sm',
      color: 'muted.foreground',
    },
  },
})
