interface Components {
  [key: string]: {
    dependencies: string[]
    componentDependencies: string[]
  }
}

export const components: Components = {
  button: {
    dependencies: ['@radix-ui/react-slot'],
    componentDependencies: [],
  },
}
