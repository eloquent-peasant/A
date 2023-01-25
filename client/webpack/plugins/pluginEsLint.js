import { resolve } from 'path'
import { rootDir, webpackDir } from '../utils/env.js'
import findCacheDirectory from 'find-cache-dir'
import ESLintPlugin from 'eslint-webpack-plugin'

const config = {
  context: resolve(rootDir, 'source', 'scripts'),
  files: '*.js',
  overrideConfigFile: resolve(webpackDir, 'override', '.eslintrc'),
  cache: true,
  cacheLocation: findCacheDirectory({ name: '.eslintcache' }),
}

export const esLintPlugin = new ESLintPlugin(config)
