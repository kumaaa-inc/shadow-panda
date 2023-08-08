import { notFound } from 'next/navigation'
import { allComponents } from 'contentlayer/generated'
import { h1 } from '@shadow-panda/styled-system/recipes'
import { MdxComponent } from '@/components/docs/mdx-component'
import { Lead } from '@/components/docs/lead'
import { ReferenceBadges } from '@/components/docs/reference-badges'

export const generateStaticParams = async () =>
  allComponents.map((post) => ({ slug: post.componentName }))

export const generateMetadata = ({
  params,
}: {
  params: { component: string }
}) => {
  const post = allComponents.find(
    (post) => post.componentName === params.component,
  )

  if (!post) throw new Error(`Component not found: ${params.component}`)

  return { title: post.title, description: post.description }
}

const ComponentsPage = ({ params }: { params: { component: string } }) => {
  const post = allComponents.find(
    (post) => post.componentName === params.component,
  )

  if (!post) {
    notFound()
  }

  return (
    <article>
      <h1 className={h1()}>{post.title}</h1>
      <Lead>{post.description}</Lead>
      {post.references && <ReferenceBadges {...post.references} />}

      <MdxComponent code={post.body.code} />
    </article>
  )
}

export default ComponentsPage
