import { notFound } from 'next/navigation'
import { ChevronRightIcon } from 'lucide-react'
import { allDocuments, type Component as ComponentDoc } from 'contentlayer/generated'
import { css } from '@shadow-panda/styled-system/css'
import { h1, icon } from '@shadow-panda/styled-system/recipes'
import { MdxComponent } from '@/components/docs/mdx-component'
import { Lead } from '@/components/docs/lead'
import { ReferenceBadges } from '@/components/docs/reference-badges'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Toc } from '@/components/docs/toc'
import { Pager } from '@/components/docs/pager'

export const generateStaticParams = async () =>
  allDocuments.map((doc) => ({ slug: doc.slugAsParams.split('/') }))

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const doc = allDocuments.find((doc) => doc.slugAsParams === params.slug.join('/'))

  if (!doc) throw new Error(`Page not found: ${params.slug.join('/')}`)

  const metadata = {
    title: doc.title,
    description: doc.description,
  }

  const ogImage = {
    alt: `${doc.title} | Shadow Panda`,
    type: 'image/png',
    width: 1200,
    height: 630,
    url: `/og/docs/${params.slug.join('/')}`,
  }

  return {
    ...metadata,
    openGraph: {
      ...metadata,
      type: 'website',
      locale: 'en_US',
      url: `https://shadow-panda.dev/docs/${doc.slugAsParams}`,
      images: [ogImage],
    },
    twitter: {
      ...metadata,
      site: 'Shadow Panda',
      card: 'summary_large_image',
      creator: '@nanopx',
      images: [ogImage],
    },
  }
}

const ComponentsPage = ({ params }: { params: { slug: string[] } }) => {
  const doc = allDocuments.find((doc) => doc.slugAsParams === params.slug.join('/'))

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
          <ChevronRightIcon className={icon()} />
          <div className={css({ fontWeight: 'medium', color: 'foreground' })}>{doc.title}</div>
        </div>

        <h1 className={h1()}>{doc.title}</h1>
        <Lead className={css({ mt: '4' })}>{doc.description}</Lead>
        {(doc as ComponentDoc).references && (
          <ReferenceBadges {...(doc as ComponentDoc).references} />
        )}

        <div className={css({ mt: '8' })}>
          <MdxComponent code={doc.body.code} />
        </div>

        <Pager className={css({ mt: '12' })} doc={doc} />
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
