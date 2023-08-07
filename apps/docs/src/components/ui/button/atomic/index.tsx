import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import {
  cva,
  cx,
  type RecipeVariantProps,
} from '@shadow-panda/styled-system/css'

const buttonVariants = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: 'md',
    textStyle: 'sm',
    fontWeight: 'medium',
    transition: 'colors',
    cursor: 'pointer',
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
  },
  variants: {
    variant: {
      default: {
        bg: 'primary',
        color: 'primary.foreground',

        _hover: {
          bga: 'primary/90',
        },
      },
      destructive: {
        bg: 'destructive',
        color: 'destructive.foreground',

        _hover: {
          bga: 'destructive/90',
        },
      },
      outline: {
        border: 'input',
        bg: 'background',

        _hover: {
          bg: 'accent',
          color: 'accent.foreground',
        },
      },
      secondary: {
        bg: 'secondary',
        color: 'secondary.foreground',

        _hover: {
          bga: 'secondary/90',
        },
      },
      ghost: {
        _hover: {
          bg: 'accent',
          color: 'accent.foreground',
        },
      },
      link: {
        color: 'primary',
        textUnderlineOffset: '4px',

        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    size: {
      default: {
        h: '10',
        px: '4',
        py: '2',
      },
      sm: {
        h: '9',
        rounded: 'md',
        px: '3',
      },
      lg: {
        h: '11',
        rounded: 'md',
        px: '8',
      },
      icon: {
        h: '10',
        w: '10',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export type ButtonVariantProps = RecipeVariantProps<typeof buttonVariants>

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    asChild?: boolean
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cx(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
