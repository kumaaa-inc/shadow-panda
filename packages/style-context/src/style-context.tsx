'use client'

import * as React from 'react'

type AnyProps = Record<string, unknown>
type AnyRecipe = {
  (props?: AnyProps): Record<string, string>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  splitVariantProps: (props: AnyProps) => any
}

export const createStyleContext = <R extends AnyRecipe>(recipe: R) => {
  const StyleContext = React.createContext<Record<string, string> | null>(null)

  // eslint-disable-next-line @typescript-eslint/ban-types
  const withProvider = <T extends {}>(
    Component: React.ComponentType<T>,
    part?: string,
  ) => {
    const Comp = React.forwardRef((props: T & Parameters<R>[0], ref) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props)
      const { className = '', ...rest } = otherProps
      const styles = recipe(variantProps)
      const partClass = styles?.[part ?? '']

      return (
        <StyleContext.Provider value={styles}>
          <Component
            ref={ref}
            className={className ? `${partClass} ${className}` : partClass}
            {...rest}
          />
        </StyleContext.Provider>
      )
    })
    Comp.displayName = Component.displayName || Component.name
    return Comp
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  const withContext = <T extends {}>(
    Component: React.ComponentType<T>,
    part?: string,
  ) => {
    if (!part) return Component

    const Comp = React.forwardRef(
      ({ className, ...rest }: T & { className?: string }, ref) => {
        const styles = React.useContext(StyleContext)
        const partClass = styles?.[part ?? '']
        return (
          <Component
            ref={ref}
            className={className ? `${partClass} ${className}` : partClass}
            {...(rest as T)}
          />
        )
      },
    )
    Comp.displayName = Component.displayName || Component.name
    return Comp
  }

  return {
    withProvider,
    withContext,
  }
}
