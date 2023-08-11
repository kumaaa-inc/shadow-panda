import { notFound } from 'next/navigation'
import { ChevronRightIcon } from 'lucide-react'
import {
  allDocuments,
  type Component as ComponentDoc,
} from 'contentlayer/generated'
import { css } from '@shadow-panda/styled-system/css'
import { h1 } from '@shadow-panda/styled-system/recipes'
import { MdxComponent } from '@/components/docs/mdx-component'
import { Lead } from '@/components/docs/lead'
import { ReferenceBadges } from '@/components/docs/reference-badges'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Toc } from '@/components/docs/toc'
import { Pager } from '@/components/docs/pager'

export const generateStaticParams = async () =>
  allDocuments.map((doc) => ({ slug: doc.slugAsParams.split('/') }))

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] }
}) => {
  const doc = allDocuments.find(
    (doc) => doc.slugAsParams === params.slug.join('/'),
  )

  if (!doc) throw new Error(`Page not found: ${params.slug.join('/')}`)

  return { title: doc.title, description: doc.description }
}

const ComponentsPage = ({ params }: { params: { slug: string[] } }) => {
  const doc = allDocuments.find(
    (doc) => doc.slugAsParams === params.slug.join('/'),
  )

  if (!doc) {
    notFound()
  }

  return (
    <main
      className={css({
        position: 'relative',
        py: '8',
        xl: {
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
          <div className={css({ truncate: true })}>{doc.type}</div>
          <ChevronRightIcon className={css({ h: '4', w: '4' })} />
          <div className={css({ fontWeight: 'medium', color: 'foreground' })}>
            {doc.title}
          </div>
        </div>

        <h1 className={h1()}>{doc.title}</h1>
        <Lead className={css({ mt: '4' })}>{doc.description}</Lead>
        {(doc as ComponentDoc).references && (
          <ReferenceBadges {...(doc as ComponentDoc).references} />
        )}

        <MdxComponent code={doc.body.code} />

        <Pager className={css({ mt: '8' })} doc={doc} />
      </div>
      {doc.toc && (
        <div
          className={css({
            display: 'none',
            position: 'relative',
            textStyle: 'sm',
            xl: {
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
