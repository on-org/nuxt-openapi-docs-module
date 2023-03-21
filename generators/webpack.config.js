const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
import alias from '@rollup/plugin-alias';
module.exports = {
  entry: {
    'httpsnippet': './src/httpsnippet.js',
  }, // ваш исходный файл
  output: {
    path: path.resolve(__dirname, 'dist'),
    // library: "httpsnippet", // Desired name for the global variable when using as a drop-in script-tag.
    // libraryTarget: 'umd',
    // module: true,
  },
  // optimization: {
  //   nodeEnv: 'production',
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': false,
      'process.env.NODE_DEBUG': false,
      'process.env.DEBUG': false,
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  target: 'web', // установка target на 'web' говорит webpack, что вы хотите создать бандл только для браузера
  // externals: [nodeExternals()],
  resolve: {
    fallback: {
      "stream": false,
      "util": require.resolve("util/")
    }
  }
};
