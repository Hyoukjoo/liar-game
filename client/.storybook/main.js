const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(tx|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              ['react-app', { flow: false, typescript: true }],
              ['@emotion/babel-preset-css-prop'],
            ],
            cacheDirectory: true,
            cacheCompression: false,
            compact: false,
          },
        },
      ],
    });

    config.resolve.alias = {
      '@src': path.resolve('src/'),
      '@common': path.resolve('src/common/'),
      '@atoms': path.resolve('src/components/atoms/'),
      '@molecules': path.resolve('src/components/molecules/'),
      '@organisms': path.resolve('src/components/organisms/'),
      '@templates': path.resolve('src/components/templates/'),
      '@views': path.resolve('src/components/views/'),
      '@models': path.resolve('src/models/'),
      '@utils': path.resolve('src/utils/'),
      '@hooks': path.resolve('src/hooks/'),
      '@emotion/styled': path.resolve('node_modules/@emotion/styled'),
    };

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
