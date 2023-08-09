import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode, { type LineElement } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { codeImport } from 'remark-code-import'
import remarkGfm from 'remark-gfm'
import { remarkNpm2Yarn } from '@theguild/remark-npm2yarn'
import { visit } from 'unist-util-visit'
import { generateToc } from './src/lib/toc'

const TOC_LEVEL = 3

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
    toc: { type: 'boolean', required: false, default: true },
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
    tocData: {
      type: 'json',
      resolve: async (doc) => {
        return generateToc(doc.body.raw, TOC_LEVEL)
      },
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
          onVisitLine(node: LineElement) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node: LineElement) {
            node.properties.className?.push('line--highlighted')
          },
          onVisitHighlightedWord(node: LineElement) {
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
