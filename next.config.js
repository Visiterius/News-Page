/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:['www.teslarati.com','spacenews.com','www.nasa.gov']
  }
}

module.exports = nextConfig
