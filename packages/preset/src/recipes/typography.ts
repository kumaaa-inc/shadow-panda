import { defineRecipe } from '@pandacss/dev'

export const h1 = defineRecipe({
  name: 'h1',
  description: 'Typography - h1 style',
  base: {
    textStyle: 'h1',
    scrollMargin: '20',
  },
})

export const h2 = defineRecipe({
  name: 'h2',
  description: 'Typography - h2 style',
  base: {
    textStyle: 'h2',
    scrollMargin: '20',
    borderBottom: 'base',
    pb: '2',
    transition: 'colors',

    _first: {
      mt: '0',
    },
  },
})

export const h3 = defineRecipe({
  name: 'h3',
  description: 'Typography - h3 style',
  base: {
    textStyle: 'h3',
    scrollMargin: '20',
  },
})

export const h4 = defineRecipe({
  name: 'h4',
  description: 'Typography - h4 style',
  base: {
    textStyle: 'h4',
    scrollMargin: '20',
  },
})

export const p = defineRecipe({
  name: 'p',
  description: 'Typography - p style',
  base: {
    textStyle: 'p',
    '&:not(:first-child)': {
      mt: '6',
    },
  },
})

export const tableContainer = defineRecipe({
  name: 'tableContainer',
  description: 'Typography - table container style',
  base: {
    my: '6',
    w: 'full',
    overflowX: 'auto',
  },
})

export const table = defineRecipe({
  name: 'table',
  description: 'Typography - table style',
  base: {
    w: 'full',
    '& tr': {
      m: 0,
      borderTop: 'base',
      p: 0,

      _even: {
        bg: 'muted',
      },

      '& th': {
        fontWeight: 'bold',
      },

      '& th, & td': {
        border: 'base',
        px: '4',
        py: '2',
        textAlign: 'left',

        '&[align=center]': {
          textAlign: 'center',
        },

        '&[align=right]': {
          textAlign: 'right',
        },
      },
    },
  },
})

export const blockquote = defineRecipe({
  name: 'blockquote',
  description: 'Typography - blockquote style',
  base: {
    mt: '6',
    borderLeft: 'base',
    borderLeftWidth: '2px',
    pl: '6',
    fontStyle: 'italic',
  },
})

export const list = defineRecipe({
  name: 'list',
  description: 'Typography - list style',
  base: {
    my: '6',
    ml: '6',
    listStyleType: 'disc',
    '& > li': {
      mt: '2',
    },
  },
})

export const inlineCode = defineRecipe({
  name: 'inlineCode',
  description: 'Typography - InlineCode style',
  base: {
    position: 'relative',
    rounded: 'sm',
    bg: 'muted',
    px: '0.3rem',
    py: '0.2rem',
    fontFamily: 'mono',
    textStyle: 'sm',
    fontWeight: 'semibold',
  },
})

export const lead = defineRecipe({
  name: 'lead',
  description: 'Typography - Lead style',
  base: {
    textStyle: 'lead',
    color: 'muted.foreground',
  },
})

export const large = defineRecipe({
  name: 'large',
  description: 'Typography - Large style',
  base: {
    textStyle: 'large',
  },
})

export const small = defineRecipe({
  name: 'small',
  description: 'Typography - Small style',
  base: {
    textStyle: 'small',
  },
})

export const muted = defineRecipe({
  name: 'muted',
  description: 'Typography - Muted style',
  base: {
    textStyle: 'sm',
    color: 'muted.foreground',
  },
})
