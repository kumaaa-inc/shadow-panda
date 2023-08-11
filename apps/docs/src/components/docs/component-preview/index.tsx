import * as React from 'react'
import { css } from '@shadow-panda/styled-system/css'
import { Preview } from '@/components/docs/preview'
import { Tabs, Tab } from '@/components/docs/tabs'
import { LoadingText } from '@/components/docs/loading-text'

export interface ComponentPreviewProps {
  name: string
  type?: string
  withRecipe?: boolean
  children: React.ReactNode
}

const getExampleComponent = ({
  name,
  type = 'index',
}: {
  name: string
  type?: string
}) => React.lazy(() => import(`@/components/previews/${name}/${type}.tsx`))

export const ComponentPreview = ({
  name,
  type,
  withRecipe,
  children,
}: ComponentPreviewProps) => {
  const Example = getExampleComponent({ name, type })

  const [code, recipe] = React.Children.toArray(children)

  return (
    <Tabs
      items={
        withRecipe && recipe
          ? ['Preview', 'Code', 'Recipe']
          : ['Preview', 'Code']
      }
    >
      <Tab>
        <Preview className={css({ mt: '6', mb: '4' })}>
          <React.Suspense fallback={<LoadingText />}>
            <Example />
          </React.Suspense>
        </Preview>
      </Tab>
      <Tab>{code}</Tab>
      {withRecipe && !!recipe && <Tab>{recipe}</Tab>}
    </Tabs>
  )
}
