import { promises as fs } from 'fs'
import { components } from '../components'

export async function findComponent(name: string) {
  const component = components[name]

  if (!component) {
    throw new Error(`Component "${name}" not found.`)
  }

  const exampleFiles = (
    await fs.readdir(`./src/components/examples/${name}`)
  ).filter((file) => file !== 'index.tsx')

  const [code, preview, examples] = await Promise.all([
    fs.readFile(`./src/components/ui/${name}/index.tsx`, 'utf-8'),
    fs.readFile(`./src/components/examples/${name}/index.tsx`, 'utf-8'),
    Promise.all(
      exampleFiles.map((file) =>
        fs.readFile(`./src/components/examples/${name}/${file}`, 'utf-8'),
      ),
    ),
  ])

  return {
    name,
    ...component,
    source: { code, preview, examples },
  }
}
