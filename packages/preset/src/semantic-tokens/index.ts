import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      value: 'hsl(0 0% 100%)',
    },
    foreground: {
      value: 'hsl(222.2 47.4% 11.2%)',
    },
    muted: {
      DEFAULT: {
        value: 'hsl(210 40% 96.1%)',
      },
      foreground: {
        value: '215.4 16.3% 46.9%',
      },
    },
    card: {
      DEFAULT: {
        value: 'hsl(0 0% 100%)',
      },
      foreground: {
        value: 'hsl(222.2 47.4% 11.2%)',
      },
    },
    popover: {
      DEFAULT: {
        value: 'hsl(0 0% 100%)',
      },
      foreground: {
        value: 'hsl(222.2 47.4% 11.2%)',
      },
    },
    border: {
      value: 'hsl(214.3 31.8% 91.4%)',
    },
    input: {
      value: 'hsl(214.3 31.8% 91.4%)',
    },
    primary: {
      DEFAULT: {
        value: 'hsl(222.2 47.4% 11.2%)',
      },
      foreground: {
        value: 'hsl(210 40% 98%)',
      },
    },
    secondary: {
      DEFAULT: {
        value: 'hsl(210 40% 96.1%)',
      },
      foreground: {
        value: 'hsl(222.2 47.4% 11.2%)',
      },
    },
    accent: {
      DEFAULT: {
        value: 'hsl(210 40% 96.1%)',
      },
      foreground: {
        value: 'hsl(222.2 47.4% 11.2%)',
      },
    },
    destructive: {
      DEFAULT: {
        value: 'hsl(0 84.2% 60.2%)',
      },
      foreground: {
        value: 'hsl(0 0% 98%)',
      },
    },
    ring: {
      value: 'hsl(215 20.2% 65.1%)',
    },
  },
  radii: {
    radius: {
      value: '0.5rem',
    },
  },
})
