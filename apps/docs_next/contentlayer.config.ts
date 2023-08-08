import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: `components/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields: {
    filename: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^components\//, ''),
    },
    url: {
      type: 'string',
      resolve: (post) => `/docs/components/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/posts',
  documentTypes: [Component],
})
