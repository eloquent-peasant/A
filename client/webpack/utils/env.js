import { resolve } from 'path'
import fileDirName from '../helpers/fileDirName.js'

const { __dirname } = fileDirName(import.meta)

export const mode = process.env.NODE_ENV ?? 'production'
export const isProd = mode === 'production'
export const isDev = !isProd
export const rootDir = resolve(__dirname, '../../')
export const webpackDir = resolve(__dirname, '../')
