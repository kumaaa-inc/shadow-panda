'use client'

import * as React from 'react'

type AnyProps = Record<string, unknown>
type AnyRecipe = {
  (props?: AnyProps): Record<string, string>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  splitVariantProps: (props: AnyProps) => any
}

type Slots<R extends () => Record<string, string>> = keyof ReturnType<R>

export const createStyleContext = <R extends AnyRecipe>(recipe: R) => {
  const StyleContext = React.createContext<ReturnType<R> | null>(null)

  const withProvider = <T,>(
    Component: React.ComponentType<T>,
    slot: Slots<R>,
    initialProps?: Partial<T>,
  ) => {
    const Comp = React.forwardRef((props: T & Parameters<R>[0], ref) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props as AnyProps)
      const { className = '', ...rest } = otherProps
      const styles = recipe(variantProps) as ReturnType<R>
      const slotClass = styles?.[slot ?? '']

      return (
        <StyleContext.Provider value={styles}>
          <Component
            ref={ref}
            className={className ? `${slotClass} ${className}` : slotClass}
            {...initialProps}
            {...rest}
          />
        </StyleContext.Provider>
      )
    })
    Comp.displayName = Component.displayName || Component.name
    return Comp
  }

  const withContext = <T,>(
    Component: React.ComponentType<T>,
    slot?: Slots<R>,
    initialProps?: Partial<T>,
  ) => {
    if (!slot) return Component

    const Comp = React.forwardRef(({ className, ...rest }: T & { className?: string }, ref) => {
      const styles = React.useContext(StyleContext)
      const slotClass = styles?.[slot ?? '']
      return (
        <Component
          ref={ref}
          className={className ? `${slotClass} ${className}` : slotClass}
          {...initialProps}
          {...(rest as T)}
        />
      )
    })
    Comp.displayName = Component.displayName || Component.name
    return Comp
  }

  const useSlot = (slot?: Slots<R>) => {
    const styles = React.useContext(StyleContext)
    return styles?.[slot ?? ''] ?? ''
  }

  return {
    withProvider,
    withContext,
    useSlot,
  }
}
