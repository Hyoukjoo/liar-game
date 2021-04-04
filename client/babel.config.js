const presets = [
  'next/babel',
  [
    '@emotion/babel-preset-css-prop',
    {
      autoLabel: 'dev-only',
      labelFormat: '-[dirname]-[local]-',
    },
  ],
];

const plugins = [['@babel/plugin-proposal-class-properties']];

module.exports = { presets, plugins };
