module.exports = {
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
