const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? "/portfoliio-site/" : "",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  }
}
