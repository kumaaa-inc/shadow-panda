import { defineRecipe } from '@pandacss/dev'

export const tableContainer = defineRecipe({
  className: 'tableContainer',
  description: 'Styles for the TableContainer component',
  base: {
    w: 'full',
    overflow: 'auto',
  },
})

export const table = defineRecipe({
  className: 'table',
  description: 'Styles for the Table component',
  base: {
    w: 'full',
    captionSide: 'bottom',
    textStyle: 'sm',
  },
})

export const tableHeader = defineRecipe({
  className: 'tableHeader',
  description: 'Styles for the TableHeader component',
  base: {
    '& tr': {
      borderBottom: 'base',
    },
  },
})

export const tableBody = defineRecipe({
  className: 'tableBody',
  description: 'Styles for the TableBody component',
  base: {
    '& tr': {
      _last: {
        borderBottom: 'transparent',
      },
    },
  },
})

export const tableFooter = defineRecipe({
  className: 'tableFooter',
  description: 'Styles for the TableFooter component',
  base: {
    bg: 'primary',
    fontWeight: 'medium',
    color: 'primary.foreground',
  },
})

export const tableRow = defineRecipe({
  className: 'tableRow',
  description: 'Styles for the TableRow component',
  base: {
    borderBottom: 'base',
    transition: 'colors',

    _hover: {
      bga: 'muted/50',
    },

    '&[data-state=selected]': {
      bga: 'muted/100',
    },
  },
})

export const tableHead = defineRecipe({
  className: 'tableHead',
  description: 'Styles for the TableHead component',
  base: {
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
})

export const tableCell = defineRecipe({
  className: 'tableCell',
  description: 'Styles for the TableCell component',
  base: {
    p: '4',
    verticalAlign: 'middle',

    '&:has([role=checkbox])': {
      pr: '0',
    },
  },
})

export const tableCaption = defineRecipe({
  className: 'tableCaption',
  description: 'Styles for the TableCaption component',
  base: {
    mt: '4',
    textStyle: 'sm',
    color: 'muted.foreground',
  },
})
