![Shadow Panda](/apps/docs/src/app/opengraph-image.png)

`Shadow Panda` is created based on [shadcn/ui](https://ui.shadcn.com/), tailored specifically for developers utilizing [Panda CSS](https://panda-css.com/) as an alternative to Tailwind CSS.

We provide a **preset** for [Panda CSS](https://panda-css.com/) that allows you to use the same components as [shadcn/ui](https://ui.shadcn.com/), but with [Panda CSS](https://panda-css.com/).

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Documentation

Visit our documentation: [https://shadow-panda.dev/](https://shadow-panda.dev/)

## Install

Install the preset and a utility package (used by most components) by running:

```bash
npm i -D @shadow-panda/preset
```

```bash
npm i @shadow-panda/style-context
```

Add the preset to your `panda.config.ts`

```ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Required: Add the preset to your config.
  presets: ['@shadow-panda/preset'],

  // Optional: Enable CSS reset
  preflight: true,

  // Use React
  jsxFramework: 'react',

  // Optional: Emit artifacts to `node_modules` as a package.
  // The copy-paste component examples use `@shadow-panda/styled-system` as the import path of the generated files.
  // If you choose not to use this option, you should rewrite your component imports as needed.
  // @see https://panda-css.com/docs/references/config#emitpackage
  emitPackage: true,
  outdir: '@shadow-panda/styled-system',

  // Other configurations and overrides...
})
```

Compile Panda CSS, copy [components](https://shadow-panda.dev/docs/overview/supported-components) and use it!

## Acknowledgement

A huge thanks to the creators of [shadcn/ui](https://ui.shadcn.com/) for providing an excellent set of components and documentation.  
Most of the components and documentation were taken from [shadcn/ui](https://ui.shadcn.com/).

Also, a huge thanks to:

- [Panda CSS](https://panda-css.com/)
- [Radix UI](https://radix-ui.com/)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nanopx"><img src="https://avatars.githubusercontent.com/u/7698394?v=4?s=100" width="100px;" alt="Atsushi Yoshitake"/><br /><sub><b>Atsushi Yoshitake</b></sub></a><br /><a href="https://github.com/kumaaa-inc/shadow-panda/commits?author=nanopx" title="Code">💻</a> <a href="https://github.com/kumaaa-inc/shadow-panda/commits?author=nanopx" title="Documentation">📖</a> <a href="#design-nanopx" title="Design">🎨</a> <a href="#example-nanopx" title="Examples">💡</a> <a href="#maintenance-nanopx" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[MIT](LICENSE.md) © [nanopx](https://github.com/nanopx)
