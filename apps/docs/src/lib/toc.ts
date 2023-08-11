import GithubSlugger from 'github-slugger'

export type Toc = {
  level: number
  text: string
  slug: string
  children?: Toc
}[]

export const getSlugs = (toc: Toc = []): string[] => {
  if (!toc.length) return []

  const ids = toc.map((node) => node.slug)
  const childrenIds = toc.map((node) => getSlugs(node.children)).flat()
  return [...ids, ...childrenIds]
}

const getTocTree = (tocData: Toc = []): Toc => {
  if (!tocData.length) return []

  const rootNodes = [
    tocData[0],
    ...tocData.slice(1).filter((node) => node.level <= tocData[0].level),
  ]

  const rootIndices = rootNodes.map((node) => tocData.indexOf(node))

  const chunks = rootIndices.map((rootIndex, index) => {
    const nextRootIndex = rootIndices[index + 1]
    return tocData.slice(rootIndex + 1, nextRootIndex)
  })

  const tree = rootNodes.map((node, index) => {
    const children = chunks[index]

    if (children.length) {
      node.children = getTocTree(children)
    }

    return node
  })

  return tree
}

export const generateToc = (content: string, level: number = 3) => {
  const headerRegex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g
  const slugger = new GithubSlugger()
  const tocNodes = Array.from(content.matchAll(headerRegex))
    .map(({ groups }) => {
      const flag = groups?.flag
      const content = groups?.content ?? ''

      if (!flag || !content) return null

      if (flag.length > level) return null

      return {
        level: flag.length,
        text: content,
        slug: content ? slugger.slug(content) : '',
      }
    })
    .filter(Boolean) as Toc

  const toc = getTocTree(tocNodes)
  return toc
}
