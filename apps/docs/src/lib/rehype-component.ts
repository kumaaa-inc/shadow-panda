import fs from 'fs'
import path from 'path'

import type { Node } from 'unist'
import { u } from 'unist-builder'
import { visit } from 'unist-util-visit'

export interface UnistNode extends Node {
  type: string
  name?: string
  tagName?: string
  value?: string
  properties?: {
    __code__?: string
    [key: string]: unknown
  }
  attributes?: {
    name: string
    value: unknown
    type?: string
  }[]
  children?: UnistNode[]
}

export interface UnistTree extends Node {
  children: UnistNode[]
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name)
}

function getRecipeSource(component: string) {
  const presetSrcDir = path.join(process.cwd(), `../../packages/preset/src/`)

  try {
    return fs.readFileSync(
      path.join(presetSrcDir, `./recipes/${component}.ts`),
      'utf8',
    )
  } catch (error) {
    try {
      return fs.readFileSync(
        path.join(presetSrcDir, `./slot-recipes/${component}.ts`),
        'utf8',
      )
    } catch (e) {
      return ''
    }
  }
}

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.name === 'ComponentPreview') {
        const component = getNodeAttributeByName(node, 'name')?.value as string
        const type =
          (getNodeAttributeByName(node, 'type')?.value as string) ?? 'index'

        const withRecipe =
          getNodeAttributeByName(node, 'withRecipe')?.value !== undefined

        if (!component) return null

        try {
          const source = fs.readFileSync(
            path.join(
              process.cwd(),
              `./src/components/previews/${component}/${type}.tsx`,
            ),
            'utf8',
          )

          const recipeSource = withRecipe ? getRecipeSource(component) : ''

          node.children?.push(
            u('element', {
              tagName: 'pre',
              children: [
                u('element', {
                  tagName: 'code',
                  properties: {
                    className: ['language-tsx'],
                  },
                  children: [
                    {
                      type: 'text',
                      // Replace default export
                      value: source.replace('export default', 'export'),
                    },
                  ],
                }),
              ],
            }),
          )

          if (recipeSource) {
            node.children?.push(
              u('element', {
                tagName: 'pre',
                children: [
                  u('element', {
                    tagName: 'code',
                    properties: {
                      className: ['language-tsx'],
                    },
                    children: [
                      {
                        type: 'text',
                        value: recipeSource,
                      },
                    ],
                  }),
                ],
              }),
            )
          }
        } catch (error) {
          console.error(error)
        }
      }

      if (node.name === 'ComponentSource') {
        const component = getNodeAttributeByName(node, 'name')?.value as string

        if (!component) return null

        try {
          const source = fs.readFileSync(
            path.join(
              process.cwd(),
              `./src/components/ui/${component}/index.tsx`,
            ),
            'utf8',
          )

          node.children?.push(
            u('element', {
              tagName: 'pre',
              children: [
                u('element', {
                  tagName: 'code',
                  data: {
                    meta: `title="components/ui/${component}.tsx"`,
                  },
                  properties: {
                    className: ['language-tsx'],
                  },
                  children: [
                    {
                      type: 'text',
                      value: source,
                    },
                  ],
                }),
              ],
            }),
          )
        } catch (error) {
          console.error(error)
        }
      }
    })
  }
}