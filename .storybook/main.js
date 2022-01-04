const path = require('path')

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-essentials'],
  // addons: [
  //   {
  //     name: '@storybook/addon-essentials',
  //     options: {
  //       actions: false,
  //       backgrounds: false,
  //       controls: true,
  //       docs: false,
  //       viewport: false,
  //       toolbars: false
  //     }
  //   }
  // ],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    })
    return config
  }
}
