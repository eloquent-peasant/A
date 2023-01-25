import { resolve } from 'path'
import { webpackDir } from '../utils/env.js'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const miniCssExtractLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: '',
  },
}

const cssLoader = {
  loader: 'css-loader',
  options: { importLoaders: 1 },
}

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      config: resolve(webpackDir, 'override', 'postcss.config.js'),
    },
  },
}

export const cssRule = {
  test: /\.css$/,
  use: [miniCssExtractLoader, cssLoader, postCssLoader],
}
