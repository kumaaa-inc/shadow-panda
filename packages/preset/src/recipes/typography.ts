import { defineRecipe } from '@pandacss/dev'

export const h1 = defineRecipe({
  className: 'h1',
  description: 'Typography - h1 style',
  base: {
    textStyle: 'h1',
    scrollMargin: '20',
  },
})

export const h2 = defineRecipe({
  className: 'h2',
  description: 'Typography - h2 style',
  base: {
    textStyle: 'h2',
    scrollMargin: '20',
    borderBottom: 'base',
    pb: '2',
    transition: 'colors',
  },
})

export const h3 = defineRecipe({
  className: 'h3',
  description: 'Typography - h3 style',
  base: {
    textStyle: 'h3',
    scrollMargin: '20',
  },
})

export const h4 = defineRecipe({
  className: 'h4',
  description: 'Typography - h4 style',
  base: {
    textStyle: 'h4',
    scrollMargin: '20',
  },
})

export const p = defineRecipe({
  className: 'p',
  description: 'Typography - p style',
  base: {
    textStyle: 'p',
    '&:not(:first-child)': {
      mt: '6',
    },
  },
})

export const typographyTableContainer = defineRecipe({
  className: 'typographyTableContainer',
  description: 'Typography - table container style',
  base: {
    my: '6',
    w: 'full',
    overflowX: 'auto',
  },
})

export const typographyTable = defineRecipe({
  className: 'typographyTable',
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
  className: 'blockquote',
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
  className: 'list',
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
  className: 'inlineCode',
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
  className: 'lead',
  description: 'Typography - Lead style',
  base: {
    textStyle: 'lead',
    color: 'muted.foreground',
  },
})

export const large = defineRecipe({
  className: 'large',
  description: 'Typography - Large style',
  base: {
    textStyle: 'large',
  },
})

export const small = defineRecipe({
  className: 'small',
  description: 'Typography - Small style',
  base: {
    textStyle: 'small',
  },
})

export const muted = defineRecipe({
  className: 'muted',
  description: 'Typography - Muted style',
  base: {
    textStyle: 'sm',
    color: 'muted.foreground',
  },
})

export const link = defineRecipe({
  className: 'link',
  description: 'Typography - Link style',
  base: {
    color: 'primary',
    fontWeight: 'medium',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    cursor: 'pointer',
  },
})
