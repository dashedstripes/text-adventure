let path = require('path')

module.exports = {
  entry: './app.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}