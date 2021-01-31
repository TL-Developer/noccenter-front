const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  return alias({
    '@src': './src',
    '@pages': './src/pages',
    '@assets': './src/assets',
    '@commons': './src/commons',
    '@theme': './src/theme',
  })(config)
}
