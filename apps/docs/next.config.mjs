// eslint-disable-next-line import/default
import nextra from 'nextra'

const isProd = process.env.NODE_ENV === 'production'
const assetPrefix = isProd ? '/shadow-panda' : ''

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix,
  basePath: assetPrefix,
  trailingSlash: true,
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
