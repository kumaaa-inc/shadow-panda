import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      value: {
        base: 'hsl(0 0% 100%)',
        _dark: 'hsl(240 10% 3.9%)',
      },
    },
    foreground: {
      value: {
        base: 'hsl(222.2 47.4% 11.2%)',
        _dark: 'hsl(0 0% 98%)',
      },
    },
    muted: {
      DEFAULT: {
        value: {
          base: 'hsl(210 40% 96.1%)',
          _dark: 'hsl(240 3.7% 15.9%)',
        },
      },
      foreground: {
        value: {
          base: 'hsl(215.4 16.3% 46.9%)',
          _dark: 'hsl(240 5% 64.9%)',
        },
      },
    },
    card: {
      DEFAULT: {
        value: {
          base: 'hsl(0 0% 100%)',
          _dark: 'hsl(240 10% 3.9%)',
        },
      },
      foreground: {
        value: {
          base: 'hsl(222.2 47.4% 11.2%)',
          _dark: 'hsl(0 0% 98%)',
        },
      },
    },
    popover: {
      DEFAULT: {
        value: {
          base: 'hsl(0 0% 100%)',
          _dark: 'hsl(240 10% 3.9%)',
        },
      },
      foreground: {
        value: {
          base: 'hsl(222.2 47.4% 11.2%)',
          _dark: 'hsl(0 0% 98%)',
        },
      },
    },
    border: {
      value: {
        base: 'hsl(214.3 31.8% 91.4%)',
        _dark: 'hsl(240 3.7% 15.9%)',
      },
    },
    input: {
      value: {
        base: 'hsl(214.3 31.8% 91.4%)',
        _dark: 'hsl(240 3.7% 15.9%)',
      },
    },
    primary: {
      DEFAULT: {
        value: {
          base: 'hsl(222.2 47.4% 11.2%)',
          _dark: 'hsl(0 0% 98%)',
        },
      },
      foreground: {
        value: {
          base: 'hsl(210 40% 98%)',
          _dark: 'hsl(240 5.9% 10%)',
        },
      },
    },
    secondary: {
      DEFAULT: {
        value: {
          base: 'hsl(210 40% 96.1%)',
          _dark: 'hsl(240 3.7% 15.9%)',
        },
      },
      foreground: {
        value: {
          base: 'hsl(222.2 47.4% 11.2%)',
          _dark: 'hsl(0 0% 98%)',
        },
      },
    },
    accent: {
      DEFAULT: {
        value: {
          base: 'hsl(210 40% 96.1%)',
          _dark: 'hsl(240 3.7% 15.9%)',
        },
      },
      foreground: {
        value: {
          base: 'hsl(222.2 47.4% 11.2%)',
          _dark: 'hsl(0 0% 98%)',
        },
      },
    },
    destructive: {
      DEFAULT: {
        value: {
          base: 'hsl(0 84.2% 60.2%)',
          _dark: 'hsl(0 62.8% 30.6%)',
        },
      },
      foreground: {
        value: {
          base: 'hsl(0 0% 98%)',
          _dark: 'hsl(0 85.7% 97.3%)',
        },
      },
    },
    ring: {
      value: {
        base: 'hsl(215 20.2% 65.1%)',
        _dark: 'hsl(240 3.7% 15.9%)',
      },
    },
  },
  radii: {
    radius: {
      value: '0.5rem',
    },
  },
})
