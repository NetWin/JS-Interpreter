/* jshint esversion: 11 */

const path = require('path');
const webpack = require('webpack');

function interpreterConfig(
  mode = 'development',
  filename = 'js-interpreter.js',
) {
  return {
    mode,
    entry: path.resolve(__dirname, 'src', 'js-interpreter.ts'),
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      fallback: { vm: false }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        acorn: path.resolve(__dirname, './original-repo/acorn.js')
      })
    ],
    devtool: false,
    output: {
      filename,
      globalObject: 'this',
      library: 'JSInterpreter',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'lib'),
    }
  };
}

module.exports = [
  interpreterConfig('development', 'js-interpreter.js'),
  interpreterConfig('production', 'js-interpreter.min.js')
];
