/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    // Allow importing SVGs as react components. This is currently needed by the icon library
    // but it may be more sensible to drop this loader and the one in the Studio and simply
    // import svgs as imgs.
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "react-svg-loader",
          options: {
            svgo: {
              plugins: [{ removeUselessStrokeAndFill: false }],
            },
          },
        },
      ],
    })
    return config
  },
}

module.exports = nextConfig
