const withTM = require("next-transpile-modules")([]);

const config = {
  reactStrictMode: true,
  optimization: {
    providedExports: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: require.resolve("./deps/mdx-map.js"),
      use: [{ loader: "val-loader" }],
    });

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

module.exports = withTM(config);
