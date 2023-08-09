import { notFound } from 'next/navigation'
import { ChevronRightIcon } from 'lucide-react'
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
        <div
          className={css({
            mb: '4',
            display: 'flex',
            alignItems: 'center',
            spaceX: '1',
            textStyle: 'sm',
            color: 'muted.foreground',
          })}
        >
          <div className={css({ truncate: true })}>Docs</div>
          <ChevronRightIcon className={css({ h: '4', w: '4' })} />
          <div className={css({ fontWeight: 'medium', color: 'foreground' })}>
            {doc.title}
          </div>
        </div>

        <h1 className={h1()}>{doc.title}</h1>
        <Lead className={css({ mt: '4' })}>{doc.description}</Lead>
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
