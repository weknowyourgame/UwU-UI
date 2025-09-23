const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        port: "",
        hostname: "musicbrainz.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        port: "",
        hostname: "framerusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        port: "",
        hostname: "pub-4de8a3d0fa684a02ba7a6c19c653485c.r2.dev",
        pathname: "/**",
      }
    ],
  },
}

module.exports = withMDX(nextConfig)
