/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '/dzyllqqxi/**',
          },
        ],
      },
      // output: 'export',
     
}

module.exports = nextConfig
