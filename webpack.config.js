var webpack = require('webpack');
var version = require("./package.json").version;
const path = require('path');

var banner =
  "/**\n" +
  " * vue-markdown v" + version + "\n" +
  " * https://github.com/rockfreak/vue-markdown\n" +
  " * MIT License\n" +
  " */\n";

module.exports = {
  entry: './src/build.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-markdown.js',
    library: 'VueMarkdown',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.BannerPlugin({ banner: banner, raw: true })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
}
