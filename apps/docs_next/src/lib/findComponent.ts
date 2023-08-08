import { readFileSync } from 'fs'
import { components } from '@/components'

export async function findComponent(name: keyof typeof components) {
  const component = components[name]

  if (!component) {
    throw new Error(`Component "${name}" not found.`)
  }

  const code = readFileSync(`./src/components/ui/${name}/index.tsx`, 'utf-8')
  const preview = readFileSync(
    `./src/components/_docs/examples/${name}/index.tsx`,
    'utf-8',
  )

  return {
    name,
    ...component,
    files: { code, preview },
  }
}
