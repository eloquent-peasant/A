/**
 * @see https://github.com/privatenumber/esbuild-loader
 */

export const javascriptRule = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'esbuild-loader',
  options: {
    target: 'es2015',
  },
}
