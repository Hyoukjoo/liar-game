const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-knobs", "@storybook/addon-storysource"],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(tx|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              ["react-app", { flow: false, typescript: true }],
              ["@emotion/babel-preset-css-prop"],
            ],
            cacheDirectory: true,
            cacheCompression: false,
            compact: false,
          },
        },
      ],
    });

    config.resolve.alias = {
      "@src": path.resolve("src/"),
      "@common": path.resolve("src/common/"),
      "@atoms": path.resolve("src/atoms/"),
      "@molecules": path.resolve("src/molecules/"),
      "@organisms": path.resolve("src/organisms/"),
      "@emotion/styled": path.resolve("node_modules/@emotion/styled"),
    };

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
