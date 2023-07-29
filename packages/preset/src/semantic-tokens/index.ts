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
        base: 'hsl(240 10% 3.9%)',
        _dark: 'hsl(0 0% 98%)',
      },
    },
    muted: {
      DEFAULT: {
        value: {
          base: 'hsl(240 4.8% 95.9%)',
          _dark: 'hsl(240 3.7% 15.9%)',
        },
      },
      foreground: {
        value: {
          base: 'hsl(240 3.8% 46.1%)',
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
          base: 'hsl(240 10% 3.9%)',
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
          base: 'hsl(240 10% 3.9%)',
          _dark: 'hsl(0 0% 98%)',
        },
      },
    },
    border: {
      value: {
        base: 'hsl(240 5.9% 90%)',
        _dark: 'hsl(240 3.7% 15.9%)',
      },
    },
    input: {
      value: {
        base: 'hsl(240 5.9% 90%)',
        _dark: 'hsl(240 3.7% 15.9%)',
      },
    },
    primary: {
      DEFAULT: {
        value: {
          base: 'hsl(240 5.9% 10%)',
          _dark: 'hsl(0 0% 98%)',
        },
      },
      foreground: {
        value: {
          base: 'hsl(0 0% 98%)',
          _dark: 'hsl(240 5.9% 10%)',
        },
      },
    },
    secondary: {
      DEFAULT: {
        value: {
          base: 'hsl(240 4.8% 95.9%)',
          _dark: 'hsl(240 3.7% 15.9%)',
        },
      },
      foreground: {
        value: {
          base: 'hsl(240 5.9% 10%)',
          _dark: 'hsl(0 0% 98%)',
        },
      },
    },
    accent: {
      DEFAULT: {
        value: {
          base: 'hsl(240 4.8% 95.9%)',
          _dark: 'hsl(240 3.7% 15.9%)',
        },
      },
      foreground: {
        value: {
          base: 'hsl(240 5.9% 10%)',
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
        base: 'hsl(240 5% 64.9%)',
        _dark: 'hsl(240 3.7% 15.9%)',
      },
    },
  },
  borders: {
    base: { value: '1px solid {colors.border}' },
    input: { value: '1px solid {colors.input}' },
    primary: { value: '1px solid {colors.primary}' },
  },
  radii: {
    radius: {
      value: '0.5rem',
    },
  },
  animations: {
    'accordion-down': { value: 'accordion-down 0.2s ease-out' },
    'accordion-up': { value: 'accordion-up 0.2s ease-out' },
  },
})
