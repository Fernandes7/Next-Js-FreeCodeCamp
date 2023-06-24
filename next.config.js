/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
      hostname:"images.unsplash.com",
  },{
    hostname:"wembleypark.com"
  }]
  }
}

module.exports = nextConfig
