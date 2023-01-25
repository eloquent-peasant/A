import { resolve } from 'path'
import { rootDir } from '../utils/env.js'

export default {
  main: [
    resolve(rootDir, 'source', 'scripts', 'app.js'),
    resolve(rootDir, 'source', 'styles', 'app.css'),
  ],
}
