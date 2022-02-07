const withTM = require("next-transpile-modules")([]);
const withPlugins = require("next-compose-plugins");

const config = {
  reactStrictMode: true,
  optimization: {
    providedExports: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // webfont loader
    config.module.rules.push({
      test: /\.(eot|otf|ttf|woff|woff2)$/,
      type: "asset/resource",
      use: {
        loader: "url-loader",
      },
    });
    return config;
  },
};

module.exports = withPlugins([withTM(config)], {
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/intro",
        permanent: true,
      },
    ];
  },
});
