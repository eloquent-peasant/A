import { resolve } from 'path'
import { rootDir, webpackDir } from '../utils/env.js'
import findCacheDirectory from 'find-cache-dir'
import StylelintPlugin from 'stylelint-webpack-plugin'

const config = {
  context: resolve(rootDir, 'source', 'styles'),
  files: '*.css',
  configFile: resolve(webpackDir, 'override', '.stylelintrc'),
  cache: true,
  cacheLocation: findCacheDirectory({ name: '.stylelintcache' }),
}

export const styleLintPlugin = new StylelintPlugin(config)
