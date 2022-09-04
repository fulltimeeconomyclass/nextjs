/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains:['http://cc21101-wordpress-boyv0.tw1.ru', 'cc21101-wordpress-boyv0.tw1.ru', 'raw.githubusercontent.com'],
  },
}

module.exports = nextConfig
