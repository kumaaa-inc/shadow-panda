// import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { allComponents } from 'contentlayer/generated'

export const generateStaticParams = async () =>
  allComponents.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({
  params,
}: {
  params: { component: string }
}) => {
  const post = allComponents.find(
    (post) =>
      post._raw.flattenedPath.replace(/^components\//, '') === params.component,
  )
  if (!post) throw new Error(`Component not found: ${params.component}`)
  return { title: post.title }
}

const ComponentsLayout = ({ params }: { params: { component: string } }) => {
  const post = allComponents.find(
    (post) =>
      post._raw.flattenedPath.replace(/^components\//, '') === params.component,
  )

  if (!post) {
    notFound()
  }

  const Content = getMDXComponent(post.body.code)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <Content />
    </article>
  )
}

export default ComponentsLayout
