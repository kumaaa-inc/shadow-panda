import { createContentlayerPlugin } from 'next-contentlayer'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Disable logging from webpack
    // Remove after the `webpack.cache.PackFileCacheStrategy` errors are fixed
    // @see https://github.com/contentlayerdev/contentlayer/issues/506
    config.infrastructureLogging = {
      level: 'error',
    }
    return config
  },
  redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/overview/introduction',
        permanent: true,
      },

      {
        source: '/docs/components',
        destination: '/docs/components/accordion',
        permanent: true,
      },
    ]
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withContentlayer(nextConfig)
