import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { codeImport } from 'remark-code-import'
import remarkGfm from 'remark-gfm'
import { remarkNpm2Yarn } from '@theguild/remark-npm2yarn'
import { visit } from 'unist-util-visit'

const RadixReferencesType = defineNestedType(() => ({
  name: 'Radix',
  fields: {
    link: { type: 'string' },
    api: { type: 'string' },
  },
}))

const ReferencesType = defineNestedType(() => ({
  name: 'References',
  fields: {
    shadcnUiLink: { type: 'string' },
    radix: { type: 'nested', of: RadixReferencesType },
  },
}))

export const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: `components/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    references: { type: 'nested', of: ReferencesType },
  },
  computedFields: {
    componentName: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^components\//, ''),
    },
    url: {
      type: 'string',
      resolve: (post) => `/docs/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/posts',
  documentTypes: [Component],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      codeImport,
      [
        remarkNpm2Yarn,
        {
          packageName: '@/components/docs/tabs',
          tabNamesProp: 'items',
          storageKey: 'selectedPackageManager',
        },
      ],
    ],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children
            if (codeEl.tagName !== 'code') {
              return
            }

            node.__code__ = codeEl.children?.[0].value
          }
        })
      },
      [
        rehypePrettyCode,
        {
          // getHighlighter: async () => {
          //   const theme = await loadTheme(
          //     path.join(process.cwd(), '/lib/themes/dark.json'),
          //   )
          //   return await getHighlighter({ theme })
          // },
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'div') {
            if (!('data-rehype-pretty-code-fragment' in node.properties)) {
              return
            }

            const preElement = node.children.at(-1)
            if (preElement.tagName !== 'pre') {
              return
            }

            if (node.__code__) {
              preElement.properties['__code__'] = node.__code__
            }
          }
        })
      },
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['heading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
})
