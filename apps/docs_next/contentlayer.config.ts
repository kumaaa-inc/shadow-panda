import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'

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
})
