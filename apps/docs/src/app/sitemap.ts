import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/env'
import { sortDocs } from '@/lib/sort-docs'
import { allDocuments } from 'contentlayer/generated'

const sortedDocs = sortDocs(allDocuments)

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    ...sortedDocs.map((doc) => ({
      url: `${siteUrl}${doc.url}`,
      lastModified: new Date(),
    })),
  ]
}
