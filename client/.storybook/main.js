const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-knobs", "@storybook/addon-storysource"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(tx|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]],
            cacheDirectory: true,
            cacheCompression: false,
            compact: false,
          },
        },
      ],
    });

    config.resolve.alias["@src"] = path.resolve("src/");
    config.resolve.alias["@common"] = path.resolve("src/common/");
    config.resolve.alias["@components"] = path.resolve("src/components/");
    config.resolve.alias["@emotion/styled"] = path.resolve(
      "node_modules/@emotion/styled"
    );
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
