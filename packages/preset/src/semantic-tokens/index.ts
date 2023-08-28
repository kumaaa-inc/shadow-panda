import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    background: {
      value: {
        base: '{colors.grayscale.0}',
        _dark: '{colors.grayscale.950}',
      },
    },
    foreground: {
      value: {
        base: '{colors.grayscale.950}',
        _dark: '{colors.grayscale.50}',
      },
    },
    muted: {
      DEFAULT: {
        value: {
          base: '{colors.grayscale.100}',
          _dark: '{colors.grayscale.800}',
        },
      },
      foreground: {
        value: {
          base: '{colors.grayscale.500}',
          _dark: '{colors.grayscale.400}',
        },
      },
    },
    card: {
      DEFAULT: {
        value: {
          base: '{colors.grayscale.0}',
          _dark: '{colors.grayscale.950}',
        },
      },
      foreground: {
        value: {
          base: '{colors.grayscale.950}',
          _dark: '{colors.grayscale.50}',
        },
      },
    },
    popover: {
      DEFAULT: {
        value: {
          base: '{colors.grayscale.0}',
          _dark: '{colors.grayscale.950}',
        },
      },
      foreground: {
        value: {
          base: '{colors.grayscale.950}',
          _dark: '{colors.grayscale.50}',
        },
      },
    },
    border: {
      value: {
        base: '{colors.grayscale.200}',
        _dark: '{colors.grayscale.800}',
      },
    },
    input: {
      value: {
        base: '{colors.grayscale.200}',
        _dark: '{colors.grayscale.800}',
      },
    },
    primary: {
      DEFAULT: {
        value: {
          base: '{colors.grayscale.900}',
          _dark: '{colors.grayscale.50}',
        },
      },
      foreground: {
        value: {
          base: '{colors.grayscale.50}',
          _dark: '{colors.grayscale.900}',
        },
      },
    },
    secondary: {
      DEFAULT: {
        value: {
          base: '{colors.grayscale.100}',
          _dark: '{colors.grayscale.800}',
        },
      },
      foreground: {
        value: {
          base: '{colors.grayscale.900}',
          _dark: '{colors.grayscale.50}',
        },
      },
    },
    accent: {
      DEFAULT: {
        value: {
          base: '{colors.grayscale.100}',
          _dark: '{colors.grayscale.800}',
        },
      },
      foreground: {
        value: {
          base: '{colors.grayscale.900}',
          _dark: '{colors.grayscale.50}',
        },
      },
    },
    destructive: {
      DEFAULT: {
        value: {
          base: '{colors.red.500}',
          _dark: '{colors.red.700}',
        },
      },
      foreground: {
        value: {
          base: '{colors.grayscale.50}',
          _dark: '{colors.red.50}',
        },
      },
    },
    ring: {
      value: {
        base: '{colors.grayscale.400}',
        _dark: '{colors.grayscale.300}',
      },
    },
  },
  borders: {
    base: { value: '1px solid {colors.border}' },
    input: { value: '1px solid {colors.input}' },
    primary: { value: '1px solid {colors.primary}' },
    destructive: { value: '1px solid {colors.destructive}' },
  },
  radii: {
    xl: { value: `calc({radii.radius} + 4px)` },
    lg: { value: `{radii.radius}` },
    md: { value: `calc({radii.radius} - 2px)` },
    sm: { value: 'calc({radii.radius} - 4px)' },
  },
  animations: {
    'accordion-down': { value: 'accordion-down 0.2s ease-out' },
    'accordion-up': { value: 'accordion-up 0.2s ease-out' },
  },
})
