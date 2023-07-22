// eslint-disable-next-line import/default
import nextra from 'nextra'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/overview/getting-started',
        permanent: true,
      },
    ]
  },
}

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

export default withNextra(nextConfig)
