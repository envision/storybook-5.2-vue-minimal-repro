const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

// https://github.com/storybookjs/storybook/issues/6467

// https://github.com/storybookjs/storybook/issues/2792
module.exports = ({ config }) => {

	config.resolve.alias['@'] = rootPath;
  config.resolve.alias['~'] = rootPath;

  config.module.rules.push({
    test: /\.scss$/,
		use: [
			'vue-style-loader',
			'css-loader',
			{
				loader: 'sass-loader',
				options: {
					data: '@import "@/assets/styles/abstracts/_variables.scss";'
				}
			}
		],
  });

  config.resolve.extensions.push(
    '.ts',
    '.vue',
    '.css',
    '.scss',
    '.html'
  );

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      }
    ]
  });

  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  return config;
};
