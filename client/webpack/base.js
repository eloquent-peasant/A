import { isProd } from './utils/env.js'
import { arrayFilterEmpty } from './helpers/arrayFilterEmpty.js'
import fileDirName from './helpers/fileDirName.js'
import entry from './common/entry.js'
import output from './common/output.js'
import optimization from './common/optimization.js'
import * as rules from './rules/index.js'
import * as plugins from './plugins/index.js'

const { __dirname } = fileDirName(import.meta)

export default {
  context: __dirname,
  mode: isProd ? 'production' : 'development',
  entry,
  output,
  optimization,
  module: {
    rules: arrayFilterEmpty([
      rules.javascriptRule,
      rules.cssRule,
      rules.imagesRule,
      rules.fontsRule,
    ]),
  },
  plugins: arrayFilterEmpty([
    plugins.definePlugin,
    plugins.esLintPlugin,
    plugins.styleLintPlugin,
    plugins.cleanPlugin,
    plugins.copyPlugin,
    plugins.svgSpritemapPlugin,
    plugins.miniCssExtractPlugin,
  ]),
  stats: 'minimal',
}
