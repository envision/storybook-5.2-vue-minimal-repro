module.exports = [
  {
    name: "@storybook/preset-typescript",
    // options: {
    //   transpileManager: true
    // }
  },
  {
    name: '@storybook/preset-scss',
    // options: {
    //   cssLoaderOptions: {
    //     modules: true,
    //     localIdentName: '[name]__[local]--[hash:base64:5]'
    //   }
    // }
  },
  {
    name: '@storybook/addon-docs/vue/preset',
    options: {
      configureJSX: true,
      babelOptions: {},
      sourceLoaderOptions: null,
    },
  },
];
