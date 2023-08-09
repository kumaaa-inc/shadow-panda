import { notFound } from 'next/navigation'
import { allComponents } from 'contentlayer/generated'
import { css } from '@shadow-panda/styled-system/css'
import { h1 } from '@shadow-panda/styled-system/recipes'
import { MdxComponent } from '@/components/docs/mdx-component'
import { Lead } from '@/components/docs/lead'
import { ReferenceBadges } from '@/components/docs/reference-badges'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Toc } from '@/components/docs/toc'

export const generateStaticParams = async () =>
  allComponents.map((doc) => ({ slug: doc.componentName }))

export const generateMetadata = ({
  params,
}: {
  params: { component: string }
}) => {
  const doc = allComponents.find(
    (doc) => doc.componentName === params.component,
  )

  if (!doc) throw new Error(`Component not found: ${params.component}`)

  return { title: doc.title, description: doc.description }
}

const ComponentsPage = ({ params }: { params: { component: string } }) => {
  const doc = allComponents.find(
    (doc) => doc.componentName === params.component,
  )

  if (!doc) {
    notFound()
  }

  return (
    <main
      className={css({
        position: 'relative',
        py: '8',
        lg: {
          display: 'grid',
          gridTemplateColumns: '1fr minmax(0, 200px)',
          gap: '10',
        },
      })}
    >
      <div
        className={css({
          mx: 'auto',
          w: 'full',
          minW: '0',
        })}
      >
        <h1 className={h1()}>{doc.title}</h1>
        <Lead>{doc.description}</Lead>
        {doc.references && <ReferenceBadges {...doc.references} />}

        <MdxComponent code={doc.body.code} />
      </div>
      {doc.toc && (
        <div
          className={css({
            display: 'none',
            position: 'relative',
            textStyle: 'sm',
            lg: {
              display: 'block',
            },
          })}
        >
          <div
            className={css({
              position: 'sticky',
              top: '20',
            })}
          >
            <ScrollArea className={css({ pb: '10' })}>
              <Toc toc={doc.tocData} />
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  )
}

export default ComponentsPage
