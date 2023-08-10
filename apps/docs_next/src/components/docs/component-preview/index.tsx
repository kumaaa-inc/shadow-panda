import * as React from 'react'
import { css } from '@shadow-panda/styled-system/css'
import { Preview } from '@/components/docs/preview'
import { Tabs, Tab } from '@/components/docs/tabs'

export interface ComponentPreviewProps {
  name: string
  type?: string
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
  children,
}: ComponentPreviewProps) => {
  const Example = getExampleComponent({ name, type })

  return (
    <Tabs items={['Preview', 'Code']}>
      <Tab>
        <Preview className={css({ mt: '6' })}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Example name={name} type={type} />
          </React.Suspense>
        </Preview>
      </Tab>
      <Tab>{children}</Tab>
    </Tabs>
  )
}
