# @shadow-panda/preset

`Shadow Panda` is an adoption of [shadcn/ui](https://ui.shadcn.com/), tailored specifically for developers utilizing [Panda CSS](https://panda-css.com/) as an alternative to Tailwind CSS.

This package is a **preset** for [Panda CSS](https://panda-css.com/) that allows you to use the same components as [shadcn/ui](https://ui.shadcn.com/), but with [Panda CSS](https://panda-css.com/).

## Documentation

Visit our documentation: [https://shadow-panda.vercel.app/](https://shadow-panda.vercel.app/)

## Install

Install the preset by running the following command:

```bash
npm i -D @shadow-panda/preset
```

Add the preset to your `panda.config.ts`

```ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@shadow-panda/preset'],
  // Other configurations and overrides...
})
```

Compile Panda CSS, copy [components](https://shadow-panda.vercel.app/docs/overview/supported-components) and use it!

## Acknowledgement

A huge thanks to the creators of [shadcn/ui](https://ui.shadcn.com/) for providing an excellent set of components and documentation.  
Most of the components and documentation were taken from [shadcn/ui](https://ui.shadcn.com/).

Also, a huge thanks to:

- [Panda CSS](https://panda-css.com/)
- [Radix UI](https://radix-ui.com/)
