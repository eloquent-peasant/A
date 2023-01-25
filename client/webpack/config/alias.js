import { resolve } from 'path'
import { rootDir } from '../utils/env.js'

export const aliasEntries = {
  src: resolve(rootDir, 'source'),
  output: resolve(rootDir, 'public'),
}
