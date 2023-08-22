import { allDocuments } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { ImageResponse } from 'next/server'
import { Icons } from '@/components/docs/icons'

export const runtime = 'edge'

const size = {
  width: 1200,
  height: 630,
}

export async function GET(_: Request, { params }: { params: { slug?: string[] } }) {
  const slug = params.slug ?? []
  if (slug.length === 0) {
    return notFound()
  }

  const doc = allDocuments.find((doc) => doc.slugAsParams === slug.join('/'))

  if (!doc) {
    return notFound()
  }

  const [poppinsBold, poppinsMedium] = await Promise.all([
    fetch(new URL('@/assets/Poppins-Bold.ttf', import.meta.url)).then((res) => res.arrayBuffer()),
    fetch(new URL('@/assets/Poppins-Medium.ttf', import.meta.url)).then((res) => res.arrayBuffer()),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: 'Poppins',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ height: '24px', width: '100%', background: '#000' }} />
        <div
          style={{
            padding: '48px',
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
          }}
        >
          <Icons.logoWithText style={{ width: 274.12 * 1.3, height: 38 * 1.3 }} />
          <div
            style={{
              display: 'flex',
              flex: '1',
              flexDirection: 'column',
              marginTop: '64px',
              gap: '32px',
            }}
          >
            <div
              style={{
                display: 'flex',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fafafa',
                  background: '#18181b',
                  fontSize: '28px',
                  borderRadius: '9999px',
                  padding: '12px 24px 6px',
                  fontWeight: 500,
                  lineHeight: '100%',
                }}
              >
                {doc.type}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div
                style={{
                  fontSize: '72px',
                  fontWeight: 600,
                  lineHeight: '100%',
                  letterSpacing: '-0.01em',
                }}
              >
                {doc.title}
              </div>

              <div
                style={{
                  fontSize: '44px',
                  fontWeight: 500,
                  lineHeight: '120%',
                  letterSpacing: '-0.01em',
                  color: '#565656',
                }}
              >
                {doc.description}
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '24px', width: '100%', background: '#000' }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Poppins',
          data: poppinsBold,
          style: 'normal',
          weight: 600,
        },
        {
          name: 'Poppins',
          data: poppinsMedium,
          style: 'normal',
          weight: 500,
        },
      ],
    },
  )
}
