import { resolve } from 'path'
import { rootDir } from '../utils/env.js'
import CopyPlugin from 'copy-webpack-plugin'

const config = {
  patterns: [
    {
      from: resolve(rootDir, 'source', 'shared'),
      to: '',
    },
  ],
}

export const copyPlugin = new CopyPlugin(config)
