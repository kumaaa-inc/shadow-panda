import type { DocumentTypes } from 'contentlayer/generated'

const DOCUMENT_TYPE_ORDER = ['Overview', 'Guides', 'Component']

// Sort document by document type and `order` field, else by title
export const sortDocs = (docs: DocumentTypes[]) => {
  return [...docs].sort((a, b) => {
    const aTypeOrder = DOCUMENT_TYPE_ORDER.indexOf(a.type)
    const bTypeOrder = DOCUMENT_TYPE_ORDER.indexOf(b.type)
    if (aTypeOrder !== bTypeOrder) return aTypeOrder - bTypeOrder
    if (a.order !== b.order) return a.order - b.order
    return a.title.localeCompare(b.title)
  })
}
